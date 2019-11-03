import React from 'react'
import {mount} from 'enzyme'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })

  it('should render all reviews from data', function() {
    const [{reviews}] = restaurants
    const wrapper = mount(<Reviews reviews={reviews} />)
    expect(
      wrapper.find(`div[data-automation-id="REVIEW_${reviews[0].id}"]`).length
    ).toEqual(1)
    expect(
      wrapper.find(`div[data-automation-id="REVIEW_${reviews[1].id}"]`).length
    ).toEqual(1)
  })
})
