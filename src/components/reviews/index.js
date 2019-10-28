<<<<<<< HEAD
import React from 'react'
import {List, Avatar} from 'antd'

function Reviews(props) {
  const {reviewsList} = props

  return (
    <div>
      Reviews:
      <List
        itemLayout="horizontal"
        dataSource={reviewsList}
        renderItem={({user, text, rating}) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <span>
                  {user}[{rating}*]
                </span>
              }
              description={text}
            />
          </List.Item>
        )}
      />
    </div>
  )
}

export default Reviews
=======
export {default} from './reviews'
>>>>>>> upstream/master
