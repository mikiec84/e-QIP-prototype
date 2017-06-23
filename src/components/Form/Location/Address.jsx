import React from 'react'
import ValidationElement from '../ValidationElement'
import Street from '../Street'
import MilitaryState from '../MilitaryState'
import City from '../City'
import Country from '../Country'
import ZipCode from '../ZipCode'
import RadioGroup from '../RadioGroup'
import Radio from '../Radio'
import ApoFpo from '../ApoFpo'
import Show from '../Show'
import { i18n } from '../../../config'

export default class Address extends ValidationElement {
  constructor (props) {
    super(props)

    this.update = this.update.bind(this)
    this.updateStreet = this.updateStreet.bind(this)
    this.updateCity = this.updateCity.bind(this)
    this.updateState = this.updateState.bind(this)
    this.updateCountry = this.updateCountry.bind(this)
    this.updateZipcode = this.updateZipcode.bind(this)
    this.updateAddressType = this.updateAddressType.bind(this)
    this.addressTypeFunc = this.addressTypeFunc.bind(this)
  }

  updateStreet (event) {
    this.update({ street: event.target.value })
  }

  updateCity (event) {
    this.update({ city: event.target.value })
  }

  updateState (event) {
    this.update({state: event.target.value})
  }

  updateZipcode (event) {
    this.update({zipcode: event.target.value})
  }

  updateCountry (event) {
    this.update({country: event.target.value})
  }

  updateAddressType (cb) {
    let country = ''
    switch (cb.value) {
      case 'United States':
      case 'POSTOFFICE':
        country = cb.value
        break
    }

    this.update({
      country: country
    })
  }

  update (updateValues) {
    if (this.props.onUpdate) {
      this.props.onUpdate({
        street: this.props.street,
        city: this.props.city,
        state: this.props.state,
        country: this.props.country,
        zipcode: this.props.zipcode,
        ...updateValues
      })
    }
  }

  addressTypeFunc (props) {
    switch (true) {
      case props.value === this.props.country:
        return true
      case props.value === 'International' && !['United States', 'POSTOFFICE'].includes(this.props.country):
        return true
      default:
        return false
    }
  }

