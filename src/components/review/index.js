import React from 'react'

const {Text} = Typography

function Review(props) {
  const {review} = props

  return (
    <div>
      <Card title={review.user}>
        <Text>{review.text}</Text>
        <br />
        <Text>${review.rating}</Text>
      </Card>
    </div>
  )
}

export default Review
