import React from 'react'
import Dish from './dish'
import {restaurants} from '../../fixtures'
import {mount} from 'enzyme'


describe('Dish', function() {
  it('show name', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData}/>)
    expect(
      wrapper
        .find('h4[data-automation-id="DISH_NAME"]')
        .first()
        .text(),
    ).toBe(dishData.name)
  })

  it('when click on Plus button it should increase amount', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData}/>)
    wrapper
      .find('button[data-automation-id="INCREASE"]')
      .first()
      .simulate('click')
    expect(
      wrapper
        .find('div[data-automation-id="AMOUNT"]')
        .first()
        .text(),
    ).toBe('1')
  })

  it('should not be less than 0 while decreasing', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData}/>)

    const amount = wrapper.find('div[data-automation-id="AMOUNT"]')
    const decreaseButton = wrapper.find('button[data-automation-id="DECREASE"]')

    expect(amount.text()).toBe('0')
    decreaseButton.simulate('click')
    expect(amount.text()).toBe('0')
  })

  it('should be decreasing by 1 on every click', function() {
    const dishData = restaurants[0].menu[0]
    const wrapper = mount(<Dish dish={dishData}/>)

    const amount = wrapper.find('div[data-automation-id="AMOUNT"]')
    const increaseButton = wrapper.find('button[data-automation-id="INCREASE"]')
    const decreaseButton = wrapper.find('button[data-automation-id="DECREASE"]')

    //todo непонятно как правильно задать начальное значение без 'click' в случае фкнкционального компонента
    increaseButton.simulate('click')
    increaseButton.simulate('click')
    expect(amount.text()).toBe('2')

    decreaseButton.simulate('click')
    expect(amount.text()).toBe('1')
    decreaseButton.simulate('click')
    expect(amount.text()).toBe('0')
  })
})
