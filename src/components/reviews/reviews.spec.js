import React from 'react'
import Enzyme, {mount, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'
import Review from './review'
import ReviewForm from '../review-form'

Enzyme.configure({adapter: new Adapter()})

const testData = {
  noReviews: [],
  threeReviews: [
    {
      id: '01',
      user: 'Antony',
      text: 'Not bad',
      rating: 5,
    },
    {
      id: '02',
      user: 'Antony',
      text: 'Not bad',
      rating: 5,
    },
    {
      id: '03',
      user: 'Antony',
      text: 'Not bad',
      rating: 5,
    },
  ],
}

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })

  it('should render 0 reviews when gets array with length = 0', function() {
    expect(
      mount(<Reviews reviews={testData.noReviews} />).find(Review).length
    ).toBe(0)
  })

  it('should render 3 reviews when gets array with 3 reviews', function() {
    expect(
      mount(<Reviews reviews={testData.threeReviews} />).find(Review).length
    ).toBe(3)
  })

  it('should show review form', function() {
    expect(shallow(<Reviews />).contains(<ReviewForm />)).toBe(true)
  })
})
