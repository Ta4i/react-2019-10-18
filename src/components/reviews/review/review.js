import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'

const Review = ({review}) => (
  <Card className={styles.review} data-automation-id="REVIEW">
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title
          className={styles.name}
          level={4}
          data-automation-id="USER_NAME"
        >
          {review.user}
        </Typography.Title>
        <Typography.Text
          className={styles.comment}
          data-automation-id="REVIEW_TEXT"
        >
          {review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={review.rating} />
      </Col>
    </Row>
  </Card>
)

export default Review
