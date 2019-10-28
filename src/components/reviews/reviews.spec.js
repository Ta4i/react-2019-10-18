import React from 'react'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'
import {mount} from 'enzyme'

describe('Reviews', function() {

  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()}/>)
  })

  it('should reviews be rendered', function() {
    const {reviews} = restaurants[0]
    const wrapper = mount(<Reviews reviews={reviews}/>)
    expect(wrapper.exists('[data-automation-id="5909796d-5030-4e36-adec-68b8f9ec2d96"]')).toBe(true)
    expect(wrapper.exists('[data-automation-id="429dea85-11dd-4054-a31e-c60c92e17255"]')).toBe(true)
  })

})
