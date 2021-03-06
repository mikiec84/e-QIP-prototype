import date from '../date'

describe.only('The date validator', () => {
  it('fails if the value is not an object', () => {
    const testData = ''
    expect(date(testData)).toBeTruthy()
  })

  it('fails if the value is not a valid date object', () => {
    const testData = { year: 23, month: 500, day: -1 }
    expect(date(testData)).toBeTruthy()
  })

  it('passes a valid date object', () => {
    const testData = { year: 2010, month: 5, day: 23 }
    expect(date(testData)).toBeNull()
  })

  describe('if year is not required', () => {
    it('passes with just day and month', () => {
      const testData = { month: 5, day: 23 }
      expect(date(testData, { requireYear: false })).toBeNull()
    })
  })

  describe('if month is not required', () => {
    it('passes with just day and year', () => {
      const testData = { year: 2010, day: 23 }
      expect(date(testData, { requireMonth: false })).toBeNull()
    })
  })

  describe('if day is not required', () => {
    it('passes with just year and month', () => {
      const testData = { month: 5, year: 2010 }
      expect(date(testData, { requireDay: false })).toBeNull()
    })
  })
})
