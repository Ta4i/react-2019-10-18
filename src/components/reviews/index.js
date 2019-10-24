import React from 'react'
import {List} from 'antd'

function Reviews(props) {
  const {data} = props
  return (
    <List
      rowKey={item => item.id}
      header="Отзывы"
      dataSource={data}
      bordered
      renderItem={item => (
        <div className="review">
          <div className="user">{item.user}</div>
          <div>{item.text}</div>
        </div>
      )}
    />
  )
}

export default Reviews
