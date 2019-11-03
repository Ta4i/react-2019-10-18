import React from 'react'
import {Typography, Row, Col} from 'antd'
import {DishComponent} from '../dish'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {map} from 'lodash'
import styles from './order.module.css'

function Order(props) {
  const {cart, menu} = props
  let totalCost = 0

  if (!Object.keys(cart).length) {
    return null
  }

  return (
    <Row type="flex" justify="center" gutter={{xs: 8, sm: 16, md: 24}}>
      <Col xs={24} md={16}>
        <Typography.Title level={4} className={styles.title}>
          Ваш заказ:
        </Typography.Title>
        {map(cart, (item, key) => {
          const name = menu.find(dish => dish.id === key).name
          const count = cart[key]
          const cost = menu.find(dish => dish.id === key).price * count
          totalCost += cost
          return (
            <div className={styles.dish} key={key}>
              <Typography.Paragraph
                className={styles.dishName}
                data-automation-id="DISH_NAME"
              >
                Наименование: {name}
              </Typography.Paragraph>
              <Typography.Paragraph
                className={styles.dishInfo}
                data-automation-id="DISH_COUNT"
              >
                Кол-во: {count}
              </Typography.Paragraph>
              <Typography.Paragraph
                className={styles.dishInfo}
                data-automation-id="DISH_COST"
              >
                Стоимость: {cost} $
              </Typography.Paragraph>
            </div>
          )
        })}
        <Typography.Paragraph
          className={styles.totalCost}
          data-automation-id="DISH_TOTALCOST"
        >
          Стоимость заказа: {totalCost} $
        </Typography.Paragraph>
      </Col>
    </Row>
  )
}

Order.propTypes = {
  menu: PropTypes.arrayOf(DishComponent.propTypes.dish).isRequired,
}

const mapStateToProps = store => {
  return {
    cart: store.cart,
  }
}

export default connect(mapStateToProps)(Order)
