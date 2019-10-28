import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Reviews from './reviews'

Enzyme.configure({adapter: new Adapter()})

const data = [
  {
    id: '123',
    user: 'Ivan',
    text: 'comment',
    rating: 3,
  },
]

describe('Reviews', function() {
  it('show call fetchReviews if it is provided', function(done) {
    mount(<Reviews reviews={[]} fetchReviews={() => done()} />)
  })

  it('should recive correct props', function() {
    const wrapper = mount(<Reviews reviews={data} />)
    expect(wrapper.props()).toMatchObject({reviews: data})
  })
})
