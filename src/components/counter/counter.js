import React, {Component} from 'react'
import {Button} from 'antd'
import {connect} from 'react-redux'
import {decrement, increment} from '../../store/ac'

class Counter extends Component {
  render() {
    return (
      <div>
        <span>{this.props.countFromStore}</span>
        <Button.Group>
          <Button onClick={this.decrease} type="primary" icon="minus" />
          <Button onClick={this.increase} type="primary" icon="plus" />
        </Button.Group>
      </div>
    )
  }
  decrease = () => {
    this.props.decrement()
  }
  increase = () => {
    this.props.increment()
  }
}

const mapStateToProps = (state, ownProps) => ({
  countFromStore: state.count,
})

const mapDispatchToProps = {
  increment: increment,
  decrement: decrement,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