  render () {
    return (
      <div className="address">
        <Show when={!this.props.disableToggle}>
          <div>
            <label>{this.props.label}</label>
            <RadioGroup className="address-options" selectedValueFunc={this.addressTypeFunc}>
              <Radio name="addressType"
                label={i18n.m('address.options.us.label')}
                value="United States"
                className="domestic"
                ignoreDeselect="true"
                disabled={this.props.disabled}
                onUpdate={this.updateAddressType}
                onBlur={this.props.onBlur}
                onFocus={this.props.onFocus}
              />
              <Radio name="addressType"
                label={i18n.m('address.options.apoFpo.label')}
                value="POSTOFFICE"
                className="apofpo"
                ignoreDeselect="true"
                disabled={this.props.disabled}
                onUpdate={this.updateAddressType}
                onBlur={this.props.onBlur}
                onFocus={this.props.onFocus}
              />
              <Radio name="addressType"
                label={i18n.m('address.options.international.label')}
                value="International"
                className="international"
                ignoreDeselect="true"
                disabled={this.props.disabled}
                onUpdate={this.updateAddressType}
                onBlur={this.props.onBlur}
                onFocus={this.props.onFocus}
              />
            </RadioGroup>
          </div>
        </Show>
        <div className="fields">
          <div>
            <Show when={this.props.country === 'United States'}>
              <div>
                <Street name="address"
                  className="mailing"
                  label={this.props.streetLabel}
                  placeholder={this.props.streetPlaceholder}
                  value={this.props.street}
                  onChange={this.updateStreet}
                  onError={this.handleError}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                />
                <City name="city"
                  className="city"
                  label={this.props.cityLabel}
                  placeholder={this.props.cityPlaceholder}
                  value={this.props.city}
                  onChange={this.updateCity}
                  onError={this.handleError}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                />
                <div className="state-zip-wrap">
                  <MilitaryState name="state"
                    className="state"
                    label={this.props.stateLabel}
                    placeholder={this.props.statePlaceholder}
                    value={this.props.state}
                    includeStates="true"
                    onChange={this.updateState}
                    onError={this.handleError}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                  />
                  <ZipCode name="zipcode"
                    ref="us_zipcode"
                    key="us_zipcode"
                    className="zipcode"
                    label={this.props.zipcodeLabel}
                    placeholder={this.props.zipcodePlaceholder}
                    value={this.props.zipcode}
                    onChange={this.updateZipcode}
                    onError={this.handleError}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                  />
                </div>
              </div>
            </Show>
            <Show when={!['United States', 'POSTOFFICE'].includes(this.props.country)}>
              <div>
                <Street name="address"
                  label={this.props.streetLabel}
                  placeholder={this.props.streetPlaceholder}
                  className="mailing"
                  value={this.props.street}
                  onChange={this.updateStreet}
                  onError={this.handleError}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                />
                <City name="city"
                  className="city"
                  label={this.props.cityLabel}
                  placeholder={this.props.cityPlaceholder}
                  value={this.props.city}
                  onChange={this.updateCity}
                  onError={this.handleError}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                />
                <Country name="country"
                  label={this.props.countryLabel}
                  placeholder={this.props.countryPlaceholder}
                  value={this.props.country}
                  excludeUnitedStates="true"
                  onChange={this.updateCountry}
                  onError={this.handleError}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                />
              </div>
            </Show>
            <Show when={this.props.country === 'POSTOFFICE'}>
              <div>
                <Street name="address"
                  label={i18n.t('address.apoFpo.street.label')}
                  placeholder={i18n.t('address.apoFpo.street.placeholder')}
                  className="mailing"
                  value={this.props.street}
                  onChange={this.updateStreet}
                  onError={this.handleError}
                  onFocus={this.props.onFocus}
                  onBlur={this.props.onBlur}
                />
                <label>{i18n.t('address.apoFpo.select.label')}</label>
                <RadioGroup className="apofpo" selectedValue={this.props.city}>
                  <Radio name="apoFpoType"
                    label={i18n.t('address.apoFpo.apoFpoType.apo.label')}
                    value="APO"
                    disabled={this.props.disabled}
                    onChange={this.updateCity}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                  />
                  <Radio name="addressType"
                    label={i18n.t('address.apoFpo.apoFpoType.fpo.label')}
                    value="FPO"
                    disabled={this.props.disabled}
                    onChange={this.updateCity}
                    onBlur={this.props.onBlur}
                    onFocus={this.props.onFocus}
                  />
                </RadioGroup>
                <div className="state-zip-wrap">
                  <ApoFpo name="apoFpo"
                    className="state"
                    label={i18n.t('address.apoFpo.apoFpo.label')}
                    placeholder={i18n.t('address.apoFpo.apoFpo.placeholder')}
                    value={this.props.state}
                    onChange={this.updateState}
                    onError={this.handleError}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                    tabNext={() => { this.props.tab(this.refs.apo_zipcode.refs.zipcode.refs.text.refs.input) }}
                  />
                  <ZipCode name="zipcode"
                    ref="apo_zipcode"
                    key="apo_zipcode"
                    className="zipcode"
                    label={i18n.t('address.apoFpo.zipcode.label')}
                    placeholder={i18n.t('address.apoFpo.zipcode.placeholder')}
                    value={this.props.zipcode}
                    onChange={this.updateZipcode}
                    onError={this.handleError}
                    onFocus={this.props.onFocus}
                    onBlur={this.props.onBlur}
                  />
                </div>
              </div>
            </Show>
          </div>
        </div>
      </div>
    )
  }
}

Address.defaultProps = {
  label: i18n.t('address.label'),
  tab: (input) => { input.focus() },
  country: 'United States',
  onError: (value, arr) => { return arr }
}

Address.errors = []

