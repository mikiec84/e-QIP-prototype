import React from 'react'

import i18n from 'util/i18n'
import schema from 'schema'
import validate, { DrugUseValidator } from 'validators'
import { Summary } from 'components/Summary'
import { Accordion, Branch, Show } from 'components/Form'

import {
  SUBSTANCE_USE,
  SUBSTANCE_USE_DRUGS_USAGE,
} from 'config/formSections/substanceUse'
import * as formConfig from 'config/forms'
import { getNumberOfYearsString } from 'helpers/text'

import Subsection from 'components/Section/shared/Subsection'
import connectSubstanceUseSection from '../SubstanceUseConnector'

import DrugUse from './DrugUse'

const sectionConfig = {
  section: SUBSTANCE_USE.name,
  store: SUBSTANCE_USE.store,
  subsection: SUBSTANCE_USE_DRUGS_USAGE.name,
  storeKey: SUBSTANCE_USE_DRUGS_USAGE.storeKey,
}

export class DrugUses extends Subsection {
  constructor(props) {
    super(props)

    const {
      section, subsection, store, storeKey,
    } = sectionConfig

    this.section = section
    this.subsection = subsection
    this.store = store
    this.storeKey = storeKey
  }

  update = (updateValues) => {
    this.props.onUpdate(this.storeKey, {
      UsedDrugs: this.props.UsedDrugs,
      List: this.props.List,
      ...updateValues,
    })
  }

  updateList = (values) => {
    this.update({
      List: values,
    })
  }

  updateUsedDrugs = (values) => {
    this.update({
      UsedDrugs: values,
      List: values.value === 'Yes' ? this.props.List : {},
    })
  }

  summary = (item, index) => {
    const o = (item || {}).Item || {}
    const drug = (o.DrugType || {}).value

    return Summary({
      type: i18n.t('substance.drugs.use.collection.itemType'),
      index,
      left: drug,
      right: null,
      placeholder: i18n.t('substance.drugs.use.collection.summary'),
    })
  }

  render() {
    const {
      formType, requireDrugWhileSafety, requireDrugWithClearance, requireDrugInFuture,
    } = this.props
    const formTypeConfig = formType && formConfig[formType]
    const years = formTypeConfig && formTypeConfig.SUBSTANCE_DRUG_USE_YEARS
    const numberOfYearsString = getNumberOfYearsString(years)

    return (
      <div
        className="section-content drug-uses"
        data-section={SUBSTANCE_USE.key}
        data-subsection={SUBSTANCE_USE_DRUGS_USAGE.key}
      >
        <h1 className="section-header">{i18n.t('substance.subsection.drugs.usage')}</h1>
        {i18n.m('substance.drugs.para.drugUses')}
        <Branch
          name="UsedDrugs"
          label={i18n.t('substance.drugs.heading.drugUses', { numberOfYearsString })}
          labelSize="h4"
          className="used-drugs"
          {...this.props.UsedDrugs}
          warning
          onError={this.handleError}
          required={this.props.required}
          onUpdate={this.updateUsedDrugs}
          scrollIntoView={this.props.scrollIntoView}
        >
          {i18n.m('substance.drugs.use.para.drugUses')}
        </Branch>

        <Show when={this.props.UsedDrugs.value === 'Yes'}>
          <Accordion
            defaultState={this.props.defaultState}
            {...this.props.List}
            scrollToBottom={this.props.scrollToBottom}
            summary={this.summary}
            onUpdate={this.updateList}
            onError={this.handleError}
            validator={DrugUseValidator}
            description={i18n.t('substance.drugs.use.collection.description')}
            appendTitle={i18n.t('substance.drugs.use.collection.appendTitle')}
            appendLabel={i18n.t('substance.drugs.use.collection.appendLabel')}
            required={this.props.required}
            scrollIntoView={this.props.scrollIntoView}
          >
            <DrugUse
              name="Item"
              bind
              required={this.props.required}
              scrollIntoView={this.props.scrollIntoView}
              requireDrugWhileSafety={requireDrugWhileSafety}
              requireDrugWithClearance={requireDrugWithClearance}
              requireDrugInFuture={requireDrugInFuture}
            />
          </Accordion>
        </Show>
      </div>
    )
  }
}

DrugUses.defaultProps = {
  UsedDrugs: {},
  List: {},
  onError: (value, arr) => arr,
  section: 'substance',
  subsection: 'drugs/usage',
  dispatch: () => {},
  validator: data => validate(schema('substance.drugs.usage', data)),
  scrollToBottom: '',
}

export default connectSubstanceUseSection(DrugUses, sectionConfig)
