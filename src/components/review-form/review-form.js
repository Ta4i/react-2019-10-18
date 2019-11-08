import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import {connect} from 'react-redux'
import {submit} from '../../store/ac'

import styles from './review-form.module.css'

const ReviewForm = props => {
  const [rate, setRate] = useState()
  const [text, setText, isValidText] = useInput()
  const [name, setName] = useInput()
  const {submitForm} = props

  const handleSubmit = ev => {
    ev.preventDefault()
    console.log('submitted: ', rate, text, name)
    submitForm(name, rate, text)
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
              value={name}
              onChange={setName}
              size="large"
              className={{
                [styles.invalid]: !isValidText,
              }}
            />
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
  submitForm: (name, rate, text) => dispatch(submit(name, rate, text)),
})

export default connect(
  null,
  mapDispatchToProps
)(ReviewForm)
