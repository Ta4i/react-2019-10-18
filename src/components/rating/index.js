import React from 'react'
import {Rate} from 'antd'

function Rating(props) {
  return <Rate disabled defaultValue={props.number} />
}

export default Rating
