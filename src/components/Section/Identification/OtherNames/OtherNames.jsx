
import React from 'react'

import { i18n } from 'config'
import schema from 'schema'
import validate, { OtherNameValidator } from 'validators'

import {
  Field,
  Accordion,
  Textarea,
  DateRange,
  Branch,
  Show
} from 'components/Form'
import { Summary, NameSummary, DateSummary } from 'components/Summary'

import OtherNameItem from './OtherNameItem'

import connectIdentificationSection from '../IdentificationConnector'
import Subsection from '../../shared/Subsection'

import { IDENTIFICATION, IDENTIFICATION_OTHER_NAMES } from 'config/formSections/identification'

const sectionConfig = {
  section: IDENTIFICATION.name,
  store: IDENTIFICATION.store,
  subsection: IDENTIFICATION_OTHER_NAMES.name,
  storeKey: IDENTIFICATION_OTHER_NAMES.storeKey,
}

export class OtherNames extends Subsection {
  constructor(props) {
    super(props)

    const { section, subsection, store, storeKey } = sectionConfig

    this.section = section
    this.subsection = subsection
    this.store = store
    this.storeKey = storeKey

    this.update = this.update.bind(this)
    this.updateBranch = this.updateBranch.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  update(queue) {
    this.props.onUpdate(this.storeKey, {
      List: this.props.List,
      HasOtherNames: this.props.HasOtherNames,
      ...queue
    })
  }

  updateBranch(values) {
    this.update({
      HasOtherNames: values,
      List: values.value === 'Yes' ? this.props.List : { items: [], branch: {} }
    })
  }

  updateList(values) {
    this.update({
      List: values
    })
  }

  /**
   * Assists in rendering the summary section.
   */
  summary(item, index) {
    const itemObj = item.Item || {}
    const dates = DateSummary(itemObj.DatesUsed)
    const name = NameSummary(itemObj.Name)

    return Summary({
      type: i18n.t('identification.othernames.collection.summary.name'),
      index: index,
      left: name,
      right: dates,
      placeholder: i18n.t(
        'identification.othernames.collection.summary.unknown'
      )
    })
  }

  render() {
    return (
      <div
        className="section-content other-names"
        data-section={IDENTIFICATION.key}
        data-subsection={IDENTIFICATION_OTHER_NAMES.key}
      >
        <h1 className="section-header">{i18n.t('identification.destination.othernames')}</h1>
        <Field
          title={i18n.t('identification.othernames.title')}
          titleSize="h3"
          optional={true}
          help="identification.othernames.branch.help"
          className="no-margin-bottom">
          {i18n.m('identification.othernames.info')}
        </Field>

        <Branch
          name="has_othernames"
          label={i18n.t('identification.othernames.branch.question')}
          labelSize="h4"
          {...this.props.HasOtherNames}
          warning={true}
          onUpdate={this.updateBranch}
          required={this.props.required}
          scrollIntoView={this.props.scrollIntoView}
          onError={this.handleError}
        />
        <Show when={this.props.HasOtherNames.value === 'Yes'}>
          <Accordion
            {...this.props.List}
            defaultState={this.props.defaultState}
            onUpdate={this.updateList}
            onError={this.handleError}
            required={this.props.required}
            scrollIntoView={this.props.scrollIntoView}
            validator={OtherNameValidator}
            summary={this.summary}
            description={i18n.t(
              'identification.othernames.collection.summary.title'
            )}
            appendTitle={i18n.t(
              'identification.othernames.collection.appendTitle'
            )}
            appendLabel={i18n.t('identification.othernames.collection.append')}
            titleSize="h4">
            <OtherNameItem
              name="Item"
              required={this.props.required}
              scrollIntoView={this.props.scrollIntoView}
              bind={true}
            />
          </Accordion>
        </Show>
      </div>
    )
  }
}

OtherNames.defaultProps = {
  List: Accordion.defaultList,
  HasOtherNames: {},
  onUpdate: queue => {},
  onError: (value, arr) => {
    return arr
  },
  dispatch: () => {},
  validator: data => {
    return validate(schema('identification.othernames', data))
  },
  defaultState: true,
  required: false
}

export default connectIdentificationSection(OtherNames, sectionConfig)
