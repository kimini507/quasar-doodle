/* eslint-disable */
/**
 * @jest-environment jsdom
 */

import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import SearchComponent from 'src/components/ComponentToTest'
import * as All from 'quasar'
const { Quasar, date } = All

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key]
  if (val && val.component && val.component.name != null) {
    object[key] = val
  }
  return object
}, {})

describe('Sample Testing', () => {
  const localVue = createLocalVue()
  localVue.use(Quasar, { components }) // , lang: langEn

  let searchModel = 'a'

  const wrapper = mount(SearchComponent, {
    localVue,
    propsData: {
      search: searchModel
    }
  })

  it('passes the sanity check and creates a wrapper', () => {
    expect(wrapper.isVueInstance()).toBe(true)
  })

  const input = wrapper.find('input')

  it('sets the placeholder as "Search"', () => {
    expect(input.attributes('placeholder')).toBe('Search')
  })

  it('sets the search value as the passed prop', () => {
    expect(wrapper.vm.search).toBe(searchModel)
  })

  it('#emitSearch', () => {
    wrapper.vm.emitSearch()

    expect(wrapper.emitted('search')).toBeTruthy()
  })
})