import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  onReviewSubmit(review) {
    console.log('works here')

    this.props.submitReview(review, this.props.restaurant.id)
  }

  render() {
    const {
      restaurant: {name, reviews, menu},
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
        <div className={styles.col}>
          <Menu menu={menu} />
        </div>
        <Reviews
          onReviewSubmit={this.onReviewSubmit.bind(this)}
          reviews={reviews}
        />
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
    reviews: PropTypes.arrayOf(PropTypes.string),
  }),
}

// const mapStateToProps = (state, ownProps) => {
//   return {

//   }
// }

const mapDispatchToProps = dispatch => ({
  submitReview: (review, restaurantId) => {
    dispatch(addReview(review, restaurantId))
  },
})

export default connect(
  null,
  mapDispatchToProps
)(Restaurant)
