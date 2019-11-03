import React from 'react'
import {mount} from 'enzyme'
import Order from './order'
import {restaurants} from '../../fixtures'

describe('Order', function() {
  it('show dish name', function() {
    const menuData = restaurants[0].menu
    const wrapper = mount(<Order menu={menuData} />)
    expect(
      wrapper
        .find('div[data-automation-id="DISH_NAME"]')
        .first()
        .text()
    ).toBe(menuData[0].name)
  })

  it('show dish count', function() {
    const menuData = restaurants[0].menu
    const wrapper = mount(<Order menu={menuData} />)
    expect(
      wrapper
        .find('div[data-automation-id="DISH_COUNT"]')
        .first()
        .text()
    ).toBe(2)
  })

  it('show dish cost', function() {
    const menuData = restaurants[0].menu
    const wrapper = mount(<Order menu={menuData} />)
    expect(
      wrapper
        .find('div[data-automation-id="DISH_COST"]')
        .first()
        .text()
    ).toBe(menuData[0].price * 2)
  })

  it('show dish totalCost', function() {
    const menuData = restaurants[0].menu
    const wrapper = mount(<Order menu={menuData} />)
    expect(
      wrapper
        .find('div[data-automation-id="DISH_TOTALCOST"]')
        .first()
        .text()
    ).toBe(menuData[0].price * 2 + menuData[1].price)
  })
})
