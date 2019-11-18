import React, {Component} from 'react'
import {connect} from 'react-redux'
import {selectRestaurants} from '../../store/selectors'
import {NavLink} from 'react-router-dom'
import styles from './restaurants-navigation.module.css'

class RestaurantsNavigation extends Component {
  render() {
    const {restaurants} = this.props
    console.log('RestaurantsNavigation', restaurants)
    return (
      <div className={styles.list}>
        {restaurants.map(({id, name}) => (
          <NavLink
            className={styles.restaurant}
            activeClassName={styles.active}
            to={`/restaurant/${id}`}
            key={id}
          >
            {name}
          </NavLink>
        ))}
      </div>
    )
  }
}

export default connect(state => ({
  restaurants: selectRestaurants(state),
}))(RestaurantsNavigation)
