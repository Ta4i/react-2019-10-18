import React from 'react'
import {Comment, Rate} from 'antd'

function Reviews(props) {
  const {reviews} = props
  const reviewsTags = reviews.map(item => (
    <Comment
      author={item.user}
      content={
        <div>
          <p>{item.text}</p>
          <p>
            Rating: <Rate disabled allowHalf defaultValue={item.rating} />
          </p>
        </div>
      }
    />
  ))

  return <div>{reviewsTags}</div>
}

export default Reviews
