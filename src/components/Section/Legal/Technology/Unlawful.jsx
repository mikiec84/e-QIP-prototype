import React from 'react'
import { i18n } from '../../../../config'
import SubsectionElement from '../../SubsectionElement'
import { LegalTechnologyUnlawfulValidator } from '../../../../validators'
import { DateSummary } from '../../../Summary'
import { Accordion, Branch, Show, Field, DateControl, Address, Textarea } from '../../../Form'

export default class Unlawful extends SubsectionElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateBranch = this.updateBranch.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  update (queue) {
    if (this.props.onUpdate) {
      let obj = {
        List: this.props.List,
        ListBranch: this.props.ListBranch,
        HasUnlawful: this.props.HasUnlawful
      }

      for (const q of queue) {
        obj = { ...obj, [q.name]: q.value }
      }

      this.props.onUpdate(obj)
    }
  }

  updateList (values) {
    this.update([
      { name: 'List', value: values.items },
      { name: 'ListBranch', value: values.branch }
    ])
  }

  updateBranch (values) {
    this.update([
      { name: 'HasUnlawful', value: values }
    ])
  }

  summary (item, index) {
    const type = i18n.t('legal.technology.unlawful.collection.item')
    const unknown = i18n.t('legal.technology.unlawful.collection.unknown')
    const o = item || {}
    const incident = (o.Incident || {}).value
          ? o.Incident.value
          : unknown
    const dates = DateSummary(o.Date)

    return (
      <span className="content">
        <span className="index">{type} {index + 1}:</span>
        <span><strong>{incident}</strong></span>
        <span className="dates"><strong>{dates}</strong></span>
      </span>
    )
  }

  render () {
    return (
      <div className="legal-technology-unlawful">
        <Branch name="has_unlawful"
                label={i18n.t('legal.technology.unlawful.heading.title')}
                labelSize="h3"
                className="legal-technology-unlawful-has-unlawful"
                value={this.props.HasUnlawful}
                onError={this.handleError}
                onUpdate={this.updateBranch}>
        </Branch>

        <Show when={this.props.HasUnlawful === 'Yes'}>
          <Accordion minimum="1"
                     defaultState={this.props.defaultState}
                     items={this.props.List}
                     branch={this.props.ListBranch}
                     summary={this.summary}
                     onUpdate={this.updateList}
                     onError={this.handleError}
                     description={i18n.t('legal.technology.unlawful.collection.description')}
                     appendTitle={i18n.t('legal.technology.unlawful.collection.appendTitle')}
                     appendLabel={i18n.t('legal.technology.unlawful.collection.appendLabel')}>
            <Field title={i18n.t('legal.technology.unlawful.heading.date')}
                   help="legal.technology.unlawful.help.date"
                   adjustFor="datecontrol">
              <DateControl name="Date"
                           className="legal-technology-unlawful-date"
                           bind={true}
                           />
            </Field>

            <Field title={i18n.t('legal.technology.unlawful.heading.incident')}
                   help="legal.technology.unlawful.help.incident"
                   adjustFor="textarea">
              <Textarea name="Incident"
                        className="legal-technology-unlawful-incident"
                        bind={true}
                        />
            </Field>

            <Field title={i18n.t('legal.technology.unlawful.heading.location')}
                   help="legal.technology.unlawful.help.location"
                   adjustFor="address">
              <Address name="Location"
                       className="legal-technology-unlawful-location"
                       bind={true}
                       />
            </Field>

            <Field title={i18n.t('legal.technology.unlawful.heading.action')}
                   help="legal.technology.unlawful.help.action"
                   adjustFor="textarea">
              <Textarea name="Action"
                        className="legal-technology-unlawful-action"
                        bind={true}
                        />
            </Field>
          </Accordion>
        </Show>
      </div>
    )
  }
}

Unlawful.defaultProps = {
  name: 'unlawful',
  HasUnlawful: '',
  List: [],
  ListBranch: '',
  defaultState: true,
  onError: (value, arr) => { return arr },
  section: 'legal',
  subsection: 'technology/unlawful',
  dispatch: () => {},
  validator: (state, props) => {
    return new LegalTechnologyUnlawfulValidator(state, props).isValid()
  }
}