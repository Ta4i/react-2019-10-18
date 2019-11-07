import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'
import styles from './review-form.module.css'
import {selectUsers} from '../../store/selectors'

const ReviewForm = props => {
  const [rate, setRate] = useState()
  const [text, setText, isValidText] = useInput()
  const [name, setName, isValidName] = useInput()
  const {publicReview, users} = props
  const handleSubmit = ev => {
    ev.preventDefault()
    console.log('submitted: ', rate, text)
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
              rows={3}
              value={text}
              onChange={setText}
              size="large"
              className={{
                [styles.invalid]: !isValidText,
              }}
            />
            <Input
              rows={1}
              addonBefore="Name"
              value={name}
              onChange={setName}
              size="large"
              className={{
                [styles.invalid]: !isValidName,
              }}
            />
            <div>
              Rating: <Rate value={rate} onChange={setRate} />
            </div>
            <Button
              htmlType="submit"
              className={styles.submitButton}
              onClick={() => publicReview(text, name, rate, users)}
            >
              PUBLISH REVIEW
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  publicReview: (text, user, rating, users) =>
    dispatch(addReview(text, user, rating, users)),
})

const mapStateToProps = (store, ownProps) => {
  return {
    users: selectUsers(store),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
