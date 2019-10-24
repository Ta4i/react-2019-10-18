import React, {Component} from 'react'
import {Typography, Rate} from 'antd'
import Menu from '../menu'
import ReviewForm from '../review-form'
import ReviewList from '../reviews-list'
import './index.sass'
class Restaurant extends Component {
  render() {
    const {restaurant} = this.props
    const style = {
      display: 'flex',
      alignItems: 'center',
    }
    let reviewsCount = restaurant.reviews.length
    // let sum = restaurant.reviews.reduce((prev, current) => current.rating += prev.rating)   не понятно почему такой результат https://monosnap.com/file/k5KyyF6h15nqg8gvY2EMRoWseqL3lE

    let sum = 0
    restaurant.reviews.forEach(element => (sum += element.rating))
    const avgReviewValue = Math.round(sum / reviewsCount / 0.5) * 0.5

    return (
      <div>
        <div style={style}>
          <Typography.Title className="title title--lg" level={2}>
            {restaurant.name}
          </Typography.Title>
          <Rate allowHalf value={avgReviewValue} />
        </div>
        <ReviewList reviews={restaurant.reviews} />
        <ReviewForm />
        <Menu menu={restaurant.menu} />
      </div>
    )
  }
}

export default Restaurant
