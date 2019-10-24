import React from 'react'
import {List} from 'antd'

function Reviews(props) {
  return (
    <div>
      <List
        style={{margin: '15px 0'}}
        bordered
        dataSource={props.reviews}
        header={<h3>Reviews</h3>}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              title={<a href="https://ant.design">{item.user}</a>}
              description={item.text}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Reviews
