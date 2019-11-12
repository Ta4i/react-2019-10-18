import React, {Component} from 'react'
import {Col, Layout, Row} from 'antd'
import Restaurant from './restaurant'
import PropTypes from 'prop-types'
import Header from './header'
import {connect} from 'react-redux'
import Cart from './cart'
import {fetchRestaurants} from '../store/ac'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../store/selectors'

class App extends Component {
  static defaultProps = {
    restaurants: [],
  }

  state = {
    value: 0,
    otherValue: 'foo bar',
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: props.initialValue
  //   }
  // }
  //
  componentDidMount() {
    this.props.fetchRestaurants &&
      !this.props.restaurantsLoading &&
      !this.props.restaurantsLoaded &&
      this.props.fetchRestaurants()
  }
  // componentDidUpdate(prevProps) {
  //   // subscribe on some events
  // }
  // componentWillUnmount() {
  //   console.log('Did unmount')
  //   // unsubscribe from some events
  // }

  render() {
    const {restaurants, restaurantsLoading, restaurantsLoaded} = this.props
    if (restaurantsLoading || !restaurantsLoaded) {
      return <h1>Loading...</h1>
    }
    return (
      <Layout>
        <Header />
        {/*<Counter />*/}
        <Layout.Content>
          <Row>
            <Col span={18}>
              <Restaurant restaurant={restaurants[0]} key={restaurants[0].id} />
            </Col>
            <Col span={6}>
              <Cart />
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    )
  }
}

// App.defaultProps = {}

//todo Непонятно почему, выдает ошибку "TypeError: Cannot read property 'restaurant' of undefined"
//  App.propTypes = {
//    restaurants: PropTypes.arrayOf(Restaurant.propTypes.restaurant).isRequired,
//  }

const mapStateToProps = store => ({
  restaurants: selectRestaurants(store),
  restaurantsLoading: selectRestaurantsLoading(store),
  restaurantsLoaded: selectRestaurantsLoaded(store),
})

const mapDispatchToProps = {
  fetchRestaurants,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
