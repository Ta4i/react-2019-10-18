import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import styles from './restaurant.module.css'
import {createSelectReviewsEntitiesByRestaurant} from '../../store/selectors/reviews-selector'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

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
      restaurant: {name, menu, id},
      reviewEntities,
    } = this.props

    if (this.state.error) {
      return (
        <Typography.Title type="danger">Something went wrong</Typography.Title>
      )
    }

    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        <AverageRating reviews={reviewEntities} />
        <div className={styles.col}>
          <Menu menu={menu} />
        </div>
        <Reviews reviews={reviewEntities} restaurantId={id} />
      </div>
    )
  }
}

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
    menu: PropTypes.arrayOf(PropTypes.string),
    name: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.string),
  }),
}

const createMapStateToProps = () => {
  const selectReviewsByRestaurant = createSelectReviewsEntitiesByRestaurant()
  return (state, props) => {
    return {
      reviewEntities: selectReviewsByRestaurant(state, props),
    }
  }
}

export default connect(createMapStateToProps)(Restaurant)
