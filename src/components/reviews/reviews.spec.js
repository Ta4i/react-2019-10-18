import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'
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
  it('checking review user and text', () => {
    wrapper.find('Review[data-automation-id="REVIEW"]').forEach((node, i) => {
      expect(
        node.find('Typography[data-automation-id="REVIEW-NAME"]').text()
      ).toEqual(restaurants[0].reviews[i].user)
      expect(
        node.find('Typography[data-automation-id="REVIEW-TEXT"]').text()
      ).toEqual(restaurants[0].reviews[i].text)
      console.log(restaurants[0].reviews[i].user)
      console.log(restaurants[0].reviews[i].text)
    })
  })
})
