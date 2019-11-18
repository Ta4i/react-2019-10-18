import React, {Component} from 'react'
import {Typography} from 'antd'
import Menu from '../menu'
import Reviews from '../reviews'
import AverageRating from '../average-rating'
import PropTypes from 'prop-types'
import styles from './restaurant.module.css'
import {connect} from 'react-redux'
import {selectRestaurant} from '../../store/selectors'
import {NavLink, Route, Redirect} from 'react-router-dom'
import SubMenu from '../submenu/submenu'
import {Consumer as InterConsumer} from '../../contexts/inter'

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
        <InterConsumer>
          {language => (
            <Typography.Title type="danger">languge.sww</Typography.Title>
          )}
        </InterConsumer>
      )
    }

    return (
      <InterConsumer>
        {language => (
          <div>
            <Redirect
              from={'/restaurant/:id'}
              exact
              to={`/restaurant/${id}/menu`}
            />
            <Typography.Title level={2}>{name}</Typography.Title>
            <AverageRating id={id} />
            <div style={{textAlign: 'center', padding: '6px'}}>
              <SubMenu to={`/restaurant/${id}/menu`}>{language.menu}</SubMenu>
              <SubMenu to={`/restaurant/${id}/reviews`}>
                {language.reviews}
              </SubMenu>
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
        )}
      </InterConsumer>
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
