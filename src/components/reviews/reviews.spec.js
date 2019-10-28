import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import {restaurants} from '../../fixtures'
import Review from './review'
import ReviewForm from '../review-form'

Enzyme.configure({adapter: new Adapter()})

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })

  it('should show the same number of reviews as in data', function() {
    const data = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={data} />)

    expect(wrapper.find(Review)).toHaveLength(data.length)
  })

  it('should render Review form if data is empty', function() {
    const wrapper = mount(<Reviews reviews={[]} />)

    expect(wrapper.find(ReviewForm)).toHaveLength(1)
  })

  it('should render Review form if data is undefined', function() {
    const wrapper = mount(<Reviews />)

    expect(wrapper.find(ReviewForm)).toHaveLength(1)
  })

  it('should render Review form as the last element in container', function() {
    const data = restaurants[0].reviews
    const wrapper = mount(<Reviews reviews={data} />)

    expect(wrapper.find(ReviewForm)).toHaveLength(1)
    expect(
      wrapper.find('div[data-automation-id="REVIEW_CONTAINER"]').children()
    ).toHaveLength(data.length + 1) // reviews + review form
    expect(
      wrapper
        .find('div[data-automation-id="REVIEW_CONTAINER"]')
        .childAt(data.length)
        .getElement()
    ).toEqual(<ReviewForm />)
  })
})
