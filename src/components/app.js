import React, {Component} from 'react'
import Restaurant from './restaurant'
import PropTypes from 'prop-types'

class App extends Component {
  static defaultProps = {
    restaurants: [],
  }

  static propTypes = {
    restaurants: PropTypes.array,
  }

  state = {
    value: 0,
    otherValue: 'foo bar',
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     value: 0
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
    return <Restaurant restaurant={restaurants[0]} />
  }
}

// App.defaultProps = {}

export default App
