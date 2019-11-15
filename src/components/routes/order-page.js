import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Table, Divider, Tag, Button} from 'antd'
import {selectOrderedDishes} from '../../store/selectors'
import {Link} from 'react-router-dom'
import {clearOrderCard} from '../../store/ac'
const {Column, ColumnGroup} = Table

function OrderList() {
  const orderedDishes = useSelector(store => selectOrderedDishes(store))
  const dispatch = useDispatch()
  let totalPice = 0
  const data = orderedDishes.dishes.map((item, i) => {
    totalPice += item.totalDishPrice
    return {
      key: i,
      dish: item.dish.name,
      price: item.dish.price,
      amount: item.amount,
      totalPrice: item.totalDishPrice,
    }
  })
  data.push({dish: 'Total prise: ' + totalPice})
  if (totalPice) {
    return (
      <div>
        <Table dataSource={data}>
          <Column title="Dish" dataIndex="dish" key="dish" />
          <Column title="Price" dataIndex="price" key="price" />
          <Column title="Amount" dataIndex="amount" key="amount" />
          <Column title="Total Price" dataIndex="totalPrice" key="totalPrice" />
        </Table>
        <Link to={'/approveOrder'}>
          <div>
            <Button
              onClick={() => {
                dispatch(clearOrderCard())
              }}
              type="danger"
            >
              Approve the order
            </Button>
          </div>
        </Link>
      </div>
    )
  } else {
    return null
  }
}

export default OrderList
