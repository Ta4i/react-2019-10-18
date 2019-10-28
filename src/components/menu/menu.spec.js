import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Menu from './menu'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('show call someTestFunc if it is provided', function(done) {
    mount(
      <Menu
        menu={restaurants[0].menu}
        someTestFunc={() => setTimeout(() => done(), 2000)}
      />
    )
  })
})
