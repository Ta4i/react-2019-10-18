import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Menu from '../menu/'
import {restaurants} from '../../fixtures.js'

Enzyme.configure({adapter: new Adapter()})

describe('Check fetch functions', function() {
  it('dishes loading from server', function(done) {
    const menuData = restaurants[0].menu
    const wrapper = mount(<Menu menu={menuData} fetchMenuFromServer={done} />)
  })
})
