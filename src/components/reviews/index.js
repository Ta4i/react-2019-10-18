import React from 'react'
import {Comment} from 'antd'
import './style.css'

function Reviews(props) {
  const {restaurant} = props

  const listItems = restaurant.reviews.map(review => (
    <li key={review.id}>
      <Comment content={review['text']} author={review['user']} />
    </li>
  ))

  return <ul className="reviews-list">{listItems}</ul>
}

export default Reviews
