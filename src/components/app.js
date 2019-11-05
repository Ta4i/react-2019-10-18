import React, {Component} from 'react'
import {Col, Layout, Row} from 'antd'
import Restaurant from './restaurant'
import PropTypes from 'prop-types'
import Header from './header'
import {connect} from 'react-redux'
import Cart from './cart'
import Counter from './counter'

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
        <Layout.Content>
          <Row>
            <Col span={18}>
              {restaurants.map(restaurant => (
                <Restaurant restaurant={restaurant} key={restaurant.id} />
              ))}
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
  restaurants: PropTypes.arrayOf(Restaurant.propTypes.restaurant).isRequired,
}

const mapStateToProps = store => ({
  restaurants: store.restaurants,
})

export default connect(mapStateToProps)(App)
