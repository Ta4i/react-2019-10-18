import React, {Component} from 'react'
import {Col, Row, Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'
import {connect} from 'react-redux'
import {selectRestaurant} from '../../store/selectors'
import {Route, Redirect} from 'react-router-dom'
import SubMenu from '../submenu/submenu'
import Cart from '../cart/cart'
import Hero from '../hero'

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
    const {id, restaurant: {name, menu} = {}} = this.props

    if (this.state.error) {
      return (
        <Typography.Title type="danger">Something went wrong</Typography.Title>
      )
    }

    return (
      <div>
        <Redirect
          from={'/restaurant/:id'}
          exact
          to={`/restaurant/${id}/menu`}
        />
        <Hero heading={name}>
          <AverageRating id={id} />
        </Hero>
        <Row>
          <Col span={18}>
            <div style={{textAlign: 'center', padding: '6px'}}>
              <SubMenu to={`/restaurant/${id}/menu`}>Menu</SubMenu>
              <SubMenu to={`/restaurant/${id}/reviews`}>Reviews</SubMenu>
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
          </Col>
          <Col span={6}>
            <Cart />
          </Col>
        </Row>
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
