import React from 'react'
import {Typography} from 'antd'
import styles from './review.module.css'
import {selectUser} from '../../../store/selectors'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const UserName = props => (
  <Typography.Title className={styles.name} level={4}>
    {props.user.name}
  </Typography.Title>
)

const mapStateToProps = (store, ownProps) => {
  return {
    user: selectUser(store, ownProps),
  }
}

UserName.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
}

export default connect(mapStateToProps)(UserName)
