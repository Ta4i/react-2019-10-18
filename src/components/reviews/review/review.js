import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import {selectReview, selectUser} from '../../../store/selectors'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import UserName from './reviewusername'

const Review = props => (
  <Card
    className={styles.review}
    data-automation-id={props['data-automation-id']}
  >
    <Row type="flex" align="middle">
      <Col xs={24} md={18} align="left">
        <Typography.Title className={styles.name} level={4}>
          <UserName userId={props.review.userId} />
        </Typography.Title>
        <Typography.Title className={styles.name} level={4}>
          {props.review.user}
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

const mapStateToProps = (store, ownProps) => {
  return {
    review: selectReview(store, ownProps),
    user: selectUser(store, ownProps),
  }
}

Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
}

export default connect(mapStateToProps)(Review)
