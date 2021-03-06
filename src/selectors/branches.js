import { createSelector } from 'reselect'

import {
  requireHistoryFederalSection,
  requireMultipleCitizenshipRenounced,
  requireCitizenshipForeignPassportsSection,
  requireForeignMilitaryMaintainsContact,
  requireForeignContactsSection,
  requireForeignActivitiesSection,
  requireForeignBusinessSection,
  requireForeignTravelSection,
  requireFinancialBankruptcySection,
  requireFinancialGamblingSection,
  requireFinancialTaxesSection,
  requireFinancialCardSection,
  requireFinancialCreditSection,
  requireFinancialDelinquentSection,
  requireFinancialDelinquentName,
  allowFinancialDelinquentNonFederal,
  requireFinancialNonpaymentSection,
  requireDrugWhileSafetySection,
  requireDrugWithClearanceSection,
  requireAlcoholSections,
  requireDrugWhileSafety,
  requireDrugWithClearance,
  requireDrugInFuture,
  requireLegalOtherOffensesSection,
  requireLegalNonCriminalCourtSection,
  requireLegalTechnologySection,
  requireLegalOffenseInvolvements,
  requireLegalOffenseSentenced,
  requireLegalOffenseIncarcerated,
  requireLegalInvestigationClearanceGranted,
} from 'helpers/branches'

import { formTypeSelector } from 'selectors/formType'

export const selectHistoryFederalSection = createSelector(formTypeSelector,
  formType => ({ requireHistoryFederalSection: requireHistoryFederalSection(formType) }))

export const selectMultipleCitizenshipRenounced = createSelector(formTypeSelector,
  formType => ({
    requireMultipleCitizenshipRenounced: requireMultipleCitizenshipRenounced(formType),
  }))

export const selectCitizenshipForeignPassportsSection = createSelector(formTypeSelector,
  formType => ({
    requireCitizenshipForeignPassportsSection:
      requireCitizenshipForeignPassportsSection(formType),
  }))

export const selectForeignMilitaryMaintainsContact = createSelector(formTypeSelector,
  formType => ({
    requireForeignMilitaryMaintainsContact: requireForeignMilitaryMaintainsContact(formType),
  }))

export const selectForeignContactsSection = createSelector(formTypeSelector,
  formType => ({ requireForeignContactsSection: requireForeignContactsSection(formType) }))

export const selectForeignActivitiesSection = createSelector(formTypeSelector,
  formType => ({ requireForeignActivitiesSection: requireForeignActivitiesSection(formType) }))

export const selectForeignBusinessSection = createSelector(formTypeSelector,
  formType => ({ requireForeignBusinessSection: requireForeignBusinessSection(formType) }))

export const selectForeignTravelSection = createSelector(formTypeSelector,
  formType => ({ requireForeignTravelSection: requireForeignTravelSection(formType) }))

export const selectFinancialBankruptcySection = createSelector(formTypeSelector,
  formType => ({ requireFinancialBankruptcySection: requireFinancialBankruptcySection(formType) }))

export const selectFinancialGamblingSection = createSelector(formTypeSelector,
  formType => ({ requireFinancialGamblingSection: requireFinancialGamblingSection(formType) }))

export const selectFinancialTaxesSection = createSelector(formTypeSelector,
  formType => ({ requireFinancialTaxesSection: requireFinancialTaxesSection(formType) }))

export const selectFinancialCardSection = createSelector(formTypeSelector,
  formType => ({ requireFinancialCardSection: requireFinancialCardSection(formType) }))

export const selectFinancialCreditSection = createSelector(formTypeSelector,
  formType => ({ requireFinancialCreditSection: requireFinancialCreditSection(formType) }))

export const selectFinancialDelinquentSection = createSelector(formTypeSelector,
  formType => ({ requireFinancialDelinquentSection: requireFinancialDelinquentSection(formType) }))

export const selectFinancialDelinquentName = createSelector(formTypeSelector,
  formType => ({ requireFinancialDelinquentName: requireFinancialDelinquentName(formType) }))

export const selectFinancialDelinquentNonFederal = createSelector(formTypeSelector,
  formType => ({
    allowFinancialDelinquentNonFederal: allowFinancialDelinquentNonFederal(formType),
  }))

export const selectFinancialNonpaymentSection = createSelector(formTypeSelector,
  formType => ({ requireFinancialNonpaymentSection: requireFinancialNonpaymentSection(formType) }))

export const selectDrugWhileSafetySection = createSelector(formTypeSelector,
  formType => ({ requireDrugWhileSafetySection: requireDrugWhileSafetySection(formType) }))

export const selectDrugWithClearanceSection = createSelector(formTypeSelector,
  formType => ({ requireDrugWithClearanceSection: requireDrugWithClearanceSection(formType) }))

export const selectAlcoholSections = createSelector(formTypeSelector,
  formType => ({ requireAlcoholSections: requireAlcoholSections(formType) }))

export const selectDrugWhileSafety = createSelector(formTypeSelector,
  formType => ({ requireDrugWhileSafety: requireDrugWhileSafety(formType) }))

export const selectDrugWithClearance = createSelector(formTypeSelector,
  formType => ({ requireDrugWithClearance: requireDrugWithClearance(formType) }))

export const selectDrugInFuture = createSelector(formTypeSelector,
  formType => ({ requireDrugInFuture: requireDrugInFuture(formType) }))

export const selectLegalOtherOffensesSection = createSelector(formTypeSelector,
  formType => ({ requireLegalOtherOffensesSection: requireLegalOtherOffensesSection(formType) }))

export const selectLegalNonCriminalCourtSection = createSelector(formTypeSelector,
  formType => ({
    requireLegalNonCriminalCourtSection: requireLegalNonCriminalCourtSection(formType),
  }))

export const selectLegalTechnologySection = createSelector(formTypeSelector,
  formType => ({ requireLegalTechnologySection: requireLegalTechnologySection(formType) }))

export const selectLegalOffenseInvolvements = createSelector(formTypeSelector,
  formType => ({ requireLegalOffenseInvolvements: requireLegalOffenseInvolvements(formType) }))

export const selectLegalOffenseSentenced = createSelector(formTypeSelector,
  formType => ({ requireLegalOffenseSentenced: requireLegalOffenseSentenced(formType) }))

export const selectLegalOffenseIncarcerated = createSelector(formTypeSelector,
  formType => ({ requireLegalOffenseIncarcerated: requireLegalOffenseIncarcerated(formType) }))

export const selectLegalInvestigationClearanceGranted = createSelector(formTypeSelector,
  formType => ({
    requireLegalInvestigationClearanceGranted: requireLegalInvestigationClearanceGranted(formType),
  }))
