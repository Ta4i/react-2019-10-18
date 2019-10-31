import React from 'react'
import {List, Tag} from 'antd'
import PropTypes from 'prop-types'

export default function OrderRow(props) {
  const {name, count, price} = props
  return (
    <List.Item>
      {name}
      <Tag color={'red'}>{price} $</Tag>
      <Tag color={'magenta'}>{count} шт.</Tag>
    </List.Item>
  )
}

OrderRow.defautProps = {
  name: 'No desc',
}

OrderRow.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
}
