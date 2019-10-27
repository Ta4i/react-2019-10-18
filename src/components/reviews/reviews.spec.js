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

  it('Check count of reviews', function() {
    const reviewsData = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={reviewsData} />)
    expect(wrapper.find('div[data-automation-id="REVIEW_ITEM"]').length).toBe(
      reviewsData.length
    )
  })

  it('Check having proper warning for no content case', function() {
    const reviewsData = []
    const wrapper = mount(<Reviews reviews={reviewsData} />)
    expect(
      wrapper.find('div[data-automation-id="REVIEW_NO_CONTENT_MSG"]').length
    ).toBe(1)
  })
})
