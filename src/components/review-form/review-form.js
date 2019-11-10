import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import classNames from 'classnames'
import styles from './review-form.module.css'
import {connect} from 'react-redux'
import {addReview, addToCart, removeFromCart} from '../../store/ac'

const ReviewForm = props => {
  const [rate, setRate] = useState()
  const [userName, setUserName, isValidUserName] = useInput()
  const [text, setText, isValidText] = useInput()

  const handleSubmit = ev => {
    ev.preventDefault()
    const reviewData = {
      restaurantId: props.restaurantId,
      userName: userName,
      text: text,
      rate: rate,
    }
    props.addReview(reviewData)
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder="username"
              className={classNames({
                [styles.inputField]: true,
                [styles.invalid]: !isValidUserName,
              })}
              value={userName}
              onChange={setUserName}
            />
            <Input.TextArea
              rows={3}
              placeholder="review"
              value={text}
              onChange={setText}
              size="large"
              className={{
                [styles.invalid]: !isValidText,
              }}
            />
            <div>
              Rating: <Rate value={rate} onChange={setRate} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  addReview: reviewData => dispatch(addReview(reviewData)),
})

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm)
