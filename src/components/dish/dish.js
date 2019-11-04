import React, {useEffect} from 'react'
import {Card, Typography, Button, Row, Col} from 'antd'
import amount from '../../decorators/amount'
import styles from './dish.module.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addToCart} from '../../store/ac'
import {removeFromCart} from '../../store/ac'

function Dish(props) {
  const {
    dish,

    // from decorator
    amount,
    increase,
    decrease,
  } = props

  return (
    <Card className={styles.productDetailedOrderCard}>
      <Row type="flex" justify="space-between">
        <Col xs={16} md={16} lg={20} align="left">
          <Typography.Title
            level={4}
            className={styles.title}
            data-automation-id="DISH_NAME"
          >
            {dish.name}
          </Typography.Title>
          <Typography.Paragraph className={styles.description}>
            {dish.ingredients.join(', ')}
          </Typography.Paragraph>
          <div className={styles.price}>{dish.price} $</div>
        </Col>
        <Col xs={8} md={6} lg={4} align="right">
          <div className={styles.counter}>
            <div className={styles.count} data-automation-id="AMOUNT">
              {amount}
            </div>
            <Button.Group>
              <Button
                className={styles.button}
                icon="minus"
                onClick={() => decrease(dish.id)}
                data-automation-id="DECREASE"
              />
              <Button
                className={styles.button}
                icon="plus"
                onClick={() => increase(dish.id)}
                data-automation-id="INCREASE"
              />
            </Button.Group>
          </div>
        </Col>
      </Row>
    </Card>
  )
}

Dish.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
}

const mapStateToProps = (store, ownProps) => {
  return {
    amount: store.cart[ownProps.dish.id] || 0,
  }
}

const mapDispatchToProps = dispatch => ({
  increase: id => dispatch(addToCart(id)),
  decrease: id => dispatch(removeFromCart(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dish)
export {Dish as DishComponent}
