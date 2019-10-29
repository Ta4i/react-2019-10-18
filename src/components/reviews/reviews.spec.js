import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  const {user, text} = restaurants[0].reviews[0]
  const wrapper = mount(<Reviews reviews={restaurants[0].reviews} />)

  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })
  it('check if review.user prop is being presented in a review', function() {
    expect(
      wrapper
        .find('h4[data-automation-id="REVIEW_USER"]')
        .first()
        .text()
    ).toBe(user)
  })
  it('check if review.text prop is being presented in a review', function() {
    expect(
      wrapper
        .find('span[data-automation-id="REVIEW_TEXT"]')
        .first()
        .text()
    ).toBe(text)
  })
})
