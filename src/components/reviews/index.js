import React from 'react'
import {List} from 'antd'
import './index.css'

function Reviews(props) {
  const {data} = props
  return (
    <List
      rowKey={item => item.id}
      header="Отзывы"
      dataSource={data}
      bordered
      renderItem={item => (
        <div class="review">
          <div class="user">{item.user}</div>
          <div>{item.text}</div>
        </div>
      )}
    />
  )
}

export default Reviews
