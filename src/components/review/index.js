import React from 'react'
import {Card, Typography} from 'antd'
import PropTypes from 'prop-types'
const {Text} = Typography

function Review(props) {
  const {review} = props

  return (
    <div>
      <Card title={review.user}>
        <Text>"Description: "{review.text}</Text>
        <br />
        <Text>"Rate: "{review.rating}</Text>
      </Card>
    </div>
  )
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
}
export default Review
