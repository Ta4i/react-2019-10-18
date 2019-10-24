import React, {Component} from 'react'
import {Comment, Rate} from 'antd'

class Reviews extends Component {
  render() {
    const {reviews} = this.props
    return (
      <div>
        {reviews.map(review => (
          <Comment
            author={review.user}
            content={
              <div>
                <Rate default defaultValue={review.rating} />
                <p>{review.text}</p>
              </div>
            }
            key={review.id}
          />
        ))}
      </div>
    )
  }
}
export default Reviews
