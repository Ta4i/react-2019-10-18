import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'
import {connect} from 'react-redux'
import {selectRestaurant} from '../../store/selectors'
import {NavLink, Route} from 'react-router-dom'

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
      id,
      restaurant: {name, menu},
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
        <div style={{textAlign: 'center', padding: '6px'}}>
          <NavLink
            to={`/restaurant/${id}/menu`}
            activeStyle={{color: 'red'}}
            className={styles.submenu}
          >
            Menu
          </NavLink>
          <NavLink
            to={`/restaurant/${id}/reviews`}
            activeStyle={{color: 'red'}}
            className={styles.submenu}
          >
            Reviews
          </NavLink>
        </div>
        <Route
          path={'/restaurant/:id/:tab'}
          children={props => {
            if (!props.match) {
              return null
            }
            switch (props.match.params.tab) {
              case 'reviews':
                return <Reviews id={id} />
              case 'menu':
              default:
                return <Menu menu={menu} className={styles.col} />
            }
          }}
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
    reviews: Reviews.propTypes.reviews,
  }),
}

export default connect((state, ownProps) => ({
  restaurant: selectRestaurant(state, ownProps),
}))(Restaurant)
