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

  const [{reviews: actualReviews}] = restaurants
  const wrapper = mount(<Reviews reviews={actualReviews} />)
  const expectedReviews = wrapper.find('[data-automation-id="REVIEWS"]')

  it('assert is array', function() {
    expect.arrayContaining(expectedReviews)
  })

  it('assert is reviews count equals 2', function() {
    expect(expectedReviews.length).toBe(2)
  })

  it('assert users name contains in reviews', function() {
    expectedReviews.forEach((item, index) => {
      expect(item.find('Title').text()).toBe(actualReviews[index].user)
    })
  })

  it('assert text contains in reviews', function() {
    expectedReviews.forEach((item, index) => {
      expect(item.find('Text').text()).toBe(actualReviews[index].text)
    })
  })
})
