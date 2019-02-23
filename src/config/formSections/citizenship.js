import * as sections from '@constants/sections'
import { i18n } from '@config'

const CITIZENSHIP = {
  key: sections.CITIZENSHIP,
  name: 'citizenship',
  path: {
    section: 'citizenship',
  },
  store: 'Citizenship',
  label: i18n.t('citizenship.section.name'),
}

const CITIZENSHIP_INTRO = {
  key: sections.CITIZENSHIP_INTRO,
  name: 'intro',
  path: {
    section: CITIZENSHIP.path.section,
    subsection: '',
  },
  label: i18n.t('citizenship.subsection.intro'),
}

const CITIZENSHIP_STATUS = {
  key: sections.CITIZENSHIP_STATUS,
  name: 'status',
  path: {
    section: CITIZENSHIP.path.section,
    subsection: 'status',
  },
  storeKey: 'Status',
  label: i18n.t('citizenship.subsection.status'),
}

const CITIZENSHIP_MULTIPLE = {
  key: sections.CITIZENSHIP_MULTIPLE,
  name: 'multiple',
  path: {
    section: CITIZENSHIP.path.section,
    subsection: 'multiple',
  },
  storeKey: 'Multiple',
  label: i18n.t('citizenship.subsection.multiple'),
}

const CITIZENSHIP_PASSPORTS = {
  key: sections.CITIZENSHIP_PASSPORTS,
  name: 'passports',
  path: {
    section: CITIZENSHIP.path.section,
    subsection: 'passports',
  },
  storeKey: 'Passports',
  label: i18n.t('citizenship.subsection.passports'),
}

const CITIZENSHIP_REVIEW = {
  key: sections.CITIZENSHIP_REVIEW,
  name: 'review',
  path: {
    section: CITIZENSHIP.path.section,
    subsection: 'review',
  },
  label: i18n.t('citizenship.subsection.review'),
}

export default {
  CITIZENSHIP,
  CITIZENSHIP_INTRO,
  CITIZENSHIP_STATUS,
  CITIZENSHIP_MULTIPLE,
  CITIZENSHIP_PASSPORTS,
  CITIZENSHIP_REVIEW,
}
