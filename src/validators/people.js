import PersonValidator from './person'
import { validAccordion } from './helpers'
import {
  extractDate,
  decimalAdjust,
  rangeSorter,
  julian,
  findPercentage,
  today,
  daysAgo,
  julianNow
} from '../components/Section/History/dateranges'

const minimumYears = 7
const minimumPeople = 3

export default class PeopleValidator {
  constructor(data = {}) {
    this.list = data.List || {}
  }

  validCount() {
    return ((this.list || {}).items || []).reduce((acc, cur) => {
      const valid = new PersonValidator(cur.Item).isValid()
      return valid ? acc + 1 : acc
    }, 0)
  }

  validYearRange() {
    const julianMax = julian(daysAgo(today, 365 * minimumYears))

    // Collect all the valid date ranges
    let dates = []
    for (const item of this.list.items) {
      if (!item || !item.Item || !item.Item.Dates) {
        continue
      }

      const knownDates = item.Item.Dates
      const kfrom = extractDate(knownDates.from)
      const kto = extractDate(knownDates.to)
      const present = (knownDates || {}).present || false
      if (kfrom && (present || kto)) {
        dates.push(item.Item.Dates)
      }
    }

    const ranges = dates.sort(rangeSorter).map(dates => {
      let left = 0
      let width = 0
      const dfrom = extractDate(dates.from)
      const dto = dates.present === true ? new Date() : extractDate(dates.to)

      if (dfrom && dto) {
        const from = julian(dfrom)
        const to = julian(dto)

        if (from >= julianMax || to >= julianMax) {
          // Meat of the calculations into percentages
          let right = findPercentage(julianNow, julianMax, to)
          left = findPercentage(julianNow, julianMax, from)
          width = Math.abs(right - left)

          // Check boundaries
          if (width < 0) {
            width = 0
          }

          if (width > 100) {
            width -= Math.abs(left)
          }

          if (left < 0) {
            left = 0
          }
        }
      }

      // Add the range to the collection
      return {
        left: left,
        width: decimalAdjust('round', width, -2),
        dates: dates
      }
    })

    const sum = ranges.reduce((a, b) => a + b.width, 0)
    return (
      Math.min(
        decimalAdjust('floor', minimumYears * (sum / 100), 0),
        minimumYears
      ) >= minimumYears
    )
  }

  isValid() {
    if ((this.list.branch || {}).value !== 'No') {
      return false
    }

    const valid = validAccordion(this.list, item => {
      return new PersonValidator(item).isValid()
    })

    return valid && this.validCount() >= minimumPeople && this.validYearRange()
  }
}
