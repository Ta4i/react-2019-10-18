import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Review from './review'

Enzyme.configure({adapter: new Adapter()})

describe('Review', function() {
  it('show user name', function() {
    const reviewData = {
      id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
      user: 'Antony',
      text: 'Not bad',
      rating: 5,
    }
    const wrapper = mount(<Review review={reviewData} />)
    expect(
      wrapper
        .find('h4[data-automation-id="USER_NAME"]')
        .first()
        .text()
    ).toBe(reviewData.user)
  })
})
