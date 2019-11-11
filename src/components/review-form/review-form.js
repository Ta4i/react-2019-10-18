import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import cx from 'classnames'
import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/ac'

const ReviewForm = props => {
  const {id} = props
  const [rate, setRate] = useState()
  const [text, setText, isValidText, resetText] = useInput()
  const [name, setName, isValidName, resetName] = useInput()
  const nameStyle = {
    marginBottom: '20px',
  }
  const dispatch = useDispatch()

  const handleSubmit = ev => {
    ev.preventDefault()
    dispatch(addReview(name, +rate, text, id))
    resetForm()
  }

  const resetForm = () => {
    resetName()
    resetText()
    setRate(null)
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.Title} level={4}>
            Leave your review
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              value={name}
              onChange={setName}
              size="large"
              style={nameStyle}
              className={cx({
                [styles.invalid]: !isValidName,
              })}
            />
            <Input.TextArea
              rows={3}
              value={text}
              onChange={setText}
              size="large"
              className={cx({
                [styles.invalid]: !isValidText,
              })}
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

export default ReviewForm
