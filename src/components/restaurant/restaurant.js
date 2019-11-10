import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'
import {connect} from 'react-redux'
import {fetchReviews} from '../../store/ac'
import {selectReviewsLoading, selectReviewsLoaded} from '../../store/selectors'

class Restaurant extends Component {
  state = {
    error: null,
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
    })
  }

  componentDidMount() {
    this.props.fetchReviews &&
      !this.props.restaurantsLoading &&
      !this.props.restaurantsLoaded &&
      this.props.fetchReviews(this.props.restaurant.id)
  }

  render() {
    const {
      restaurant: {name, menu, id},
    } = this.props

    if (this.state.error) {
      return (
        <Typography.Title type="danger">Something went wrong</Typography.Title>
      )
    }

    const reviewsLoader = this.props.reviewsLoading || !this.props.reviewsLoaded

    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        {reviewsLoader ? <h2>Loading...</h2> : <AverageRating id={id} />}
        <div className={styles.col}>
          <Menu menu={menu} />
        </div>
        {reviewsLoader ? <h2>Loading...</h2> : <Reviews id={id} />}
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

const mapStateToProps = (state, ownProps) => ({
  reviewsLoading: selectReviewsLoading(state, ownProps),
  reviewsLoaded: selectReviewsLoaded(state, ownProps),
})

const mapDispatchToProps = {
  fetchReviews,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Restaurant)
