import {React} from 'react'
import {connect} from 'react-redux'
import {decrement, increment} from '../../store/ac'
import {Order} from './index'

function OrderList(props) {
  const list = props.orderList
  return (
    <div>
      {list.map(item => (
        <Order name={item.name} cost={item.cost} amount={item.amount} />
      ))}
    </div>
  )
}

const mapStateToProps = store => {
  return {
    orderList: store.cart,
  }
}

export default connect(mapStateToProps)(OrderList)
