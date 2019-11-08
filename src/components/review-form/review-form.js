import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState} from 'react'
import useInput from '../../hooks/use-input'
import styles from './review-form.module.css'
import {
  addReviewItem,
  addToCart,
  removeFromCart,
  setReviewFormData,
} from '../../store/ac'
import {connect} from 'react-redux'
import {
  selectReviewFormRate,
  selectReviewFormText,
  selectReviewFormUserName,
} from '../../store/selectors'

function ReviewForm(props) {
  const [rate, setRate] = useState()
  const [text, setText, isValidText] = useInput()
  const [userName, setUserNameText, isValidUserNameText] = useInput()
  //const {userName, text, rate, setFormData, createReview, restaurantId} = props
  const {createReview, restaurantId} = props

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
            //onChange={(ev) => setFormData(userName, ev.target.value, rate, restaurantId)}
            onChange={setUserNameText}
          />
          <Form onSubmit={handleSubmit}>
            <Input.TextArea
              rows={3}
              value={text}
              //onChange={(ev) => setFormData(userName, ev.target.value, rate, restaurantId)}
              onChange={setText}
              size="large"
              className={{
                [styles.invalid]: !isValidText,
              }}
            />
            <div>
              Rating:{' '}
              <Rate
                value={rate}
                //onChange={(ev) => setFormData(userName, text, ev.target.value, restaurantId)}
                onChange={setRate}
              />
            </div>
            <Button
              htmlType="submit"
              className={styles.submitButton}
              onClick={() => createReview(userName, text, rate, restaurantId)}
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
  return {
    // userName: selectReviewFormUserName(store, ownProps),
    // text: selectReviewFormText(store, ownProps),
    // rate: selectReviewFormRate(store, ownProps)
  }
}

const mapDispatchToProps = dispatch => ({
  createReview: (userName, text, rate, restaurantId) => {
    dispatch(addReviewItem(userName, text, rate, restaurantId))
  },
  setFormData: (userName, text, rate, restaurantId) => {
    dispatch(setReviewFormData(userName, text, rate, restaurantId))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm)
