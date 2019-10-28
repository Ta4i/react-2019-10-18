import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('show number of reviews', function() {
    const reviewsArr = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={reviewsArr} />)

    expect(wrapper.find('div[data-automation-id="REVIEW"]').length).toBe(
      reviewsArr.length
    )
  })
  it('Check first review userName', function() {
    const reviewsArr = restaurants[0].reviews
    const firstReviewName = restaurants[0].reviews[0].user
    const wrapper = mount(<Reviews reviews={reviewsArr} />)
    expect(
      wrapper
        .find('h4[data-automation-id="USER_NAME"]')
        .first()
        .text()
    ).toBe(firstReviewName)
  })
  it('Check first review text', function() {
    const reviewsArr = restaurants[0].reviews
    const firstReviewText = restaurants[0].reviews[0].text
    const wrapper = mount(<Reviews reviews={reviewsArr} />)
    expect(
      wrapper
        .find('span[data-automation-id="REVIEW_TEXT"]')
        .first()
        .text()
    ).toBe(firstReviewText)
  })
})
