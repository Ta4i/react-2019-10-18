import React, {Component} from 'react'
import {Col, Layout, Row} from 'antd'
import Restaurant from './restaurant'
import PropTypes from 'prop-types'
import Header from './header'
import {connect} from 'react-redux'
import Cart from './cart'
import {fetchRestaurants, fetchUsers} from '../store/ac'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
  selectUsersMap,
  selectUsersLoading,
  selectUsersLoaded,
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
      this.props.fetchRestaurants('a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2')

    this.props.fetchUsers &&
      !this.props.usersLoading &&
      !this.props.usersLoaded &&
      this.props.fetchUsers()
  }
  // componentDidUpdate(prevProps) {
  //   // subscribe on some events
  // }
  // componentWillUnmount() {
  //   console.log('Did unmount')
  //   // unsubscribe from some events
  // }

  render() {
    const {
      restaurants,
      restaurantsLoading,
      restaurantsLoaded,
      usersLoaded,
      usersLoading,
    } = this.props
    if (
      restaurantsLoading ||
      !restaurantsLoaded ||
      usersLoading ||
      !usersLoaded
    ) {
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

App.propTypes = {
  restaurants: PropTypes.array.isRequired,
}

const mapStateToProps = store => ({
  restaurants: selectRestaurants(store),
  restaurantsLoading: selectRestaurantsLoading(store),
  restaurantsLoaded: selectRestaurantsLoaded(store),

  users: selectUsersMap(store),
  usersLoading: selectUsersLoading(store),
  usersLoaded: selectUsersLoaded(store),
})

const mapDispatchToProps = {
  fetchRestaurants,
  fetchUsers,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
