import React, {Component} from 'react'
import {Typography} from 'antd'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import Menu from '../menu'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'
import {fetchUsers} from '../../store/ac'
import {connect} from 'react-redux'

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
    this.props.fetchUsers()
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

    return (
      <div>
        <Typography.Title level={2}>{name}</Typography.Title>
        <AverageRating id={id} />
        <div className={styles.col}>
          <Menu menu={menu} />
        </div>
        <Reviews id={id} />
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

const mapDispatchToProps = {
  fetchUsers,
}

export default connect(
  null,
  mapDispatchToProps
)(Restaurant)
