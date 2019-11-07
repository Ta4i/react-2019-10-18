import React, {Component} from 'react'
import {Layout, Row, Col} from 'antd'
import Restaurant from './restaurant'
import PropTypes from 'prop-types'
import Header from './header'
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
        <Layout.Content style={{padding: 20}}>
          <Row gutter={16}>
            <Col span={18}>
              <Restaurant restaurant={restaurants[0]} />
            </Col>
            <Col span={6}>
              <Order />
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
