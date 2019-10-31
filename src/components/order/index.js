import {connect} from 'react-redux'
import Order from './order'

const mapStateToProps = store => ({
  restaurants: store.restaurants,
  orderData: store.cart,
})

export default connect(mapStateToProps)(Order)
