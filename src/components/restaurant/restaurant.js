import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import Order from '../order'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'

import styles from './restaurant.module.css'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  render() {
    const {
      restaurant: {name, menu, id, reviews},
    } = this.props

    if (this.state.error) {
      return (
        <Typography.Title type="danger">Something went wrong</Typography.Title>
      )
    }

    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        <AverageRating reviewsIdArr={reviews} />

        <div className={styles.col}>
          <Menu menu={menu} />
        </div>

        <Reviews reviewsIdArr={reviews} />
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
    image: PropTypes.string.isRequired,
    menu: Menu.propTypes.menu,
  }),
}

const mapStateToProps = (store, ownProps) => {
  return {
    carts: store.cart,
  }
}

export default connect(mapStateToProps)(Restaurant)

//export default Restaurant
