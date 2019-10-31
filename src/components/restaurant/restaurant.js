import React, {Component} from 'react'
import {Typography} from 'antd'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import Order from '../order'

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
      restaurant: {name, reviews, menu},
      cartAmount,
    } = this.props

    if (this.state.error) {
      return (
        <Typography.Title type="danger">Something went wrong</Typography.Title>
      )
    }

    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        <AverageRating reviews={reviews} />
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
        {cartAmount && <Order menu={menu} />}
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
    reviews: Reviews.propTypes.reviews,
  }),
}

// export default Restaurant

const mapStateToProps = state => ({
  cartAmount: Object.values(state.cart).reduce((acc, val) => acc + val, 0),
})

export default connect(mapStateToProps)(Restaurant)
