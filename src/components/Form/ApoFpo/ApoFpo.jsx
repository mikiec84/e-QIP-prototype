import React from 'react'
import ValidationElement from '../ValidationElement'
import Text from '../Text'

export default class ApoFpo extends ValidationElement {
  constructor (props) {
    super(props)
    this.handleError = this.handleError.bind(this)
  }

  handleError (value, arr) {
    arr = arr.map(err => {
      return {
        code: `apofpo.${err.code}`,
        valid: err.valid,
        uid: err.uid
      }
    })

    return this.props.onError(value, arr.concat(this.constructor.errors.map(err => {
      return {
        code: err.code,
        valid: err.func(value, this.props),
        uid: err.uid
      }
    })))
  }

  render () {
    const klass = `apofpo ${this.props.className || ''}`.trim()
    return (
      <Text name={this.props.name}
            label={this.props.label}
            className={klass}
            placeholder={this.props.placeholder}
            maxlength="2"
            pattern="[a-zA-Z]{2}"
            value={this.props.value}
            onChange={this.props.onChange}
            onError={this.handleError}
            tabBack={this.props.tabBack}
            tabNext={this.props.tabNext}
            />
    )
  }
}

ApoFpo.defaultProps = {
  tabBack: () => {},
  tabNext: () => {},
  onError: (value, arr) => { return arr }
}

ApoFpo.errors = []
