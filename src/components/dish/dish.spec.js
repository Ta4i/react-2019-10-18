import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Dish from './dish'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

function triggerClickBySelector(wrapper, selector) {
  wrapper
    .find(selector)
    .first()
    .simulate('click')
}

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

  it('when click on Plus button it should increase amount', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData} />)

    triggerClickBySelector(wrapper, 'button[data-automation-id="INCREASE"]')

    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('1')
  })
})

describe('Decrease amount of dish in cart', function() {
  it('Positive value', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData} />)

    triggerClickBySelector(wrapper, 'button[data-automation-id="INCREASE"]')
    triggerClickBySelector(wrapper, 'button[data-automation-id="INCREASE"]')
    triggerClickBySelector(wrapper, 'button[data-automation-id="DECREASE"]')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('1')

    triggerClickBySelector(wrapper, 'button[data-automation-id="DECREASE"]')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('0')
  })

  it('Zero value', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData} />)

    triggerClickBySelector(wrapper, 'button[data-automation-id="DECREASE"]')

    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text()
    ).toBe('0')
  })
})
