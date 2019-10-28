import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Menu from './index'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    function fetcMenu() {
      setTimeout(() => {
        console.log('asdf')
        done()
      }, 4000)
    }
    mount(<Menu menu={restaurants[0].menu} timeOut={fetcMenu} />)
  })
})
