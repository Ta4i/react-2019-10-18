import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'

Enzyme.configure({adapter: new Adapter()})

const wrapper = mount(<Reviews reviews={restaurants[0].reviews} />)

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })
  it('checking rendering with undefined reviews', function() {
    const wrapper = mount(<Reviews reviews={undefined} />)
    expect(wrapper.find('Review[data-automation-id="REVIEW"]')).toHaveLength(0)
  })
  it('checking number of reviews', function() {
    expect(wrapper.find('Review[data-automation-id="REVIEW"]')).toHaveLength(
      restaurants[0].reviews.length
    )
  })
  it('checking review user', () => {
    wrapper
      .find('Review[data-automation-id="REVIEW"]')
      .forEach((item, index) => {
        expect(
          item.find('Typography[data-automation-id="REVIEW-NAME"]').text()
        ).toEqual(restaurants[0].reviews[index].user)
        console.log(restaurants[0].reviews[index].user)
      })
  })
  it('checking review text', () => {
    wrapper
      .find('Review[data-automation-id="REVIEW"]')
      .forEach((item, index) => {
        expect(
          item.find('Typography[data-automation-id="REVIEW-TEXT"]').text()
        ).toEqual(restaurants[0].reviews[index].text)
        console.log(restaurants[0].reviews[index].text)
      })
  })
})
