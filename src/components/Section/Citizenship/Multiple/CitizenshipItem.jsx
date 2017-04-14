import React from 'react'
import { i18n } from '../../../../config'
import { ValidationElement, Field, Branch, Show, Country, DateRange, Textarea } from '../../../Form'
import { sendUpdate } from './Multiple'

export default class CitizenshipItem extends ValidationElement {
  constructor (props) {
    super(props)

    this.state = {
      Country: props.Country,
      Dates: props.Dates,
      How: props.How,
      Renounced: props.Renounced,
      RenouncedExplanation: props.RenouncedExplanation,
      Current: props.Current,
      CurrentExplanation: props.CurrentExplanation
    }

    this.onUpdate = this.onUpdate.bind(this)
    this.updateCountry = this.updateCountry.bind(this)
    this.updateDates = this.updateDates.bind(this)
    this.updateHow = this.updateHow.bind(this)
    this.updateRenounced = this.updateRenounced.bind(this)
    this.updateRenouncedExplanation = this.updateRenouncedExplanation.bind(this)
    this.updateCurrent = this.updateCurrent.bind(this)
    this.updateCurrentExplanation = this.updateCurrentExplanation.bind(this)
  }

  onUpdate (name, values) {
    this.setState({ [name]: values }, () => {
      sendUpdate(this.props.onUpdate, this.props.name, this.state)
    })
  }

  updateCountry (values) {
    this.onUpdate('Country', values)
  }

  updateDates (values) {
    this.onUpdate('Dates', values)
  }

  updateHow (values) {
    this.onUpdate('How', values)
  }

  updateRenounced (values) {
    this.onUpdate('Renounced', values)
  }

  updateRenouncedExplanation (values) {
    this.onUpdate('RenouncedExplanation', values)
  }

  updateCurrent (values) {
    this.onUpdate('Current', values)
  }

  updateCurrentExplanation (values) {
    this.onUpdate('CurrentExplanation', values)
  }

  render () {
    return (
      <div className="citizenship-item">
        <Field title={i18n.t('citizenship.multiple.heading.citizenship.country')}
               help="citizenship.multiple.help.citizenship.country">
          <Country name="Country"
                   {...this.state.Country}
                   onUpdate={this.updateCountry}
                   onValidate={this.props.onValidate}
                   />
        </Field>

        <Field title={i18n.t('citizenship.multiple.heading.citizenship.dates')}
               help="citizenship.multiple.help.citizenship.dates">
          <DateRange name="Dates"
                     {...this.state.Dates}
                     onUpdate={this.updateDates}
                     onValidate={this.props.onValidate}
                     />
        </Field>

        <Field title={i18n.t('citizenship.multiple.heading.citizenship.how')}
               help="citizenship.multiple.help.citizenship.how">
          <Textarea name="How"
                    {...this.state.How}
                    onUpdate={this.updateHow}
                    onValidate={this.props.onValidate}
                    />
        </Field>

        <Branch name="Renounced"
                label={i18n.t('citizenship.multiple.heading.citizenship.renounced')}
                labelSize="h3"
                className="renounced"
                value={this.state.Renounced}
                help="citizenship.multiple.help.citizenship.renounced"
                onUpdate={this.updateRenounced}
                onValidate={this.handleValidation}
                />

        <Show when={this.state.Renounced === 'Yes'}>
          <Field title={i18n.t('citizenship.multiple.heading.citizenship.renouncedexplanation')}
                 help="citizenship.multiple.help.citizenship.renouncedexplanation">
            <Textarea name="RenouncedExplanation"
                      {...this.state.RenouncedExplanation}
                      onUpdate={this.updateRenouncedExplanation}
                      onValidate={this.props.onValidate}
                      />
          </Field>
        </Show>

        <Branch name="Current"
                label={i18n.t('citizenship.multiple.heading.citizenship.current')}
                labelSize="h3"
                className="current"
                value={this.state.Current}
                help="citizenship.multiple.help.citizenship.current"
                onUpdate={this.updateCurrent}
                onValidate={this.handleValidation}
                />

        <Show when={this.state.Current === 'Yes'}>
          <Field title={i18n.t('citizenship.multiple.heading.citizenship.currentexplanation')}
                 help="citizenship.multiple.help.citizenship.currentexplanation">
            <Textarea name="CurrentExplanation"
                      {...this.state.CurrentExplanation}
                      onUpdate={this.updateCurrentExplanation}
                      onValidate={this.props.onValidate}
                      />
          </Field>
        </Show>
      </div>
    )
  }
}

CitizenshipItem.defaultProps = {
  Country: {},
  Dates: {},
  How: {},
  Renounced: '',
  RenouncedExplanation: {},
  Current: '',
  CurrentExplanation: {}
}
