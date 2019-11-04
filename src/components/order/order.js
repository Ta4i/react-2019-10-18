import React, {Component} from 'react'
import {Table} from 'antd'
import {connect} from 'react-redux'

class Order extends Component {
  transformObject(obj) {
    return Object.keys(obj).map(item => {
      return {
        name: obj[item].name,
        number: obj[item].number,
        price: obj[item].price,
      }
    })
  }
  render() {
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
      },
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
      },
    ]
    const data = this.props.dataOrder
    return <Table columns={columns} dataSource={this.transformObject(data)} />
  }
}

const mapStateToProps = (state, ownProps) => ({
  dataOrder: state.order,
})

export default connect(mapStateToProps)(Order)
