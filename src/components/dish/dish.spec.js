import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Dish', function() {
  it('show name', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData} />)
    expect(
      wrapper
        .find('h4[data-automation-id="DISH_NAME"]')
        .first()
        .text()
    ).toBe(dishData.name)
  })

  it('should increase amount when clicking on Plus button', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData} />)
    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .first()
      .simulate('click')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('1')
  })

  it('should decrease amount when clicking on Minus button', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData} />)

    // increase counter
    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .first()
      .simulate('click')

    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .first()
      .simulate('click')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('0')

    wrapper
      .find('button[data-automation-id="DECREASE"]')
      .first()
      .simulate('click')
    // should still be 0
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('0')
  })
})
