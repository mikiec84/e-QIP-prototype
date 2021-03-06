import sectionData from './sectionData'

describe('Retrieving section data', () => {
  it('can get section data', () => {
    const application = {
      Identification: {
        ApplicantName: true,
        Contacts: true,
        OtherNames: true,
        ApplicantBirthDate: true,
        ApplicantBirthPlace: true,
        ApplicantSSN: true,
        Physical: true,
      },
      Financial: {
        Bankruptcy: true,
        Gambling: true,
        Taxes: true,
        Card: true,
        Credit: true,
        Delinquent: true,
        Nonpayment: true,
      },
      History: {
        Residence: true,
        Employment: true,
        Education: true,
        Federal: true,
      },
      Relationships: {
        Marital: true,
        Cohabitants: true,
        People: true,
        Relatives: true,
      },
      Citizenship: {
        Status: true,
        Multiple: true,
        Passports: true,
      },
      Military: {
        Selective: true,
        History: true,
        Disciplinary: true,
        Foreign: true,
      },
      Foreign: {
        Passport: true,
        Contacts: true,
        DirectActivity: true,
        IndirectActivity: true,
        RealEstateActivity: true,
        BenefitActivity: true,
        Support: true,
        Advice: true,
        Family: true,
        Employment: true,
        Ventures: true,
        Conferences: true,
        Contact: true,
        Sponsorship: true,
        Political: true,
        Voting: true,
        Travel: true,
      },
      Substance: {
        DrugUses: true,
        DrugInvolvements: true,
        DrugClearanceUses: true,
        DrugPublicSafetyUses: true,
        PrescriptionUses: true,
        OrderedTreatments: true,
        VoluntaryTreatments: true,
        NegativeImpacts: true,
        OrderedCounselings: true,
        VoluntaryCounselings: true,
        ReceivedCounselings: true,
      },
      Legal: {
        PoliceOffenses: true,
        PoliceOtherOffenses: true,
        PoliceDomesticViolence: true,
        History: true,
        Revoked: true,
        Debarred: true,
        NonCriminalCourtActions: true,
        Unauthorized: true,
        Manipulating: true,
        Unlawful: true,
        TerroristOrganization: true,
        EngagedInTerrorism: true,
        Advocating: true,
        MembershipOverthrow: true,
        MembershipViolence: true,
        ActivitiesToOverthrow: true,
        TerrorismAssociation: true,
      },
      Psychological: {
        Competence: true,
        Consultations: true,
        Hospitalizations: true,
        Diagnoses: true,
        ExistingConditions: true,
      },
    }

    const tests = [
      {
        section: 'identification',
        subsection: 'name',
        application,
      },
      {
        section: 'identification',
        subsection: 'contacts',
        application,
      },
      {
        section: 'identification',
        subsection: 'othernames',
        application,
      },
      {
        section: 'identification',
        subsection: 'birthdate',
        application,
      },
      {
        section: 'identification',
        subsection: 'birthplace',
        application,
      },
      {
        section: 'identification',
        subsection: 'ssn',
        application,
      },
      {
        section: 'identification',
        subsection: 'physical',
        application,
      },
      {
        section: 'financial',
        subsection: 'bankruptcy',
        application,
      },
      {
        section: 'financial',
        subsection: 'gambling',
        application,
      },
      {
        section: 'financial',
        subsection: 'taxes',
        application,
      },
      {
        section: 'financial',
        subsection: 'card',
        application,
      },
      {
        section: 'financial',
        subsection: 'credit',
        application,
      },
      {
        section: 'financial',
        subsection: 'delinquent',
        application,
      },
      {
        section: 'financial',
        subsection: 'nonpayment',
        application,
      },
      {
        section: 'history',
        subsection: 'residence',
        application,
      },
      {
        section: 'history',
        subsection: 'employment',
        application,
      },
      {
        section: 'history',
        subsection: 'education',
        application,
      },
      {
        section: 'history',
        subsection: 'federal',
        application,
      },
      {
        section: 'relationships',
        subsection: 'status/marital',
        application,
      },
      {
        section: 'relationships',
        subsection: 'status/cohabitant',
        application,
      },
      {
        section: 'relationships',
        subsection: 'people',
        application,
      },
      {
        section: 'relationships',
        subsection: 'relatives',
        application,
      },
      {
        section: 'citizenship',
        subsection: 'status',
        application,
      },
      {
        section: 'citizenship',
        subsection: 'multiple',
        application,
      },
      {
        section: 'citizenship',
        subsection: 'passports',
        application,
      },
      {
        section: 'military',
        subsection: 'selective',
        application,
      },
      {
        section: 'military',
        subsection: 'history',
        application,
      },
      {
        section: 'military',
        subsection: 'disciplinary',
        application,
      },
      {
        section: 'military',
        subsection: 'foreign',
        application,
      },
      {
        section: 'foreign',
        subsection: 'passport',
        application,
      },
      {
        section: 'foreign',
        subsection: 'contacts',
        application,
      },
      {
        section: 'foreign',
        subsection: 'activities/direct',
        application,
      },
      {
        section: 'foreign',
        subsection: 'activities/indirect',
        application,
      },
      {
        section: 'foreign',
        subsection: 'activities/realestate',
        application,
      },
      {
        section: 'foreign',
        subsection: 'activities/benefits',
        application,
      },
      {
        section: 'foreign',
        subsection: 'activities/support',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/advice',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/family',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/employment',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/ventures',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/conferences',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/contact',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/sponsorship',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/political',
        application,
      },
      {
        section: 'foreign',
        subsection: 'business/voting',
        application,
      },
      {
        section: 'foreign',
        subsection: 'travel',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/usage',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/purchase',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/clearance',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/publicsafety',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/misuse',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/ordered',
        application,
      },
      {
        section: 'substance',
        subsection: 'drugs/voluntary',
        application,
      },
      {
        section: 'substance',
        subsection: 'alcohol/negative',
        application,
      },
      {
        section: 'substance',
        subsection: 'alcohol/ordered',
        application,
      },
      {
        section: 'substance',
        subsection: 'alcohol/voluntary',
        application,
      },
      {
        section: 'substance',
        subsection: 'alcohol/additional',
        application,
      },
      {
        section: 'legal',
        subsection: 'police/offenses',
        application,
      },
      {
        section: 'legal',
        subsection: 'police/additionaloffenses',
        application,
      },
      {
        section: 'legal',
        subsection: 'police/domesticviolence',
        application,
      },
      {
        section: 'legal',
        subsection: 'investigations/history',
        application,
      },
      {
        section: 'legal',
        subsection: 'investigations/revoked',
        application,
      },
      {
        section: 'legal',
        subsection: 'investigations/debarred',
        application,
      },
      {
        section: 'legal',
        subsection: 'court',
        application,
      },
      {
        section: 'legal',
        subsection: 'technology/unauthorized',
        application,
      },
      {
        section: 'legal',
        subsection: 'technology/manipulating',
        application,
      },
      {
        section: 'legal',
        subsection: 'technology/unlawful',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/terrorist-organization',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/engaged-in-terrorism',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/advocating',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/membership-overthrow',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/membership-violence-or-force',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/activities-to-overthrow',
        application,
      },
      {
        section: 'legal',
        subsection: 'associations/terrorism-association',
        application,
      },
      {
        section: 'psychological',
        subsection: 'competence',
        application,
      },
      {
        section: 'psychological',
        subsection: 'consultations',
        application,
      },
      {
        section: 'psychological',
        subsection: 'hospitalizations',
        application,
      },
      {
        section: 'psychological',
        subsection: 'diagnoses',
        application,
      },
      {
        section: 'psychological',
        subsection: 'conditions',
        application,
      },
    ]

    tests.forEach((test) => {
      const results = sectionData(
        test.section,
        test.subsection,
        test.application
      )
      for (const r of results) {
        if (r.data !== true) {
          console.log(`Failure on ${test.section} and ${test.subsection}`)
        }
        expect(r.data).toBe(true)
      }
    })
  })
})
