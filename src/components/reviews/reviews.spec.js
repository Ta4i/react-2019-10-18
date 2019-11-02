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
  const review = restaurants[0].reviews[0]
  const wrapper = mount(<Reviews reviews={review} />)
  it('check review.user', function() {
    expect(
      wrapper
        .find('h4[data-automation-id="REVIEW_USER"]')
        .first()
        .text()
    ).toBe(review.user)
  })
  it('check if review.text', function() {
    expect(
      wrapper
        .find('span[data-automation-id="REVIEW_TEXT"]')
        .first()
        .text()
    ).toBe(review.user)
  })
})
