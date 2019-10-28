import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import PropTypes from 'prop-types'
import styles from './review.module.css'

const Review = ({review}) => (
  <Card className={styles.review}>
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title className={styles.name} level={4}>
          {review.user}
        </Typography.Title>
        <Typography.Text className={styles.comment}>
          {review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={review.rating} />
      </Col>
    </Row>
  </Card>
)

Review.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rating: function(props, propName) {
    if (
      !props[propName] ||
      !Number.isFinite(props[propName]) ||
      props[propName] < 0 ||
      props[propName] > 5
    ) {
      return new Error(
        `Invalid prop ${propName}. Rating must be a number from 0 to 5.`
      )
    }
  },
}

export default Review
