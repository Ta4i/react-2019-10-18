import {Button, Card, Col, Form, Input, Row, Typography, Rate} from 'antd'
import React, {useState, useContext} from 'react'
import cx from 'classnames'
import useInput from '../../hooks/use-input'
import {AppLocaleContext} from '../../contexts'

import styles from './review-form.module.css'
import {useDispatch} from 'react-redux'
import {addReview} from '../../store/ac'

const ReviewForm = ({id}) => {
  const [rate, setRate] = useState()
  const [name, setName, isValidName, resetName] = useInput()
  const [text, setText, isValidText, resetText] = useInput()
  const dispatch = useDispatch()
  const lang = useContext(AppLocaleContext)

  const resetForm = () => {
    resetName()
    resetText()
    setRate(null)
  }

  const handleSubmit = ev => {
    ev.preventDefault()
    dispatch(addReview(name, +rate, text, id))
    resetForm()
  }

  return (
    <Card className={styles.reviewForm}>
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.addReviewTitle} level={4}>
            {lang.leaveReview}
          </Typography.Title>
          <Form onSubmit={handleSubmit}>
            <Input
              placeholder={lang.name}
              value={name}
              onChange={setName}
              className={cx(
                {
                  [styles.invalid]: !isValidName,
                },
                styles.inputName
              )}
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
              {lang.rating}: <Rate value={rate} onChange={setRate} />
            </div>
            <Button htmlType="submit" className={styles.submitButton}>
              {lang.publishReview}
            </Button>
          </Form>
        </Col>
      </Row>
    </Card>
  )
}

export default ReviewForm
