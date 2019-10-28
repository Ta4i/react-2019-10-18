import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import Reviews from '../reviews'
import {restaurants} from '../../fixtures.js'

Enzyme.configure({adapter: new Adapter()})

describe('Check: count of reviews in list', function() {
  for (let restaurant of restaurants) {
    const reviews = restaurant.reviews
    it(`restaurant: ${restaurant} (${reviews.length})`, function() {
      const wrapper = mount(<Reviews reviews={reviews} />)
      const count = wrapper.find('[data-automation-name="review"]').length
      expect(reviews.length).toBe(count)
    })
  }
})

// Чтобы тест сделать более реальным, добавил в fixtures признак на закрытость отзывов.
// Поэтому я проверяю что если этот признак есть формы быть не должно, иначе форма должна быть
describe('Check: form has rendered', function() {
  for (let restaurant of restaurants) {
    const reviews = restaurant.reviews
    const reviewsClosed = restaurant.reviewsClosed
    it(`restaurant: ${restaurant} (${reviews.length})`, function() {
      const wrapper = mount(
        <Reviews reviews={reviews} reviewsClosed={reviewsClosed} />
      )
      const countOfForms = wrapper.find(
        'form[data-automation-name="newReview"]'
      ).length
      expect(countOfForms).toBe(reviewsClosed ? 0 : 1)
    })
  }
})
