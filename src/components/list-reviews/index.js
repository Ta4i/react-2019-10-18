import React from 'react'

function ListReviews(props) {
  const {restaurant} = props
  let arrReport = []
  for (let i = 0; i < restaurant.length; i++) {
    arrReport.push(restaurant[i].text)
  }
  const listReviews = arrReport.map(text => <li>{text}</li>)
  return (
    <div>
      <p>Reviews:</p>
      <ol>{listReviews}</ol>
    </div>
  )
}

export default ListReviews
