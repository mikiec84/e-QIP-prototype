import React from 'react'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import OtherOffenses from './OtherOffenses'
import Location from '../../../Form/Location'

describe('The offense component', () => {
  const mockStore = configureMockStore()
  let createComponent

  beforeEach(() => {
    const store = mockStore()
    createComponent = (expected = {}) =>
      mount(
        <Provider store={store}>
          <OtherOffenses {...expected} />
        </Provider>
      )
  })

  it('no error on empty', () => {
    const expected = {
      name: 'offense',
      HasOtherOffenses: { value: 'No' }
    }
    const component = createComponent(expected)
    expect(component.find('.accordion').length).toBe(0)
  })

  it('selects yes', () => {
    let updates = 0
    const expected = {
      name: 'offense',
      onUpdate: () => {
        updates++
      }
    }
    const component = createComponent(expected)
    component.find('.has-otheroffenses .yes input').simulate('change')
    expect(updates).toBe(1)
  })

  it('clears list', () => {
    let updates = 0
    const expected = {
      name: 'offense',
      onUpdate: values => {
        if (values.List.length === 0) {
          updates++
        }
      },
      List: {
        branch: {
          value: 'No'
        },
        items: [{ Item: {} }]
      }
    }
    const component = createComponent(expected)
    component.find('.has-otheroffenses .no input').simulate('change')
    expect(updates).toBe(1)
  })

  it('populates all fields', () => {
    const expected = {
      name: 'offense',
      HasOtherOffenses: { value: 'Yes' },
      List: {
        branch: {
          value: 'No'
        },
        items: [
          {
            Item: {
              Date: {
                day: '1',
                month: '1',
                year: '2016',
                date: new Date('1/1/2016')
              },
              Description: {
                value: 'Some description'
              },
              InvolvedViolence: { value: 'No' },
              InvolvedFirearms: { value: 'Yes' },
              InvolvedSubstances: { value: 'No' },
              CourtType: 'Felony',
              CourtAddress: {
                country: 'United States',
                street: '1234 Some Rd',
                city: 'Arlington',
                state: 'Virginia',
                zipcode: '22202',
                layout: Location.ADDRESS
              },
              CourtDate: {
                day: '1',
                month: '1',
                year: '2016',
                date: new Date('1/1/2016')
              },
              CourtName: {
                value: 'court name'
              },
              CourtCharge: {
                value: 'Some charge'
              },
              CourtOutcome: {
                value: 'Some outcome'
              },
              WasSentenced: { value: 'Yes' },
              Sentence: {
                AwaitingTrial: { value: 'Yes' },
                AwaitingTrialExplanation: { value: 'Yes' },
                ExceedsYear: { value: 'Yes' },
                Incarcerated: { value: 'Yes' },
                IncarcerationDates: {
                  from: {
                    date: new Date('1/1/2000')
                  },
                  to: {
                    date: new Date('1/1/2004')
                  },
                  present: false
                },
                ProbationDates: {
                  from: {
                    date: new Date('1/1/2000')
                  },
                  to: {
                    date: new Date('1/1/2004')
                  },
                  present: false
                },
                Description: {
                  value: 'Foo'
                }
              }
            }
          }
        ]
      }
    }
    const component = createComponent(expected)
    expect(component.find('.accordion').length).toBe(1)
  })
})
