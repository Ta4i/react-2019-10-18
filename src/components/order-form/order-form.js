import React, {Component} from 'react'
import {Input, Button, Form} from 'antd'
import {connect} from 'react-redux'
import {sendOrder} from '../../store/ac'
import {AppLocaleContext} from '../../contexts'

class OrderForm extends Component {
  state = {
    userName: '',
  }

  render() {
    const lang = this.context
    return (
      <Form
        layout={'inline'}
        style={{padding: '24px'}}
        onSubmit={this.handleSubmit}
      >
        <h1 ref={this.setRefForSomeHTMLElement}>{lang.form}</h1>
        <Form.Item>
          <Input
            ref={this.setInput}
            placeholder={lang.name}
            value={this.state.userName}
            onChange={this.handleUserNameInputChange}
            style={{width: '120px'}}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {lang.sendOrder}
          </Button>
        </Form.Item>
      </Form>
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

OrderForm.contextType = AppLocaleContext

export default connect(
  null,
  {sendOrder}
)(OrderForm)
