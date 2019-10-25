import React, {Component} from 'react'

class ReviewForm extends Component {
  state = {
    text: '',
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>Add your review:</p>
        <input
          value={this.state.text}
          onChange={this.handleInput}
          type={'text'}
        />
      </form>
    )
  }

  handleInput = e => {
    this.setState({
      text: e.target.value.length > 6 ? '' : e.target.value,
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log('submit', this.state)
  }
}

export default ReviewForm
