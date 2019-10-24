import React from 'react'

function Reviews(props) {
  const reviews = props.reviews || []
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map((it, index) => {
        return <ul key={index}>{it.text}</ul>
      })}
    </div>
  )
}

export default Reviews
