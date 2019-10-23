import React from 'react'
import {Comment, Rate} from 'antd'

function Reviews(props) {
  const {reviews} = props
  const reviewsTags = reviews.map(item => (
    <Comment
      key={item.id}
      author={item.user}
      content={
        <div>
          <p>{item.text}</p>
          <div>
            Rating: <Rate disabled allowHalf defaultValue={item.rating} />
          </div>
        </div>
      }
    />
  ))

  return <div>{reviewsTags}</div>
}

export default Reviews
