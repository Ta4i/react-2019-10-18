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

  it('check reviews count', function() {
    const reviews = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={reviews} />)

    expect(wrapper.find('[data-automation-name="REVIEW"]').length).toBe(
      reviews.length
    )
  })

  it('check first review fields values', function() {
    const reviews = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={reviews} />)
    const reviewText = wrapper
      .find(
        '[data-automation-name="REVIEW"] [data-automation-name="REVIEW_TEXT"]'
      )
      .first()
      .text()
    const reviewAuthorName = wrapper
      .find(
        '[data-automation-name="REVIEW"] [data-automation-name="REVIEW_AUTHOR_NAME"]'
      )
      .first()
      .text()

    expect(reviewText).toBe(reviews[0].text)
    expect(reviewAuthorName).toBe(reviews[0].user)
  })
})
