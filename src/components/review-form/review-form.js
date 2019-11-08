import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'

import styles from './review-form.module.css'

const ReviewForm = ({submitReview, onReviewSubmit}) => {
  const [rate, setRate] = useState()
  const [text, setText, isValidText, setEmptyTextField] = useInput()
  const [user, setUser, isValidUser, setEmptyUserField] = useInput()

  const emptyForm = () => {
    setEmptyUserField()
    setEmptyTextField()
    setRate(0)
  }

  const handleSubmit = ev => {
    ev.preventDefault()

    const review = {
      user,
      text,
      rating: rate,
    }

    if (isValidUser && isValidText && rate) {
      onReviewSubmit(review)
      emptyForm()
    }
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input.TextArea
              rows={1}
              value={user}
              onChange={setUser}
              size="large"
              placeholder="Your Name"
              className={{
                [styles.invalid]: !isValidUser,
              }}
            />
            <Input.TextArea
              rows={3}
              value={text}
              onChange={setText}
              size="large"
              placeholder="Your Review"
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
  submitReview: review => {
    dispatch(addReview(review))
  },
})

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm)
