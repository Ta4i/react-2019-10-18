import React from 'react'
import {Comment, Tooltip, List} from 'antd'

function Review(props) {
  const {review} = props

  const data = [
    {
      author: review.user,
      avatar:
        'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
      content: <p>{review.text}</p>,
    },
  ]

  return (
    <div>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
            />
          </li>
        )}
      />
    </div>
  )
}

export default Review
