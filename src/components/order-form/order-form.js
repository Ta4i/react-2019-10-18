import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/ac'
import {Consumer as InterConsumer} from '../../contexts/inter'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    return (
      <InterConsumer>
        {language => (
          <Form
            layout={'inline'}
            style={{padding: '24px'}}
            onSubmit={this.handleSubmit}
          >
            <h1 ref={this.setRefForSomeHTMLElement}>{language.form}</h1>
            <Form.Item>
              <Input
                ref={this.setInput}
                placeholder={language.userName}
                value={this.state.userName}
                onChange={this.handleUserNameInputChange}
                style={{width: '200px'}}
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                {language.sendOrder}
              </Button>
            </Form.Item>
          </Form>
        )}
      </InterConsumer>
    )
  }

  handleUserNameInputChange = ({target: {value}}) => {
    this.setState({
      userName: value,
    })
    this.props.handleUserName(value)
  }

  setRefForSomeHTMLElement = ref => {
    this.someHTMLElement = ref
  }

  setInput = ref => {
    this.userNameInput = ref
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.sendOrder(this.state)
  }
}

export default connect(
  null,
  {sendOrder}
)(OrderForm)
