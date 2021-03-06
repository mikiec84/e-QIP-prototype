import React from 'react'
import { i18n } from 'config'
import { pickDate } from 'validators/helpers'
import {
  Branch,
  Field,
  DateControl,
  ValidationElement,
  Show,
  NotApplicable,
  Email,
  Telephone,
  Name,
  ForeignBornDocuments,
  SSN,
  MaidenName,
  DateRange,
  Country,
  Location,
  BranchCollection,
  AccordionItem,
} from 'components/Form'
import ConnectedAlternateAddress from 'components/Form/Location/AlternateAddress'
import { countryString } from 'validators/location'

class CivilUnion extends ValidationElement {
  update = (queue) => {
    this.props.onUpdate({
      ...this.props,
      ...queue,
    })
  }

  updateName = (values) => {
    this.update({
      Name: values,
    })

    if (this.props.onSpouseUpdate) {
      this.props.onSpouseUpdate(values)
    }
  }

  updateUseCurrentAddress = (values) => {
    const nextValues = { ...values, applicable: !values.applicable }

    this.update({
      UseCurrentAddress: nextValues,
      Address: !values.applicable ? { ...this.props.currentAddress } : {},
    })
  }

  render() {
    /**
     * `this.props.BirthPlace` can end up in a number of different states,
     * depending on the choices a user makes in this section _and_ on
     * the initial state of the app.
     *
     * The initial, pristine value for this.props.BirthPlace is `undefined`.
     * This occurs despite the BirthPlace key/value pair in defaultProps,
     * indicating that the value is being explicitly supplied at some point.
     *
     * Once either the 'US' or 'outside the US' options have been selected, the value
     * of `BirthPlace` changes to one of these data structures on page load:
     *
     * {layout: "Birthplace", country: "United States"}
     *
     * OR
     *
     * {layout: "Birthplace", city: "Hamburg", country: "Germany"}
     *
     * If the user has indicated their spouse has an international birthplace, and then
     * clicks on 'US', `BirthPlace` will get updated to the following data structure:
     *
     * {value: "United States"}
     *
     * If the user then clicks on 'outside the US', and fills in any of the fields in
     * the displayd form, the `BirthPlace` prop is resupplied to the component with
     * the following structure:
     *
     *  {name: "country", comments: "", showComments: false, value: ['germany']}
     *
     */

    const { country } = this.props.BirthPlace
    const showForeignBornDocumentation = country && countryString(country) !== 'United States'
    const enteredCivilUnionMinDate = pickDate([
      this.props.applicantBirthdate,
      this.props.Birthdate,
    ])
    return (
      <div className="civil-union">
        <div>
          <p>{i18n.t('relationships.civilUnion.para.never')}</p>

          <Field
            title={i18n.t('relationships.civilUnion.heading.name')}
            optional
            filterErrors={Name.requiredErrorsOnly}
            scrollIntoView={this.props.scrollIntoView}
          >
            <Name
              name="Name"
              className="civil"
              {...this.props.Name}
              onUpdate={this.updateName}
              onError={this.props.onError}
              required={this.props.required}
              scrollIntoView={this.props.scrollIntoView}
            />
          </Field>

          <Field
            help="relationships.civilUnion.help.birthdate"
            title={i18n.t('relationships.civilUnion.heading.birthdate')}
            scrollIntoView={this.props.scrollIntoView}
            adjustFor="datecontrol"
          >
            <DateControl
              name="birthdate"
              className="birthdate"
              {...this.props.Birthdate}
              relationship="Other"
              onUpdate={values => this.update({
                Birthdate: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
            />
          </Field>

          <Field
            title={i18n.t('relationships.civilUnion.heading.birthplace')}
            scrollIntoView={this.props.scrollIntoView}
          >
            <Location
              name="birthplace"
              {...this.props.BirthPlace}
              layout={Location.BIRTHPLACE}
              className="birthplace"
              label={i18n.t('relationships.civilUnion.label.birthplace')}
              onUpdate={values => this.update({
                BirthPlace: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
            />
          </Field>

          <Show when={showForeignBornDocumentation}>
            <ForeignBornDocuments
              name="foreignBornDocument"
              {...this.props.ForeignBornDocument}
              onUpdate={values => this.update({
                ForeignBornDocument: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
              scrollIntoView={this.props.scrollIntoView}
            />
          </Show>

          <Field
            title={i18n.t('relationships.civilUnion.heading.ssn')}
            help="identification.ssn.help"
            scrollIntoView={this.props.scrollIntoView}
          >
            <SSN
              name="ssn"
              {...this.props.SSN}
              onUpdate={values => this.update({
                SSN: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
            />
          </Field>

          <BranchCollection
            label={i18n.t('relationships.civilUnion.heading.othernames')}
            className="othername"
            appendLabel={i18n.t(
              'relationships.civilUnion.heading.appendOthernames'
            )}
            {...this.props.OtherNames}
            onError={this.props.onError}
            onUpdate={values => this.update({
              OtherNames: values,
            })}
            required={this.props.required}
            scrollIntoView={this.props.scrollIntoView}
          >
            <AccordionItem
              scrollIntoView={this.props.scrollIntoView}
              required={this.props.required}
            >
              <Field
                title={i18n.t(
                  'relationships.civilUnion.othernames.heading.name'
                )}
                optional
                filterErrors={Name.requiredErrorsOnly}
                scrollIntoView={this.props.scrollIntoView}
              >
                <Name
                  name="Name"
                  bind
                  onError={this.props.onError}
                  required={this.props.required}
                  scrollIntoView={this.props.scrollIntoView}
                />
              </Field>

              <Field
                title={i18n.t(
                  'relationships.civilUnion.othernames.heading.maiden'
                )}
                help="alias.maiden.help"
                adjustFor="buttons"
                shrink
                scrollIntoView={this.props.scrollIntoView}
              >
                <MaidenName
                  name="MaidenName"
                  bind
                  onError={this.props.onError}
                  required={this.props.required}
                  scrollIntoView={this.props.scrollIntoView}
                />
              </Field>

              <Field
                title={i18n.t(
                  'relationships.civilUnion.othernames.heading.used'
                )}
                adjustFor="daterange"
                shrink
                scrollIntoView={this.props.scrollIntoView}
              >
                <DateRange
                  name="DatesUsed"
                  bind
                  prefix="relative"
                  minDate={this.props.Birthdate}
                  minDateEqualTo
                  className="datesused"
                  onError={this.props.onError}
                  required={this.props.required}
                />
              </Field>
            </AccordionItem>
          </BranchCollection>

          <Field
            title={i18n.t('relationships.civilUnion.heading.citizenship')}
            help="relationships.civilUnion.help.citizenship"
            scrollIntoView={this.props.scrollIntoView}
            adjustFor="country"
          >
            <Country
              name="Citizenship"
              {...this.props.Citizenship}
              className="relationships-civilUnion-citizenship"
              multiple
              onUpdate={values => this.update({
                Citizenship: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
            />
          </Field>

          <Field
            title={i18n.t('relationships.civilUnion.heading.enteredCivilUnion')}
            scrollIntoView={this.props.scrollIntoView}
            adjustFor="datecontrol"
          >
            <DateControl
              name="enteredCivilUnion"
              className="entered"
              minDateEqualTo
              prefix="civilUnion"
              minDate={enteredCivilUnionMinDate}
              {...this.props.EnteredCivilUnion}
              onUpdate={values => this.update({
                EnteredCivilUnion: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
            />
          </Field>

          <Field
            title={i18n.t('relationships.civilUnion.heading.location')}
            scrollIntoView={this.props.scrollIntoView}
          >
            <Location
              name="Location"
              className="civilunion-location"
              {...this.props.Location}
              layout={Location.BIRTHPLACE}
              label={i18n.t('relationships.civilUnion.label.location')}
              onUpdate={values => this.update({
                Location: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
            />
          </Field>

          <Field
            title={i18n.t(
              `relationships.civilUnion.heading.address${
                this.props.currentAddress ? '' : 'WithoutCurrent'
              }`
            )}
            optional
            help="relationships.civilUnion.help.address"
            scrollIntoView={this.props.scrollIntoView}
            adjustFor="address"
          >
            <NotApplicable
              name="UseCurrentAddress"
              applicable={!this.props.UseCurrentAddress.applicable}
              className="current-address"
              label={i18n.t('relationships.civilUnion.useCurrentAddress.label')}
              or={i18n.m('relationships.civilUnion.useCurrentAddress.or')}
              onUpdate={this.updateUseCurrentAddress}
              onError={this.props.onError}
            >
              <Location
                name="Address"
                {...this.props.Address}
                layout={Location.ADDRESS}
                geocode
                addressBooks={this.props.addressBooks}
                addressBook="Relative"
                showPostOffice
                dispatch={this.props.dispatch}
                onUpdate={values => this.update({
                  Address: values,
                })}
                onError={this.props.onError}
                required={this.props.required}
              />
            </NotApplicable>
            <Show when={!this.props.UseCurrentAddress.applicable}>
              <ConnectedAlternateAddress
                address={this.props.AlternateAddress}
                addressBook="Relative"
                belongingTo="AlternateAddress"
                country={this.props.Address.country}
                militaryAddressLabel={i18n.t('address.militaryAddress.spouse')}
                onUpdate={this.update}
              />
            </Show>
          </Field>

          <Field
            title={i18n.t('relationships.civilUnion.heading.telephone')}
            className="override-required"
            scrollIntoView={this.props.scrollIntoView}
            adjustFor="telephone"
          >
            <Telephone
              name="Telephone"
              {...this.props.Telephone}
              onUpdate={values => this.update({
                Telephone: values,
              })}
              onError={this.props.onError}
              required={this.props.required}
              allowNotApplicable={false}
            />
          </Field>

          <Field
            title={i18n.t('relationships.civilUnion.heading.email')}
            scrollIntoView={this.props.scrollIntoView}
          >
            <NotApplicable
              name="EmailNotApplicable"
              className="email-notapplicable"
              {...this.props.EmailNotApplicable}
              label={i18n.t(
                'relationships.people.person.label.idk'
              )}
              or={i18n.m('relationships.people.person.label.or')}
              onError={this.props.onError}
              onUpdate={values => this.update({
                Email: {},
                EmailNotApplicable: values,
              })}
            >
              <Email
                name="Email"
                {...this.props.Email}
                onUpdate={values => this.update({
                  Email: values,
                })}
                onError={this.props.onError}
                required={
                  (this.props.EmailNotApplicable || {}).applicable
                  && this.props.required
                }
              />
            </NotApplicable>
          </Field>

          <Branch
            name="separated"
            className="separated"
            label={i18n.t('relationships.civilUnion.heading.separated')}
            labelSize="h4"
            {...this.props.Separated}
            onUpdate={values => this.update({
              Separated: values,
            })}
            minDate={this.props.EnteredCivilUnion}
            required={this.props.required}
            scrollIntoView={this.props.scrollIntoView}
            onError={this.props.onError}
          />

          <Show when={(this.props.Separated || {}).value === 'Yes'}>
            <div>
              <Field
                title={i18n.t('relationships.civilUnion.heading.dateSeparated')}
                help="relationships.civilUnion.help.dateSeparated"
                scrollIntoView={this.props.scrollIntoView}
                adjustFor="datecontrol"
              >
                <DateControl
                  name="DateSeparated"
                  className="dateseparated"
                  minDate={this.props.EnteredCivilUnion}
                  minDateEqualTo
                  {...this.props.DateSeparated}
                  onUpdate={values => this.update({
                    DateSeparated: values,
                  })}
                  onError={this.props.onError}
                  required={this.props.required}
                />
              </Field>

              <Field
                title={i18n.t(
                  'relationships.civilUnion.heading.addressSeparated'
                )}
                className="address-separated"
                scrollIntoView={this.props.scrollIntoView}
              >
                <NotApplicable
                  name="AddressSeparatedNotApplicable"
                  {...this.props.AddressSeparatedNotApplicable}
                  label={i18n.t('relationships.civilUnion.notApplicable.label')}
                  or={i18n.m('relationships.civilUnion.notApplicable.or')}
                  onUpdate={values => this.update({
                    AddressSeparatedNotApplicable: values,
                  })}
                  onError={this.props.onError}
                >
                  <Location
                    name="addressSeparated"
                    {...this.props.AddressSeparated}
                    label={i18n.t(
                      'relationships.civilUnion.label.addressSeparated'
                    )}
                    layout={Location.US_CITY_STATE_ZIP_INTERNATIONAL_CITY}
                    showPostOffice
                    onUpdate={values => this.update({
                      AddressSeparated: values,
                    })}
                    onError={this.props.onError}
                    required={this.props.required}
                  />
                </NotApplicable>
              </Field>
            </div>
          </Show>

          <Branch
            name="divorced"
            label={i18n.t('relationships.civilUnion.heading.divorced')}
            labelSize="h4"
            className="divorced"
            {...this.props.Divorced}
            onUpdate={values => this.update({
              Divorced: values,
            })}
            required={this.props.required}
            scrollIntoView={this.props.scrollIntoView}
            onError={this.props.onError}
          />
        </div>
      </div>
    )
  }
}

CivilUnion.defaultProps = {
  Name: {},
  Birthdate: {},
  BirthPlace: {},
  ForeignBornDocument: {},
  SSN: {},
  OtherNames: {},
  Citizenship: {},
  EnteredCivilUnion: {},
  Address: {},
  Location: {},
  Telephone: {},
  Email: {},
  EmailNotApplicable: { applicable: true },
  Separated: {},
  DateSeparated: {},
  AddressSeparated: {},
  AddressSeparatedNotApplicable: {
    applicable: true,
  },
  Divorced: {},
  UseCurrentAddress: {},
  addressBooks: {},
  dispatch: () => {},
  onUpdate: () => {},
  onError: (value, arr) => arr,
  defaultState: true,
}

export default CivilUnion
