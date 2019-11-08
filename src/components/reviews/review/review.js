import React from 'react'
import {Row, Col, Typography, Rate, Card} from 'antd'
import styles from './review.module.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {selectReview, selectUser} from '../../../store/selectors'

function Review(props) {
  const {review, user} = props

  return (
    <Card
      className={styles.review}
      data-automation-id={props['data-automation-id']}
    >
      <Row type="flex" align="middle">
        <Col xs={24} md={18} align="left">
          <Typography.Title className={styles.name} level={4}>
            {user.name}
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
}
Review.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }),
}

const mapStateToProps = (store, ownProps) => {
  return {
    review: selectReview(store, ownProps),
    user: selectUser(store, ownProps),
  }
}

export default connect(mapStateToProps)(Review)
