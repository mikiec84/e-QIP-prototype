import React from 'react'
import { i18n } from '../../../../config'
import { ValidationElement, DateControl, Text, Textarea, Help, HelpIcon } from '../../../Form'

/**
 * Convenience function to send updates along their merry way
 */
const sendUpdate = (fn, name, props) => {
  if (fn) {
    fn({
      name: name,
      ...props
    })
  }
}

export default class Procedure extends ValidationElement {
  constructor (props) {
    super(props)
    this.state = {
      Date: props.Date,
      Offenses: props.Offenses,
      Name: props.Name,
      Court: props.Court,
      Outcome: props.Outcome
    }

    this.onUpdate = this.onUpdate.bind(this)
    this.updateDate = this.updateDate.bind(this)
    this.updateOffenses = this.updateOffenses.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateCourt = this.updateCourt.bind(this)
    this.updateOutcome = this.updateOutcome.bind(this)
  }

  onUpdate (name, values) {
    this.setState({ [name]: values }, () => {
      sendUpdate(this.props.onUpdate, this.props.name, this.state)
    })
  }

  updateDate (value) {
    this.onUpdate('Date', value)
  }

  updateOffenses (value) {
    this.onUpdate('Offenses', value)
  }

  updateName (value) {
    this.onUpdate('Name', value)
  }

  updateCourt (value) {
    this.onUpdate('Court', value)
  }

  updateOutcome (value) {
    this.onUpdate('Outcome', value)
  }

  render () {
    return (
      <div className="disciplinary-procedure">
        <h3>{i18n.t('military.disciplinary.heading.date')}</h3>
        <div className="eapp-field-wrap">
          <Help id="military.disciplinary.help.date">
            <DateControl name="Date"
                         {...this.state.Date}
                         className="procedure-date"
                         hideDay={true}
                         onUpdate={this.updateDate}
                         onValidate={this.props.onValidate}
                         />
            <HelpIcon />
          </Help>
        </div>

        <h3>{i18n.t('military.disciplinary.heading.offenses')}</h3>
        <div className="eapp-field-wrap">
          <Help id="military.disciplinary.help.offenses">
            <Textarea name="Offenses"
                      {...this.state.Offenses}
                      className="procedure-offenses"
                      onUpdate={this.updateOffenses}
                      onValidate={this.props.onValidate}
                      />
            <HelpIcon />
          </Help>
        </div>

        <h3>{i18n.t('military.disciplinary.heading.name')}</h3>
        <div className="eapp-field-wrap">
          <Help id="military.disciplinary.help.name">
            <Text name="Name"
                  {...this.state.Name}
                  label={i18n.m('military.disciplinary.label.name')}
                  className="procedure-name"
                  maxlength="100"
                  onUpdate={this.updateName}
                  onValidate={this.props.onValidate}
                  />
            <HelpIcon />
          </Help>
        </div>

        <h3>{i18n.t('military.disciplinary.heading.court')}</h3>
        <div className="eapp-field-wrap">
          <Help id="military.disciplinary.help.court">
            <Textarea name="Court"
                      {...this.state.Court}
                      label={i18n.t('military.disciplinary.label.court')}
                      className="procedure-court"
                      onUpdate={this.updateCourt}
                      onValidate={this.props.onValidate}
                      />
            <HelpIcon />
          </Help>
        </div>

        <h3>{i18n.t('military.disciplinary.heading.outcome')}</h3>
        <div className="eapp-field-wrap">
          <Help id="military.disciplinary.help.outcome">
            <Text name="Outcome"
                  {...this.state.Outcome}
                  label={i18n.t('military.disciplinary.label.outcome')}
                  className="procedure-outcome"
                  maxlength="100"
                  onUpdate={this.updateOutcome}
                  onValidate={this.props.onValidate}
                  />
            <HelpIcon />
          </Help>
        </div>
      </div>
    )
  }
}
