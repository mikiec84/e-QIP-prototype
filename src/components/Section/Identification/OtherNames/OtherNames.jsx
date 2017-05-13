import React from 'react'
import { i18n } from '../../../../config'
import { NameSummary, DateSummary } from '../../../Summary'
import { OtherNamesValidator } from '../../../../validators'
import { ValidationElement, Field, Accordion, MaidenName, Name, Textarea, DateRange, Branch, Show } from '../../../Form'

export default class OtherNames extends ValidationElement {
  constructor (props) {
    super(props)

    this.state = {
      List: props.List || [],
      HasOtherNames: props.HasOtherNames,
      errorCodes: []
    }

    this.myDispatch = this.myDispatch.bind(this)
  }

  handleValidation (event, status, error) {
    if (!event) {
      return
    }

    let codes = super.mergeError(this.state.errorCodes, super.flattenObject(error))
    let complexStatus = null
    if (codes.length > 0) {
      complexStatus = false
    } else if (this.isValid()) {
      complexStatus = true
    }

    this.setState({error: complexStatus === false, valid: complexStatus === true, errorCodes: codes}, () => {
      let e = { [this.props.name]: codes }
      let s = { [this.props.name]: { status: complexStatus } }
      if (this.state.error === false || this.state.valid === true) {
        super.handleValidation(event, s, e)
        return
      }

      super.handleValidation(event, s, e)
    })
  }

  isValid () {
    return new OtherNamesValidator(this.state, null).isValid()
  }

  onUpdate (val, event) {
    this.setState({ HasOtherNames: val }, () => {
      this.myDispatch({
        items: val === 'No' ? [] : this.state.List,
        branch: ''
      })
      this.handleValidation(event, null, null)
    })
  }

  myDispatch (values) {
    this.setState({ List: values.items }, () => {
      if (this.props.onUpdate) {
        this.props.onUpdate({
          List: this.state.List,
          HasOtherNames: this.state.HasOtherNames
        })
      }
    })
  }

  /**
   * Assists in rendering the summary section.
   */
  summary (item, index) {
    const name = NameSummary(item.Name, i18n.t('identification.othernames.collection.summary.unknown'))
    const dates = DateSummary(item.DatesUsed, i18n.t('identification.othernames.collection.summary.nodates'))

    return (
      <span>
        <span className="index">
          {i18n.t('identification.othernames.collection.summary.name')} {index + 1}:
        </span>
        <span><strong>{name}</strong></span>
        <span className="dates"><strong>{dates}</strong></span>
      </span>
    )
  }

  render () {
    return (
      <div className="other-names">
        <p>{i18n.t('identification.othernames.info')}</p>
        <h3>{i18n.t('identification.othernames.branch.question')}</h3>
        <Branch name="has_othernames"
                value={this.state.HasOtherNames}
                help="identification.othernames.branch.help"
                onUpdate={this.onUpdate.bind(this)}>
        </Branch>
        <Show when={this.state.HasOtherNames === 'Yes'}>
          <Accordion minimum="1"
                     items={this.state.List}
                     onUpdate={this.myDispatch}
                     onValidate={this.handleValidation}
                     summary={this.summary}
                     description={i18n.t('identification.othernames.collection.summary.title')}
                     appendLabel={i18n.t('identification.othernames.collection.append')}>

            <h3>{i18n.t('identification.othernames.heading.name')}</h3>
            <Name name="Name"
                  key="name"
                  bind={true}
                  />

            <Field title={i18n.t('identification.othernames.heading.maiden')}
                   help="alias.maiden.help"
                   adjustFor="buttons"
                   shrink={true}>
              <MaidenName name="MaidenName"
                          bind={true}
                          />
            </Field>

            <Field title={i18n.t('identification.othernames.heading.used')}
                   help="alias.used.help"
                   adjustFor="daterange"
                   shrink={true}>
              <DateRange name="DatesUsed"
                         bind={true}
                         />
            </Field>

            <Field title={i18n.t('identification.othernames.heading.reason')}
                   help="alias.reason.help">
              <Textarea name="Reason"
                        className="reason"
                        bind={true}
                        />
            </Field>
          </Accordion>
        </Show>
      </div>
    )
  }
}
