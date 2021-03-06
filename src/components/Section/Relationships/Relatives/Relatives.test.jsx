import React from 'react'
import { mount } from 'enzyme'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'

import i18n from 'util/i18n'

import { Relatives } from './Relatives'

describe('The relatives component', () => {
  const mockStore = configureMockStore()
  const defaultAppState = {
    application: {
      AddressBooks: {},
    },
  }
  let createComponent

  beforeEach(() => {
    const store = mockStore(defaultAppState)
    createComponent = (expected = {}) => (
      mount(
        <Provider store={store}>
          <Relatives {...expected} />
        </Provider>
      )
    )
  })

  it('no error on empty', () => {
    const expected = {
      name: 'relatives',
    }

    const component = mount(<Relatives {...expected} />)
    expect(component.find('.accordion').length).toEqual(1)
  })

  it('triggers updates when changing values', () => {
    const expected = {
      name: 'relatives',
      List: {
        items: [{ Item: { Relation: { value: 'Mother' } } }],
      },
      onUpdate: jest.fn(),
    }
    const component = createComponent(expected)
    component.find({ type: 'radio', value: 'Mother' }).simulate('change')
    component
      .find('.relative-name .first input')
      .simulate('change', { target: { name: 'first', value: 'The name' } })
    component
      .find('.relative-name .first input')
      .simulate('change', { target: { name: 'first', value: '123123123' } })
    expect(expected.onUpdate.mock.calls.length).toEqual(4)
  })

  const relativeDatesSetup = {
    name: 'relatives',
    applicantBirthdate: {
      estimated: false,
      day: '1',
      month: '1',
      name: 'birthdate',
      year: '1970',
    },
    List: {
      items: [
        {
          Item: {
            Birthdate: {
              estimated: false,
              day: '1',
              month: '1',
              name: 'Birthdate',
              year: '1980',
            },
            Citizenship: {
              value: ['Germany'],
            },
            IsDeceased: {
              value: 'No',
            },
            FirstContact: {
              estimated: false,
              day: '1',
              month: '1',
              name: 'FirstContact',
              year: '1990',
            },
          },
          open: true,
        },
      ],
    },
  }

  describe('handles foreign relative dates', () => {
    it('with good data - date first contacted is after applicant and relative DOB', () => {
      const props = {
        valid: true,
      }

      const component = createComponent(props)
      expect(
        component
          .find('.error-messages [data-i18n="error.date.min"]')
          .children().length
      ).toEqual(0)
    })

    it('with bad data - date first contacted is before applicant and relative DOB', () => {
      const props = {
        List: {
          items: [
            {
              Item: {
                ...relativeDatesSetup.List.items[0].Item,
                FirstContact: {
                  estimated: false,
                  day: '1',
                  month: '1',
                  name: 'FirstContact',
                  year: '1960',
                },
              },
            },
          ],
        },
        valid: false,
      }

      const component = createComponent(props)
      expect(
        component.find('.error-messages [data-i18n="error.date.min"]').text()
      ).toEqual(
        `${i18n.t('error.date.min.title')}${i18n.t('error.date.min.message')}`
      )
    })
  })
})
