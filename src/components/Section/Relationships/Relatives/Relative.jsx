import React from 'react'
import { i18n } from '../../../../config'
import { ValidationElement, Branch, Show, Svg, BranchCollection,
         Name, Text, Textarea, Address, DateControl,
         Checkbox, CheckboxGroup, Radio, RadioGroup, Country,
         Field, NotApplicable, Location
       } from '../../../Form'
import { RelativeValidator } from '../../../../validators'
import Alias from './Alias'

export default class Relative extends ValidationElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateRelation = this.updateRelation.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateBirthdate = this.updateBirthdate.bind(this)
    this.updateBirthplace = this.updateBirthplace.bind(this)
    this.updateCitizenship = this.updateCitizenship.bind(this)
    this.updateMaidenSameAsListed = this.updateMaidenSameAsListed.bind(this)
    this.updateMaidenName = this.updateMaidenName.bind(this)
    this.updateAliases = this.updateAliases.bind(this)
    this.updateIsDeceased = this.updateIsDeceased.bind(this)
    this.updateAddress = this.updateAddress.bind(this)
    this.updateCitizenshipDocumentation = this.updateCitizenshipDocumentation.bind(this)
    this.updateOtherCitizenshipDocumentation = this.updateOtherCitizenshipDocumentation.bind(this)
    this.updateDocumentNumber = this.updateDocumentNumber.bind(this)
    this.updateCourtName = this.updateCourtName.bind(this)
    this.updateCourtAddress = this.updateCourtAddress.bind(this)
    this.updateDocument = this.updateDocument.bind(this)
    this.updateOtherDocument = this.updateOtherDocument.bind(this)
    this.updateResidenceDocumentNumber = this.updateResidenceDocumentNumber.bind(this)
    this.updateExpiration = this.updateExpiration.bind(this)
    this.updateFirstContact = this.updateFirstContact.bind(this)
    this.updateLastContact = this.updateLastContact.bind(this)
    this.updateMethods = this.updateMethods.bind(this)
    this.updateMethodsComments = this.updateMethodsComments.bind(this)
    this.updateFrequency = this.updateFrequency.bind(this)
    this.updateFrequencyComments = this.updateFrequencyComments.bind(this)
    this.updateEmployerNotApplicable = this.updateEmployerNotApplicable.bind(this)
    this.updateEmployerAddressNotApplicable = this.updateEmployerAddressNotApplicable.bind(this)
    this.updateEmployerRelationshipNotApplicable = this.updateEmployerRelationshipNotApplicable.bind(this)
    this.updateEmployer = this.updateEmployer.bind(this)
    this.updateEmployerAddress = this.updateEmployerAddress.bind(this)
    this.updateHasAffiliation = this.updateHasAffiliation.bind(this)
    this.updateEmployerRelationship = this.updateEmployerRelationship.bind(this)
  }

  update (queue) {
    this.props.onUpdate({
      Relation: this.props.Relation,
      Name: this.props.Name,
      Birthdate: this.props.Birthdate,
      Birthplace: this.props.Birthplace,
      Citizenship: this.props.Citizenship,
      MaidenSameAsListed: this.props.MaidenSameAsListed,
      MaidenName: this.props.MaidenName,
      Aliases: this.props.Aliases,
      IsDeceased: this.props.IsDeceased,
      Address: this.props.Address,
      CitizenshipDocumentation: this.props.CitizenshipDocumentation,
      OtherCitizenshipDocumentation: this.props.OtherCitizenshipDocumentation,
      DocumentNumber: this.props.DocumentNumber,
      CourtName: this.props.CourtName,
      CourtAddress: this.props.CourtAddress,
      Document: this.props.Document,
      OtherDocument: this.props.OtherDocument,
      DocumentComments: this.props.DocumentComments,
      ResidenceDocumentNumber: this.props.ResidenceDocumentNumber,
      Expiration: this.props.Expiration,
      FirstContact: this.props.FirstContact,
      LastContact: this.props.LastContact,
      Methods: this.props.Methods,
      MethodsComments: this.props.MethodsComments,
      Frequency: this.props.Frequency,
      FrequencyComments: this.props.FrequencyComments,
      EmployerNotApplicable: this.props.EmployerNotApplicable,
      EmployerAddressNotApplicable: this.props.EmployerAddressNotApplicable,
      EmployerRelationshipNotApplicable: this.props.EmployerRelationshipNotApplicable,
      Employer: this.props.Employer,
      EmployerAddress: this.props.EmployerAddress,
      HasAffiliation: this.props.HasAffiliation,
      EmployerRelationship: this.props.EmployerRelationship,
      ...queue
    })
  }

  updateRelation (event) {
    this.update({
      Relation: event.target.value
    })
  }

  updateName (values) {
    this.update({
      Name: values
    })
  }

  updateBirthdate (values) {
    this.update({
      Birthdate: values
    })
  }

  updateBirthplace (values) {
    this.update({
      Birthplace: values
    })
  }

  updateCitizenship (values) {
    this.update({
      Citizenship: values
    })
  }

  updateMaidenSameAsListed (values) {
    this.update({
      MaidenSameAsListed: values
    })
  }

  updateMaidenName (values) {
    this.update({
      MaidenName: values
    })
  }

  updateAliases (values) {
    this.update({
      Aliases: values
    })
  }

  updateIsDeceased (values) {
    this.update({
      IsDeceased: values
    })
  }

  updateAddress (values) {
    this.update({
      Address: values
    })
  }

  updateCitizenshipDocumentation (event) {
    this.update({
      CitizenshipDocumentation: event.target.value
    })
  }

  updateOtherCitizenshipDocumentation (value) {
    this.update({
      OtherCitizenshipDocumentation: value
    })
  }

  updateDocumentNumber (values) {
    this.update({
      DocumentNumber: values
    })
  }

  updateCourtName (values) {
    this.update({
      CourtName: values
    })
  }

  updateCourtAddress (values) {
    this.update({
      CourtAddress: values
    })
  }

  updateDocument (event) {
    this.update({
      Document: event.target.value
    })
  }

  updateOtherDocument (value) {
    this.update({
      OtherDocument: value
    })
  }

  updateResidenceDocumentNumber (values) {
    this.update({
      ResidenceDocumentNumber: values
    })
  }

  updateExpiration (values) {
    this.update({
      Expiration: values
    })
  }

  updateFirstContact (values) {
    this.update({
      FirstContact: values
    })
  }

  updateLastContact (values) {
    this.update({
      LastContact: values
    })
  }

  updateMethods (event) {
    let method = event.target.value
    let selected = [...(this.props.Methods || [])]

    if (selected.includes(method)) {
      // Remove the relation if it was previously selected
      selected.splice(selected.indexOf(method), 1)
    } else {
      // Add the relation if it wasn't already
      selected.push(method)
    }

    this.update({
      Methods: selected
    })
  }

  updateMethodsComments (values) {
    this.update({
      MethodsComments: values
    })
  }

  updateFrequency (event) {
    this.update({
      Frequency: event.target.value
    })
  }

  updateFrequencyComments (values) {
    this.update({
      FrequencyComments: values
    })
  }

  updateEmployerNotApplicable (values) {
    this.update({
      EmployerNotApplicable: values
    })
  }

  updateEmployerAddressNotApplicable (values) {
    this.update({
      EmployerAddressNotApplicable: values
    })
  }

  updateEmployerRelationshipNotApplicable (values) {
    this.update({
      EmployerRelationshipNotApplicable: values
    })
  }

  updateEmployer (values) {
    this.update({
      Employer: values
    })
  }

  updateEmployerAddress (values) {
    this.update({
      EmployerAddress: values
    })
  }

  updateHasAffiliation (values) {
    this.update({
      HasAffiliation: values
    })
  }

  updateEmployerRelationship (values) {
    this.update({
      EmployerRelationship: values
    })
  }

  render () {
    const validator = new RelativeValidator(this.props, null)
    const mother = this.props.Relation === 'Mother'
    const immediateFamily = ['Father', 'Mother', 'Child', 'Stepchild', 'Brother', 'Sister', 'Half-brother', 'Half-sister', 'Stepbrother', 'Stepsister', 'Stepmother', 'Stepfather'].includes(this.props.Relation)

    return (
      <div className="relative-item">
        <Field title={i18n.t('relationships.relatives.heading.relation')}
               adjustFor="big-buttons">
          <RadioGroup className="relative-relation option-list"
                      selectedValue={this.props.Relation}>
            <Radio name="relation-mother"
                   label={i18n.m('relationships.relatives.label.relation.mother')}
                   value="Mother"
                   className="relation-mother"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-father"
                   label={i18n.m('relationships.relatives.label.relation.father')}
                   value="Father"
                   className="relation-father"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-stepmother"
                   label={i18n.m('relationships.relatives.label.relation.stepmother')}
                   value="Stepmother"
                   className="relation-stepmother"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-stepfather"
                   label={i18n.m('relationships.relatives.label.relation.stepfather')}
                   value="Stepfather"
                   className="relation-stepfather"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-fosterparent"
                   label={i18n.m('relationships.relatives.label.relation.fosterparent')}
                   value="Fosterparent"
                   className="relation-fosterparent"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-child"
                   label={i18n.m('relationships.relatives.label.relation.child')}
                   value="Child"
                   className="relation-child"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-stepchild"
                   label={i18n.m('relationships.relatives.label.relation.stepchild')}
                   value="Stepchild"
                   className="relation-stepchild"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-brother"
                   label={i18n.m('relationships.relatives.label.relation.brother')}
                   value="Brother"
                   className="relation-brother"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-sister"
                   label={i18n.m('relationships.relatives.label.relation.sister')}
                   value="Sister"
                   className="relation-sister"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-stepbrother"
                   label={i18n.m('relationships.relatives.label.relation.stepbrother')}
                   value="Stepbrother"
                   className="relation-stepbrother"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-stepsister"
                   label={i18n.m('relationships.relatives.label.relation.stepsister')}
                   value="Stepsister"
                   className="relation-stepsister"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-halfbrother"
                   label={i18n.m('relationships.relatives.label.relation.halfbrother')}
                   value="Half-brother"
                   className="relation-halfbrother"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-halfsister"
                   label={i18n.m('relationships.relatives.label.relation.halfsister')}
                   value="Half-sister"
                   className="relation-halfsister"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-fatherinlaw"
                   label={i18n.m('relationships.relatives.label.relation.fatherinlaw')}
                   value="Father-in-law"
                   className="relation-fatherinlaw"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-montherinlaw"
                   label={i18n.m('relationships.relatives.label.relation.montherinlaw')}
                   value="Monther-in-law"
                   className="relation-montherinlaw"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
            <Radio name="relation-guardian"
                   label={i18n.m('relationships.relatives.label.relation.guardian')}
                   value="Guardian"
                   className="relation-guardian"
                   onError={this.props.onError}
                   onChange={this.updateRelation}
                   />
          </RadioGroup>
        </Field>

        <h3>{i18n.t('relationships.relatives.heading.name')}</h3>
        <Name name="Name"
              className="relative-name"
              {...this.props.Name}
              onError={this.props.onError}
              onUpdate={this.updateName}
              />

        <Field title={i18n.t('relationships.relatives.heading.birthdate')}
               help="relationships.relatives.help.birthdate"
               adjustFor="labels"
               shrink={true}>
          <DateControl name="Birthdate"
                       className="relative-birthdate"
                       {...this.props.Birthdate}
                       onError={this.props.onError}
                       onUpdate={this.updateBirthdate}
                       />
        </Field>

        <Field title={i18n.t('relationships.relatives.heading.birthplace')}
               adjustFor="label"
               validate={false}>
          <Location name="Birthplace"
                      label={i18n.t('relationships.relatives.label.birthplace')}
                      layout={Location.BIRTHPLACE_WITHOUT_COUNTY}
                      help=""
                      cityPlaceholder={i18n.t('relationships.relatives.placeholder.city')}
                      countryPlaceholder={i18n.t('relationships.relatives.placeholder.country')}
                      hideCounty={true}
                      className="relative-birthplace"
                      {...this.props.Birthplace}
                      onError={this.props.onError}
                      onUpdate={this.updateBirthplace}
                      />
        </Field>

        <Field title={i18n.t('relationships.relatives.heading.citizenship')}
               help="relationships.relatives.help.citizenship">
          <Country name="Citizenship"
                   multiple={true}
                   value={this.props.Citizenship.value}
                   className="relative-citizenship"
                   onError={this.props.onError}
                   onUpdate={this.updateCitizenship}
                   />
        </Field>

        <Show when={mother}>
          <div>
            <h3>{i18n.t('relationships.relatives.heading.maiden')}</h3>
            <Branch name="maiden_diff"
                    className="eapp-field-wrap relative-maiden-diff"
                    value={this.props.MaidenSameAsListed}
                    yesLabel={i18n.t('relationships.relatives.label.maiden.same')}
                    noLabel={i18n.t('relationships.relatives.label.maiden.diff')}
                    onUpdate={this.updateMaidenSameAsListed}
                    onError={this.props.onError}>
            </Branch>
            <Show when={this.props.MaidenSameAsListed === 'No'}>
              <Name name="MaidenName"
                    className="relative-maidenname eapp-field-wrap"
                    {...this.props.MaidenName}
                    onError={this.props.onError}
                    onUpdate={this.updateMaidenName}
                    />
            </Show>
          </div>
        </Show>

        <Show when={immediateFamily}>
          <div>
            <BranchCollection items={this.props.Aliases}
                              branchName="has_alias"
                              label={i18n.t('relationships.relatives.heading.alias.branch')}
                              appendLabel={i18n.t('relationships.relatives.heading.alias.branch')}
                              className="relative-alias"
                              onUpdate={this.updateAliases}
                              onError={this.props.onError}>
              <div>
                <Field title={i18n.t('relationships.relatives.heading.needmore')}
                       className="more title">
                  <Svg src="/img/date-down-arrow.svg" className="more arrow" />
                </Field>
                <Alias name="Item"
                       onError={this.props.onError}
                       hideMaiden={mother}
                       bind={true} />
              </div>
            </BranchCollection>
          </div>
        </Show>

        <h3>{i18n.t('relationships.relatives.heading.deceased.branch')}</h3>
        <Branch name="is_deceased"
                className="relative-deceased"
                value={this.props.IsDeceased}
                onUpdate={this.updateIsDeceased}
                onError={this.props.onError}>
        </Branch>
        <Show when={this.props.IsDeceased === 'No'}>
          <Field title={i18n.t('relationships.relatives.heading.deceased.address')}
                 help="relationships.relatives.help.address"
                 adjustFor="address">
            <Address name="Address"
                     className="relative-address"
                     {...this.props.Address}
                     onUpdate={this.updateAddress}
                     onError={this.props.onError}
                     />
          </Field>
        </Show>

        <Show when={validator.requiresCitizenshipDocumentation()}>
          <div>
            <Field title={i18n.t('relationships.relatives.heading.us.title')}
                   titleSize="h2">
              <h3 className="relative-citizenship-documentation">
                {i18n.t('relationships.relatives.heading.us.documentation')}
              </h3>

              <label>{i18n.t('relationships.relatives.para.abroad')}</label>
              <RadioGroup className="relative-abroad option-list"
                          selectedValue={this.props.CitizenshipDocumentation}>
                <Radio name="abroad-fs"
                       label={i18n.m('relationships.relatives.label.abroad.fs')}
                       value="FS"
                       className="abroad-fs"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
                <Radio name="abroad-ds"
                       label={i18n.m('relationships.relatives.label.abroad.ds')}
                       value="DS"
                       className="abroad-ds"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
              </RadioGroup>

              <label>{i18n.t('relationships.relatives.para.naturalized')}</label>
              <RadioGroup className="relative-naturalized option-list"
                          selectedValue={this.props.CitizenshipDocumentation}>
                <Radio name="naturalized-alien"
                       label={i18n.m('relationships.relatives.label.naturalized.alien')}
                       value="NaturalizedAlien"
                       className="naturalized-alien"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
                <Radio name="naturalized-permanent"
                       label={i18n.m('relationships.relatives.label.naturalized.permanent')}
                       value="NaturalizedPermanent"
                       className="naturalized-permanent"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
                <Radio name="naturalized-certificate"
                       label={i18n.m('relationships.relatives.label.naturalized.certificate')}
                       value="NaturalizedCertificate"
                       className="naturalized-certificate"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
              </RadioGroup>

              <label>{i18n.t('relationships.relatives.para.derived')}</label>
              <RadioGroup className="relative-derived option-list"
                          selectedValue={this.props.CitizenshipDocumentation}>
                <Radio name="derived-alien"
                       label={i18n.m('relationships.relatives.label.derived.alien')}
                       value="DerivedAlien"
                       className="derived-alien"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
                <Radio name="derived-permanent"
                       label={i18n.m('relationships.relatives.label.derived.permanent')}
                       value="DerivedPermanent"
                       className="derived-permanent"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
                <Radio name="derived-certificate"
                       label={i18n.m('relationships.relatives.label.derived.certificate')}
                       value="DerivedCertificate"
                       className="derived-certificate"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
                <Radio name="derived-other"
                       label={i18n.m('relationships.relatives.label.derived.other')}
                       value="Other"
                       className="derived-other"
                       onError={this.props.onError}
                       onChange={this.updateCitizenshipDocumentation}
                       />
              </RadioGroup>
              <Show when={this.props.CitizenshipDocumentation === 'Other'}>
                <Textarea name="OtherCitizenshipDocumentation"
                          className="derived-other-explanation"
                          {...this.props.OtherCitizenshipDocumentation}
                          onError={this.props.onError}
                          onUpdate={this.updateOtherCitizenshipDocumentation}
                          />
              </Show>
            </Field>

            <Field title={i18n.t('relationships.relatives.heading.us.number')}
                   titleSize="h3">
              <Text name="DocumentNumber"
                    className="relative-documentnumber"
                    {...this.props.DocumentNumber}
                    onError={this.props.onError}
                    onUpdate={this.updateDocumentNumber}
                    />
            </Field>

            <Field title={i18n.t('relationships.relatives.heading.us.name')}
                   titleSize="h3">
              <Text name="CourtName"
                    className="relative-courtname"
                    {...this.props.CourtName}
                    onError={this.props.onError}
                    onUpdate={this.updateCourtName}
                    />
            </Field>

            <Field title={i18n.t('relationships.relatives.heading.us.address')}
                   titleSize="h3"
                   help="relationships.relatives.help.courtaddress"
                   adjustFor="labels">
              <Location name="CourtAddress"
                       layout={Location.US_ADDRESS}
                       className="relative-courtaddress"
                       {...this.props.CourtAddress}
                       onError={this.props.onError}
                       onUpdate={this.updateCourtAddress}
                       />
            </Field>
          </div>
        </Show>

        <Show when={!validator.citizen() && this.props.IsDeceased === 'No'}>
          <div>
            <Show when={this.props.Address && this.props.Address.country === 'United States'}>
              <div>
                <Field title={i18n.t('relationships.relatives.heading.address.title')}
                       comments={false}
                       adjustFor="big-buttons">
                  <div>
                    {i18n.t('relationships.relatives.para.notcitizen')}
                    <RadioGroup className="relative-document option-list"
                                selectedValue={this.props.Document}>
                      <Radio name="document-permanent"
                             label={i18n.m('relationships.relatives.label.document.permanent')}
                             value="Permanent"
                             className="document-permanent"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                      <Radio name="document-employment"
                             label={i18n.m('relationships.relatives.label.document.employment')}
                             value="Employment"
                             className="document-employment"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                      <Radio name="document-arrival"
                             label={i18n.m('relationships.relatives.label.document.arrival')}
                             value="Arrival"
                             className="document-arrival"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                      <Radio name="document-visa"
                             label={i18n.m('relationships.relatives.label.document.visa')}
                             value="Visa"
                             className="document-visa"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                      <Radio name="document-f1"
                             label={i18n.m('relationships.relatives.label.document.f1')}
                             value="F1"
                             className="document-f1"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                      <Radio name="document-j1"
                             label={i18n.m('relationships.relatives.label.document.j1')}
                             value="J1"
                             className="document-j1"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                      <Radio name="document-other"
                             label={i18n.m('relationships.relatives.label.document.other')}
                             value="Other"
                             className="document-other"
                             onError={this.props.onError}
                             onChange={this.updateDocument}
                             />
                    </RadioGroup>

                    <Show when={this.props.Document === 'Other'}>
                      <Textarea name="OtherDocument"
                                className="relative-other-documentnumber"
                                {...this.props.OtherDocument}
                                onValidate={this.props.onValidate}
                                onUpdate={this.updateOtherDocument}
                                />
                    </Show>
                  </div>
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.address.number')}>
                  <Text name="ResidenceDocumentNumber"
                        className="relative-residence-documentnumber"
                        {...this.props.ResidenceDocumentNumber}
                        onError={this.props.onError}
                        onUpdate={this.updateResidenceDocumentNumber}
                        />
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.address.expiration')}
                       adjustFor="labels"
                       shrink={true}>
                  <DateControl name="Expiration"
                               className="relative-expiration"
                               {...this.props.Expiration}
                               onError={this.props.onError}
                               onUpdate={this.updateExpiration}
                               maxDate={null}
                               />
                </Field>
              </div>
            </Show>

            <Show when={this.props.Address && !['United States', 'POSTOFFICE'].includes(this.props.Address.country)}>
              <div>
                <Field title={i18n.t('relationships.relatives.heading.address.firstcontact')}
                       help="relationships.relatives.help.firstcontact"
                       adjustFor="labels"
                       shrink={true}>
                  <DateControl name="FirstContact"
                               className="relative-first-contact"
                               {...this.props.FirstContact}
                               onError={this.props.onError}
                               onUpdate={this.updateFirstContact}
                               />
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.address.lastcontact')}
                       help="relationships.relatives.help.lastcontact"
                       adjustFor="labels"
                       shrink={true}>
                  <DateControl name="LastContact"
                               className="relative-last-contact"
                               {...this.props.LastContact}
                               onError={this.props.onError}
                               onUpdate={this.updateLastContact}
                               />
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.address.methods')}
                       comments={true}
                       commentsName="MethodsComments"
                       commentsValue={this.props.MethodsComments}
                       commentsActive={(this.props.Methods || []).some(x => x === 'Other')}
                  onUpdate={this.updateMethodsComments}
                  onError={this.props.onError}
                  adjustFor="big-buttons">
                  <div>
                    {i18n.m('relationships.relatives.para.checkall')}
                    <CheckboxGroup className="relative-methods option-list"
                                   selectedValues={this.props.Methods}>
                      <Checkbox name="methods-inperson"
                                label={i18n.m('relationships.relatives.label.methods.inperson')}
                                value="In person"
                                className="methods-inperson"
                                onError={this.props.onError}
                                onChange={this.updateMethods}
                                />
                      <Checkbox name="methods-telephone"
                                label={i18n.m('relationships.relatives.label.methods.telephone')}
                                value="Telephone"
                                className="methods-telephone"
                                onError={this.props.onError}
                                onChange={this.updateMethods}
                                />
                      <Checkbox name="methods-electronic"
                                label={i18n.m('relationships.relatives.label.methods.electronic')}
                                value="Electronic"
                                className="methods-electronic"
                                onError={this.props.onError}
                                onChange={this.updateMethods}
                                />
                      <Checkbox name="methods-written"
                                label={i18n.m('relationships.relatives.label.methods.written')}
                                value="Written"
                                className="methods-written"
                                onError={this.props.onError}
                                onChange={this.updateMethods}
                                />
                      <Checkbox name="methods-other"
                                label={i18n.m('relationships.relatives.label.methods.other')}
                                value="Other"
                                className="methods-other"
                                onError={this.props.onError}
                                onChange={this.updateMethods}
                                />
                    </CheckboxGroup>
                  </div>
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.address.frequency')}
                       comments={true}
                       commentsName="FrequencyComments"
                       commentsValue={this.props.FrequencyComments}
                       commentsActive={this.props.Frequency === 'Other'}
                       onUpdate={this.updateFrequencyComments}
                       onError={this.props.onError}
                       adjustFor="big-buttons">
                  <RadioGroup className="relative-frequency option-list"
                              selectedValue={this.props.Frequency}>
                    <Radio name="frequency-daily"
                           label={i18n.m('relationships.relatives.label.frequency.daily')}
                           value="Daily"
                           className="frequency-daily"
                           onError={this.props.onError}
                           onChange={this.updateFrequency}
                           />
                    <Radio name="frequency-weekly"
                           label={i18n.m('relationships.relatives.label.frequency.weekly')}
                           value="Weekly"
                           className="frequency-weekly"
                           onError={this.props.onError}
                           onChange={this.updateFrequency}
                           />
                    <Radio name="frequency-monthly"
                           label={i18n.m('relationships.relatives.label.frequency.monthly')}
                           value="Monthly"
                           className="frequency-monthly"
                           onError={this.props.onError}
                           onChange={this.updateFrequency}
                           />
                    <Radio name="frequency-quarterly"
                           label={i18n.m('relationships.relatives.label.frequency.quarterly')}
                           value="Quarterly"
                           className="frequency-quarterly"
                           onError={this.props.onError}
                           onChange={this.updateFrequency}
                           />
                    <Radio name="frequency-annually"
                           label={i18n.m('relationships.relatives.label.frequency.annually')}
                           value="Annually"
                           className="frequency-annually"
                           onError={this.props.onError}
                           onChange={this.updateFrequency}
                           />
                    <Radio name="frequency-other"
                           label={i18n.m('relationships.relatives.label.frequency.other')}
                           value="Other"
                           className="frequency-other"
                           onError={this.props.onError}
                           onChange={this.updateFrequency}
                           />
                  </RadioGroup>
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.employer.name')}
                       adjustFor="buttons"
                       shrink={true}>
                  <NotApplicable name="EmployerNotApplicable"
                                 label={i18n.t('relationships.relatives.label.idk')}
                                 or={i18n.m('relationships.relatives.para.or')}
                                 onError={this.props.onError}
                                 onUpdate={this.updateEmployerNotApplicable}>
                    <Text name="Employer"
                          className="relative-employer"
                          {...this.props.Employer}
                          onError={this.props.onError}
                          onUpdate={this.updateEmployer}
                          />
                  </NotApplicable>
                </Field>

                <Field title={i18n.t('relationships.relatives.heading.employer.address')}
                       adjustFor="address">
                  <NotApplicable name="EmployerAddressNotApplicable"
                                 label={i18n.t('relationships.relatives.label.idk')}
                                 or={i18n.m('relationships.relatives.para.or')}
                                 onError={this.props.onError}
                                 onUpdate={this.updateEmployerAddressNotApplicable}>
                    <Location name="EmployerAddress"
                             layout={Location.STREET_CITY}
                             className="relative-employer-address"
                             {...this.props.EmployerAddress}
                             onError={this.props.onError}
                             onUpdate={this.updateEmployerAddress}
                             />
                  </NotApplicable>
                </Field>

                <NotApplicable name="EmployerRelationshipNotApplicable"
                               label={i18n.t('relationships.relatives.label.idk')}
                               or={i18n.m('relationships.relatives.para.or')}
                               onError={this.props.onError}
                               onUpdate={this.updateEmployerRelationshipNotApplicable}>
                  <Branch name="has_affiliation"
                          label={i18n.t('relationships.relatives.heading.employer.affiliated')}
                          labelSize="h3"
                          className="relative-affiliation"
                          value={this.props.HasAffiliation}
                          onUpdate={this.updateHasAffiliation}
                          onError={this.props.onError}>
                  </Branch>
                  <Show when={this.props.HasAffiliation === 'Yes'}>
                    <Field title={i18n.t('relationships.relatives.heading.employer.relationship')}>
                      <Textarea name="EmployerRelationship"
                                className="relative-employer-relationship"
                                {...this.props.EmployerRelationship}
                                onError={this.props.onError}
                                onUpdate={this.updateEmployerRelationship}
                                />
                    </Field>
                  </Show>
                </NotApplicable>
              </div>
            </Show>
          </div>
        </Show>
      </div>
    )
  }
}

Relative.defaultProps = {
  Relation: '',
  Name: {},
  Birthdate: {},
  Birthplace: {},
  Citizenship: [],
  MaidenSameAsListed: '',
  MaidenName: {},
  Aliases: [],
  IsDeceased: '',
  Address: {},
  DocumentNumber: {},
  CourtName: {},
  CourtAddress: {},
  Document: '',
  DocumentComments: {},
  ResidenceDocumentNumber: {},
  Expiration: {},
  FirstContact: {},
  LastContact: {},
  Methods: [],
  MethodsComments: {},
  Frequency: '',
  FrequencyComments: {},
  EmployerNotApplicable: {},
  EmployerAddressNotApplicable: {},
  EmployerRelationshipNotApplicable: {},
  Employer: {},
  EmployerAddress: {},
  HasAffiliation: '',
  EmployerRelationship: {},
  onUpdate: (queue) => {},
  onError: (value, arr) => { return arr }
}
