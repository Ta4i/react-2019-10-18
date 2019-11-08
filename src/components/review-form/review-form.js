import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import useRate from '../../hooks/use-rate'
import styles from './review-form.module.css'
import {addReviewItem, setReviewFormData} from '../../store/ac'
import {connect} from 'react-redux'

function ReviewForm(props) {
  const [rate, setRate, clearRateField] = useRate()
  const [text, setText, isValidText, clearTextField] = useInput()
  const [
    userName,
    setUserNameText,
    isValidUserNameText,
    clearUserNameField,
  ] = useInput()
  const {createReview, restaurantId} = props

  const clearFields = () => {
    clearUserNameField()
    clearTextField()
    clearRateField()
  }

  const handleSubmit = ev => {
    ev.preventDefault()
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            Leave your review
          </Typography.Title>
          <Input
            value={userName}
            addonBefore="Name: "
            onChange={setUserNameText}
          />
          <Form onSubmit={handleSubmit}>
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
            <Button
              htmlType="submit"
              className={styles.submitButton}
              onClick={() =>
                createReview(userName, text, rate, restaurantId, clearFields)
              }
            >
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const mapStateToProps = (store, ownProps) => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  createReview: (userName, text, rate, restaurantId, clearFields) => {
    dispatch(addReviewItem(userName, text, rate, restaurantId, clearFields))
    clearFields()
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
