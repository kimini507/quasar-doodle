/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { createLocalVue, shallowMount, mount } from '@vue/test-utils'
import CrmSearchForm from 'src/components/CrmSearchForm'
import { Quasar, QInput, debounce } from 'quasar'
import flushPromises from 'flush-promises'

let wrapper = null

const searchString = 'my search criteria'
const localVue = createLocalVue()

localVue.use(Quasar, {
  components: {
    QInput
  }
})

beforeEach(() => {
  wrapper = mount(CrmSearchForm, {
    localVue,
    propsData: {
      search: searchString,
      placeholder: 'Search Area'
    }
  })
})

afterEach(() => {
  wrapper.destroy()
})

describe('CrmSearchForm', () => {
  it('renders the component', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders a search input', () => {
    expect(wrapper.find('input.search-form__input').exists()).toBeTruthy()
  })

  it('sets the placeholder of the search input', () => {
    expect(wrapper.find('input.search-form__input').attributes('placeholder')).toBe('Search Area')
  })

  it('emits search', () => {
    wrapper.vm.emitSearch(searchString)

    expect(wrapper.emitted().search).toBeTruthy()
    expect(wrapper.emitted().search[0]).toEqual([searchString])
  })

  it('emits search on update of value', () => {
    wrapper.find('input.search-form__input').setValue('updated value')

    debounce(() => {
      expect(wrapper.emitted().search).toBeTruthy()
      expect(wrapper.emitted().search[0]).toEqual(['updated value'])
    }, 300)
  })

  it('emits search on click of button', () => {
    wrapper.find('button.search-form__submit-button').trigger('click')

    expect(wrapper.emitted().search).toBeTruthy()
    expect(wrapper.emitted().search[0]).toEqual([searchString])
  })
})
