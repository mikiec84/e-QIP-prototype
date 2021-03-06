import { relationshipOptions, roleOptions } from 'constants/enums/residenceOptions'

import address from 'models/shared/locations/address'
import name from 'models/shared/name'
import phone from 'models/shared/phone'
import email from 'models/shared/email'

import { today, dateWithinRange } from 'helpers/date'

const residenceRequiresReference = (dates = {}) => {
  const { from, present } = dates
  const to = present ? today.toObject() : dates.to
  const referenceTimeframe = { years: 3 }

  return dateWithinRange(to, referenceTimeframe)
    || dateWithinRange(from, referenceTimeframe)
}

const residence = {
  Dates: {
    presence: true,
    daterange: true,
  },
  Address: {
    presence: true,
    location: { validator: address },
  },

  AlternateAddress: {
    // TODO - currently no validation in place
    // - figure out required/not required
    // - valid address
  },

  Role: {
    presence: true,
    hasValue: { validator: { inclusion: roleOptions } },
  },
  RoleOther: (value, attributes = {}) => {
    if (attributes.Role && attributes.Role.value && attributes.Role.value === 'Other') {
      return { presence: true, hasValue: true }
    }

    return {}
  },

  // Reference required if date range is within 3 years
  ReferenceName: (value, attributes = {}) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        model: { validator: name },
      }
      : {}
  ),
  ReferenceLastContact: (value, attributes = {}) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        date: true,
      } : {}
  ),
  ReferenceComments: {}, // not used?

  ReferencePhoneEvening: (value, attributes = {}) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        model: { validator: phone },
      } : {}
  ),
  ReferencePhoneDay: (value, attributes = {}) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        model: { validator: phone },
      } : {}
  ),
  ReferencePhoneMobile: (value, attributes = {}) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        model: { validator: phone },
      } : {}
  ),

  ReferenceRelationship: (value, attributes) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        array: {
          validator: {
            presence: true,
            inclusion: relationshipOptions,
          },
          length: { minimum: 1 },
        },
      } : {}
  ),
  ReferenceRelationshipOther: (value, attributes) => {
    if (attributes.ReferenceRelationship
      && attributes.ReferenceRelationship.values
      && attributes.ReferenceRelationship.values.some
      && attributes.ReferenceRelationship.values.some(i => i === 'Other')) {
      return { presence: true, hasValue: true }
    }

    return {}
  },

  ReferenceEmail: (value, attributes) => {
    const { Dates, ReferenceEmailNotApplicable } = attributes
    if (!residenceRequiresReference(Dates)) return {}

    if (ReferenceEmailNotApplicable && !ReferenceEmailNotApplicable.applicable) {
      return {}
    }

    return {
      presence: true,
      model: { validator: email },
    }
  },
  ReferenceEmailNotApplicable: {},

  ReferenceAddress: (value, attributes) => (
    residenceRequiresReference(attributes.Dates)
      ? {
        presence: true,
        location: { validator: address },
      } : {}
  ),
  ReferenceAlternateAddress: {
    // TODO - currently no validation in place
    // - figure out required/not required
    // - valid address
  },
}

export default residence
