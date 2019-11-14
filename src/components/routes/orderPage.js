import React from 'react'
import {selectOrderedDishes} from '../../store/selectors'
import {connect, useDispatch} from 'react-redux'
import Card from 'antd/es/card'
import Input from 'antd/es/input'
import Button from 'antd/es/button'
import NavLink from 'react-router-dom/NavLink'
import useInput from '../../hooks/use-input'
import {completeOrder} from '../../store/ac'

function OrderPage({orderedDishes}) {
  const {dishes, totalPrice} = orderedDishes
  const [phoneText, setPhoneText, validatePhoneText] = useInput()
  const [addressText, setAddressText, validateAddressText] = useInput()
  const dispatch = useDispatch()
  if (dishes.length === 0) return null
  return (
    <div>
      <Card title="Ваш заказ: ">
        {dishes.map(({dish}) => (
          <Card key={dish.id}>
            <div className="orderedDishName">{dish.name}</div>
            <div className="orderedDishPrice">{dish.price}$</div>
          </Card>
        ))}
        <div>Итого: {totalPrice}$</div>
      </Card>
      <Input
        addonBefore="Ваш телефон: "
        value={phoneText}
        onChange={setPhoneText}
      />
      <Input
        addonBefore="Ваш адрес: "
        value={addressText}
        onChange={setAddressText}
      />
      <NavLink to={`/CompleteOrderPage/${phoneText}/${addressText}`}>
        <Button
          disabled={!validatePhoneText || !validateAddressText}
          onClick={() => {
            dispatch(completeOrder())
          }}
        >
          Заказать
        </Button>
      </NavLink>
    </div>
  )
}

const mapStateToProps = state => ({
  orderedDishes: selectOrderedDishes(state),
})

export default connect(mapStateToProps)(OrderPage)
