import React from 'react'
import { i18n } from '../../../../config'
import { ValidationElement, Show, Field, RadioGroup, Radio, Textarea } from '../../../Form'

export default class InvestigatingAgency extends ValidationElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateAgency = this.updateAgency.bind(this)
    this.updateExplanation = this.updateExplanation.bind(this)
  }

  update (queue) {
    if (this.props.onUpdate) {
      let obj = {
        Agency: this.props.Agency,
        Explanation: this.props.Explanation
      }

      for (const q of queue) {
        obj = { ...obj, [q.name]: q.value }
      }

      this.props.onUpdate(obj)
    }
  }

  updateAgency (values) {
    this.update([
      { name: 'Agency', value: values.value }
    ])
  }

  updateExplanation (values) {
    this.update([
      { name: 'Explanation', value: values }
    ])
  }

  render () {
    return (
      <div className={this.props.className}>
        <RadioGroup className="investigative-agencies" selectedValue={this.props.Agency}>
          <Radio label={i18n.m('legal.investigations.history.label.agency.dod')}
                 value="U.S. Department of Defense"
                 className="investigative-agency-dod"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.dos')}
                 value="U.S. Department of State"
                 className="investigative-agency-dos"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.opm')}
                 value="U.S. Office of Personnel Management"
                 className="investigative-agency-opm"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.fbi')}
                 value="Federal Bureau of Investigation"
                 className="investigative-agency-fbi"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.dot')}
                 value="U.S. Department of Treasury"
                 className="investigative-agency-dot"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.dhs')}
                 value="U.S. Department of Homeland Security"
                 className="investigative-agency-dhs"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.foreign')}
                 value="Foreign government"
                 className="investigative-agency-foreign"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
          <Radio label={i18n.m('legal.investigations.history.label.agency.other')}
                 value="Other"
                 className="investigative-agency-other"
                 onUpdate={this.updateAgency}
                 onError={this.props.onError}
                 />
        </RadioGroup>

        <Show when={['U.S. Department of Treasury', 'Foreign government', 'Other'].includes(this.props.Agency)}>
          <Field title={i18n.t('legal.investigations.history.heading.agencyExplanation')}
                 titleSize="label"
                 help="legal.investigations.history.help.agencyExplanation"
                 adjustFor="textarea">
            <Textarea name="Explanation"
                      {...this.props.Explanation}
                      className="legal-investigations-history-agency-explanation"
                      onUpdate={this.updateExplanation}
                      onError={this.props.onError}
                  />
          </Field>
        </Show>
      </div>
    )
  }
}

InvestigatingAgency.defaultProps = {
  className: 'investigative-agency',
  Agency: '',
  Explanation: {},
  onError: (value, arr) => { return arr }
}

InvestigatingAgency.errors = []