import React, {Component} from 'react'
import {Col, Layout, Row} from 'antd'
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
import Loader from './loader'
import {restaurants} from '../fixtures'
import {NavLink, Route, Switch} from 'react-router-dom'
import RestaurantPage from './routes/restaurant-page'
import OrderPage from './routes/order-page'
import Navigation from './navigation/navigation'

class App extends Component {
  static defaultProps = {
    restaurants: [],
  }

  state = {
    value: 0,
    otherValue: 'foo bar',
    currentRestaurantId: null,
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
  componentDidUpdate(prevProps) {
    if (
      this.state.currentRestaurantId === null &&
      this.props.restaurantsLoaded &&
      this.props.restaurants.length > 0
    ) {
      this.setState({
        currentRestaurantId: this.props.restaurants[0].id,
      })
    }
  }
  // componentWillUnmount() {
  //   console.log('Did unmount')
  //   // unsubscribe from some events
  // }

  render() {
    const {restaurantsLoading, restaurantsLoaded, restaurants} = this.props
    if (
      restaurantsLoading ||
      !restaurantsLoaded ||
      !this.state.currentRestaurantId
    ) {
      return <Loader />
    }
    return (
      <Layout>
        <Header />
        {/*<Counter />*/}
        <Layout.Content>
          <Navigation restaurants={restaurants} />
          {/*<Route*/}
          {/*  path={'/restaurant'}*/}
          {/*  render={props => <h1>Exact header</h1>}*/}
          {/*  exact*/}
          {/*  strict*/}
          {/*/>*/}
          <Switch>
            <Route
              path={'/restaurant/:restaurantId'}
              component={RestaurantPage}
              // render={props => <RestaurantPage {...props} />}
            />
            <Route
              path={'/foo'}
              children={props => console.log('Route children', props)}
            />
            <Route
              path={'/restaurant'}
              render={props => <h1>Rendered for restaurant path</h1>}
            />
            <Route path={'/order'} component={OrderPage} />
            <Route path="/" render={() => <h1>Page not found</h1>} />
          </Switch>
        </Layout.Content>
      </Layout>
    )
  }
}

// App.defaultProps = {}

App.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
}

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
