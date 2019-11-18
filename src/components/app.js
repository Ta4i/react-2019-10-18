import React, {Component} from 'react'
import {Layout, Radio} from 'antd'
import PropTypes from 'prop-types'
import Header from './header'
import {connect} from 'react-redux'
import {fetchRestaurants} from '../store/ac'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
} from '../store/selectors'
import Loader from './loader'
import {Route, Switch, Redirect} from 'react-router-dom'
import RestaurantPage from './routes/restaurant-page'
import OrderPage from './routes/order-page'
import OrderComplete from './routes/order-complete'
import {Provider as AuthProvider} from '../contexts/auth'
import {Provider as InterProvider, languages} from '../contexts/inter'

class App extends Component {
  static defaultProps = {
    restaurants: [],
  }

  state = {
    value: 0,
    otherValue: 'foo bar',
    currentRestaurantId: null,
    userName: '',
    language: languages.en,
    languageBut: 'en',
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

  handleUserName = userName => {
    this.setState({
      userName,
    })
  }

  handleLanguageChange = e => {
    this.setState(state => ({
      languageBut: e.target.value,
      language: e.target.value === 'en' ? languages.en : languages.rus,
    }))
  }
  render() {
    const {restaurantsLoading, restaurantsLoaded} = this.props
    if (
      restaurantsLoading ||
      !restaurantsLoaded ||
      !this.state.currentRestaurantId
    ) {
      return <Loader />
    }
    return (
      <AuthProvider value={this.state.userName}>
        <InterProvider
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <Layout>
            <Header />
            <Radio.Group
              value={this.state.languageBut}
              onChange={this.handleLanguageChange}
            >
              <Radio.Button value="en">en</Radio.Button>
              <Radio.Button value="rus">rus</Radio.Button>
            </Radio.Group>
            <Layout.Content>
              <Switch>
                <Route
                  path={'/order'}
                  render={props => (
                    <OrderPage
                      {...props}
                      handleUserName={this.handleUserName}
                    />
                  )}
                />
                <Route path={'/order-complete'} component={OrderComplete} />
                <Route path={'/restaurant'} component={RestaurantPage} />
                <Route
                  path="/"
                  exact
                  render={() => <Redirect to={'/restaurant'} />}
                />
                <Route
                  path="/"
                  render={() => <h1>{this.state.language.pageNotFound}</h1>}
                />
              </Switch>
            </Layout.Content>
          </Layout>
        </InterProvider>
      </AuthProvider>
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
