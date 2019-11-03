import React from 'react'
import {Table} from 'antd'
import PropTypes from 'prop-types'
import columnsSchema from './columns-schema'

function OrderTable({data}) {
  const totalAmount = data.reduce((sum, current) => current.totalPrice + sum, 0)
  const footer = () => <h3>The total to be paid: ${totalAmount}</h3>

  return (
    <Table
      columns={columnsSchema}
      dataSource={data}
      pagination={false}
      bordered
      footer={footer}
    />
  )
}

OrderTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default OrderTable
