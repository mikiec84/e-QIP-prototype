import React from 'react'
import ValidationElement from '../ValidationElement'

export default class Number extends ValidationElement {
  constructor (props) {
    super(props)

    this.state = {
      value: props.value,
      disabled: props.disabled,
      max: props.max,
      focus: props.focus || false,
      error: props.error || false,
      valid: props.valid || false,
      errorCode: null
    }
  }

  componentWillReceiveProps (next) {
    const old = this.state.max
    this.setState({ max: next.max, value: next.value }, () => {
      if (old !== next.max) {
        this.handleValidation(
          {
            fake: true,
            target: {
              name: this.props.name
            }
          }, null)
      }
    })
  }

  /**
   * Handle the change event.
   */
  handleChange (event) {
    event.persist()
    // Prevent non-numerical values from being entered
    if (!event.target.value.match(/^(\s*|\d+)$/)) {
      return
    }

    this.setState({ value: event.target.value }, () => {
      super.handleChange(event)
      if (this.props.onUpdate) {
        this.props.onUpdate({
          name: this.props.name,
          value: this.state.value
        })
      }
    })
  }

  /**
   * Handle the focus event.
   */
  handleFocus (event) {
    event.persist()
    this.setState({ focus: true }, () => {
      super.handleFocus(event)
    })
  }

  /**
   * Handle the blur event.
   */
  handleBlur (event) {
    event.persist()
    this.setState({ focus: false }, () => {
      super.handleBlur(event)
    })
  }

  /**
   * Execute validation checks on the value.
   *
   * Possible return values:
   *  1. null: In a neutral state
   *  2. false: Does not meet criterion and is deemed invalid
   *  3. true: Meets all specified criterion
   */
  handleValidation (event, status) {
    if (status === false) {
      super.handleValidation(event, status, null)
      return
    }

    let errorCode = null
    let hits = 0
    status = true

    if (this.state.value) {
      if (status && this.props.min) {
        status = parseInt(this.state.value) >= parseInt(this.props.min)
        if (status === false) {
          errorCode = 'min'
        }
        hits++
      }

      if (status && this.props.max) {
        status = parseInt(this.state.value) <= parseInt(this.state.max)
        if (status === false) {
          errorCode = 'max'
        }
        hits++
      }

      if (status && this.props.maxlength && this.props.maxlength > 0) {
        status = ('' + this.state.value).length <= parseInt(this.props.maxlength)
        if (status === false) {
          errorCode = 'length'
        }
        hits++
      }
    }

    // If nothing was tested then go back to neutral
    if (hits === 0) {
      status = null
    }

    // Set the internal state
    this.setState({error: status === false, valid: status === true, errorCode: errorCode}, () => {
      let prop = this.props.name || 'input'
      let e = { [prop]: errorCode }

      if (!event.fake) {
        super.handleValidation(event, status, e)
      }
    })
  }

  /**
   * Generated name for the error message.
   */
  errorName () {
    return '' + this.props.name + '-error'
  }

  /**
   * Style classes applied to the wrapper.
   */
  divClass () {
    let klass = this.props.className || ''

    if (!this.props.disabled) {
      if (this.state.error) {
        klass += ' usa-input-error'
      }
    }

    return klass.trim()
  }

  /**
   * Style classes applied to the label element.
   */
  labelClass () {
    let klass = ''

    if (!this.props.disabled) {
      if (this.state.error) {
        klass += ' usa-input-error-label'
      }
    }

    return klass.trim()
  }

  /**
   * Style classes applied to the input element.
   */
  inputClass () {
    let klass = ''

    if (!this.props.disabled) {
      if (this.state.focus) {
        klass += ' usa-input-focus'
      }

      if (this.state.valid) {
        klass += ' usa-input-success'
      }
    }

    return klass.trim()
  }

  render () {
    return (
      <div className={this.divClass()}>
        <label className={this.labelClass()}
               htmlFor={this.props.name}>
          {this.props.label}
        </label>
        <input className={this.inputClass()}
               id={this.props.name}
               name={this.props.name}
               type="text"
               ref="input"
               placeholder={this.props.placeholder}
               aria-describedby={this.errorName()}
               disabled={this.props.disabled}
               maxLength={this.props.maxlength}
               readOnly={this.props.readonly}
               value={this.state.value}
               onChange={this.handleChange}
               onFocus={this.handleFocus}
               onBlur={this.handleBlur}
               />
      </div>
    )
  }
}
