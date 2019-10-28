import React from 'react'
import Enzyme, {mount} from 'enzyme'
import {restaurants} from '../../fixtures'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import ReviewForm from '../review-form'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })

  it('reviews list should has review item', function() {
    const reviews = restaurants[0].reviews
    const reviewsCount = reviews.length
    const wrapper = mount(<Reviews reviews={reviews} />)
    expect(wrapper.find('[data-automation-id="REVIEW_ITEM"]').length).toBe(
      reviewsCount
    )
  })

  it('reviews list should has review form', function() {
    //const reviews = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={undefined} />)
    expect(wrapper.find('[data-automation-id="REVIEW_FORM"]').length).toBe(1)
  })
})
