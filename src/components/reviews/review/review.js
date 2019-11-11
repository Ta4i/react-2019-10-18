import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {
  selectRestaurants,
  selectRestaurantsLoaded,
  selectRestaurantsLoading,
  selectUser,
} from '../../../store/selectors'
import {connect} from 'react-redux'

const Review = props => (
  <Card
    className={styles.review}
    data-automation-id={props['data-automation-id']}
  >
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title className={styles.name} level={4}>
          {props.user.name}
        </Typography.Title>
        <Typography.Text className={styles.comment}>
          {props.review.text}
        </Typography.Text>
      </Col>
      <Col xs={8} md={6} align="right" className={styles.rateColumn}>
        <Rate disabled value={props.review.rating} />
      </Col>
    </Row>
  </Card>
)

Review.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
}

export default connect((state, ownProps) => ({
  user: selectUser(state, {id: ownProps.review.userId}),
}))(Review)
