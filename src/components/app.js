import React, {Component} from 'react'
import {Layout} from 'antd'
import Restaurant from './restaurant'
import PropTypes from 'prop-types'
import Header from './header'
import Counter from './counter'
import {connect} from 'react-redux'
import Order from './order'

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
  // componentDidMount() {
  //   // fetch data
  // }
  // componentDidUpdate(prevProps) {
  //   // subscribe on some events
  // }
  // componentWillUnmount() {
  //   console.log('Did unmount')
  //   // unsubscribe from some events
  // }

  render() {
    const {restaurants} = this.props
    return (
      <Layout>
        <Header />
        <Counter />
        <Order />
        <Layout.Content>
          <Restaurant restaurant={restaurants[0]} />
        </Layout.Content>
      </Layout>
    )
  }
}

// App.defaultProps = {}

App.propTypes = {
  restaurants: PropTypes.arrayOf(Restaurant.propTypes.restaurant).isRequired,
}

const mapStateToProps = store => ({
  restaurants: store.restaurants,
})

export default connect(mapStateToProps)(App)
