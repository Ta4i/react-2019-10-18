import React, {Component} from 'react'
import {Layout} from 'antd'
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
import {locale, userName, AppLocaleContext, UserNameContext} from '../contexts'
class App extends Component {
  static defaultProps = {
    restaurants: [],
  }

  state = {
    value: 0,
    otherValue: 'foo bar',
    currentRestaurantId: null,
    userName,
    lang: locale.ru,
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

  switchLang = val => {
    this.setState({
      lang: locale[val],
    })
  }

  render() {
    const {restaurantsLoading, restaurantsLoaded} = this.props
    const {lang, userName} = this.state
    if (
      restaurantsLoading ||
      !restaurantsLoaded ||
      !this.state.currentRestaurantId
    ) {
      return <Loader />
    }
    return (
      <AppLocaleContext.Provider value={lang}>
        <UserNameContext.Provider value={userName}>
          <Layout>
            <Header switchLang={this.switchLang} />
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
                <Route path="/" render={() => <h1>{lang.notFound}</h1>} />
              </Switch>
            </Layout.Content>
          </Layout>
        </UserNameContext.Provider>
      </AppLocaleContext.Provider>
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
