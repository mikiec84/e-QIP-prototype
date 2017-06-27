import React from 'react'
import { i18n } from '../../../../config'
import { ValidationElement, Field, Branch, Show, Country, DateControl, Location, Name, Text, Accordion } from '../../../Form'
import { DateSummary } from '../../../Summary'
import { sendUpdate } from './Multiple'
import TravelItem from './TravelItem'

export default class PassportItem extends ValidationElement {
  constructor (props) {
    super(props)

    this.state = {
      Country: props.Country,
      Issued: props.Issued,
      Location: props.Location,
      Name: props.Name,
      Number: props.Number,
      Expiration: props.Expiration,
      Used: props.Used,
      Countries: props.Countries
    }

    this.onUpdate = this.onUpdate.bind(this)
    this.updateCountry = this.updateCountry.bind(this)
    this.updateIssued = this.updateIssued.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateName = this.updateName.bind(this)
    this.updateNumber = this.updateNumber.bind(this)
    this.updateExpiration = this.updateExpiration.bind(this)
    this.updateUsed = this.updateUsed.bind(this)
    this.updateCountries = this.updateCountries.bind(this)
  }

  onUpdate (name, values) {
    this.setState({ [name]: values }, () => {
      sendUpdate(this.props.onUpdate, this.props.name, this.state)
    })
  }

  updateCountry (values) {
    this.onUpdate('Country', values)
  }

  updateIssued (values) {
    this.onUpdate('Issued', values)
  }

  updateLocation (values) {
    this.onUpdate('Location', values)
  }

  updateName (values) {
    this.onUpdate('Name', values)
  }

  updateNumber (values) {
    this.onUpdate('Number', values)
  }

  updateExpiration (values) {
    this.onUpdate('Expiration', values)
  }

  updateUsed (values) {
    this.onUpdate('Used', values)
  }

  updateCountries (values) {
    this.onUpdate('Countries', values.items)
  }

  summary (item, index) {
    const itemProperties = (item || {}).Item || {}
    const country = itemProperties.Country && itemProperties.Country.value
          ? itemProperties.Country.value
          : i18n.t('citizenship.multiple.collection.travel.summary.unknown')
    const dates = DateSummary(itemProperties.Dates)

    return (
      <span>
        <span className="index">{i18n.t('citizenship.multiple.collection.travel.summary.item')} {index + 1}:</span>
        <span><strong>{country}</strong></span>
        <span className="dates"><strong>{dates}</strong></span>
      </span>
    )
  }

  render () {
    return (
      <div className="passport-item">
        <Field title={i18n.t('citizenship.multiple.heading.passport.country')}>
          <Country name="Country"
                   className="passport-country"
                   {...this.state.Country}
                   onUpdate={this.updateCountry}
                   onError={this.props.onError}
                   />
        </Field>

        <Field title={i18n.t('citizenship.multiple.heading.passport.issued')}
               adjustFor="labels"
               shrink={true}>
          <DateControl name="Issued"
                       {...this.state.Issued}
                       className="passport-issued"
                       onUpdate={this.updateIssued}
                       onError={this.props.onError}
                       />
        </Field>

        <Field title={i18n.t('citizenship.multiple.heading.passport.location')}
          adjustFor="labels">
          <Location name="Location"
                   layout={Location.CITY_COUNTRY}
                   {...this.state.Location}
                   className="passport-location"
                   onUpdate={this.updateLocation}
                   onError={this.props.onError}
                   />
        </Field>

        <h3>{i18n.t('citizenship.multiple.heading.passport.name')}</h3>
        <Name name="Name"
              {...this.state.Name}
              className="passport-name"
              onUpdate={this.updateName}
              onError={this.props.onError}
              />

        <Field title={i18n.t('citizenship.multiple.heading.passport.number')}>
          <Text name="Number"
                {...this.state.Number}
                className="passport-number"
                onUpdate={this.updateNumber}
                onError={this.props.onError}
                />
        </Field>

        <Field title={i18n.t('citizenship.multiple.heading.passport.expiration')}
               adjustFor="labels"
               shrink={true}>
          <DateControl name="Expiration"
                       {...this.state.Expiration}
                       className="passport-expiration"
                       onUpdate={this.updateExpiration}
                       onError={this.props.onError}
                       />
        </Field>

        <Branch name="Used"
                label={i18n.t('citizenship.multiple.heading.passport.used')}
                labelSize="h3"
                className="passport-used"
                value={this.state.Used}
                onUpdate={this.updateUsed}
                onError={this.props.onError}
                />

        <Show when={this.state.Used === 'Yes'}>
          <Accordion minimum="1"
                     items={this.state.Countries}
                     defaultState={this.props.defaultState}
                     onUpdate={this.updateCountries}
                     onError={this.props.onError}
                     summary={this.summary}
                     description={i18n.t('citizenship.multiple.collection.travel.summary.title')}
                     appendLabel={i18n.t('citizenship.multiple.collection.travel.append')}>
            <TravelItem name="Item" bind={true} />
          </Accordion>
        </Show>
      </div>
    )
  }
}

PassportItem.defaultProps = {
  Country: {},
  Issued: {},
  Location: {},
  Name: {},
  Number: {},
  Expiration: {},
  Used: '',
  Countries: [],
  onError: (value, arr) => { return arr },
  defaultState: true
}