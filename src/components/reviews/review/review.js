import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'

const Review = ({review}) => (
  <Card className={styles.review} data-automation-id={review.id}>
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
  review: PropTypes.exact({
    id: PropTypes.string,
    user: PropTypes.string,
    text: PropTypes.string,
    rating: PropTypes.number,
  }),
}

export default Review
