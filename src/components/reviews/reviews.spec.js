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

  it('should show reviews when they are provided', function() {
    const reviewsData = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={reviewsData} />)
    const amountOfReviews = wrapper.find('div[data-automation-id="REVIEW"]')
      .length
    expect(amountOfReviews).toBeGreaterThan(0)
  })

  it('should show no reviews when data is not provided', function() {
    const reviewsData = []
    const wrapper = mount(<Reviews reviews={reviewsData} />)
    const amountOfReviews = wrapper.find('div[data-automation-id="REVIEW"]')
      .length
    expect(amountOfReviews).toBe(0)
  })
})
