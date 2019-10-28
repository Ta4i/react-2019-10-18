import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })

  it('reviews were sent', function() {
    const reviews = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={reviews} />)
    let numberOfReviews = wrapper.find('div[data-automation-id="REVIEW"]')
      .length
    expect(numberOfReviews).toBe(2)
  })

  it('has no reviews', function() {
    const reviews = []
    const wrapper = mount(<Reviews reviews={reviews} />)
    let numberOfReviews = wrapper.find('div[data-automation-id="REVIEW"]')
      .length
    expect(numberOfReviews).toBe(0)
  })
})
