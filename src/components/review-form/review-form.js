import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import useInput from '../../hooks/use-input'
import {addReview} from '../../store/ac'

import styles from './review-form.module.css'

const ReviewForm = props => {
  const {restaurantId} = props
  let [rating, setRate] = useState()
  let [userName, setName] = useState('')
  let [text, setText, isValidText, resetText] = useInput()

  const dispatch = useDispatch()

  let changeName = e => {
    setName(e.target.value)
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    dispatch(addReview({rating, text, restaurantId, userName}))
    setName('')
    setRate(null)
    resetText()
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input value={userName} onChange={changeName} />
            <Input.TextArea
              rows={3}
              value={text}
              onChange={setText}
              size="large"
              className={{
                [styles.invalid]: !isValidText,
              }}
            />
            <div>
              Rating: <Rate value={rating} onChange={setRate} />
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

export default ReviewForm
