import React from 'react'
import {Col, Typography} from 'antd'
import Menu from '../order'
import styles from './dish-name.module.css'

function DishName({menu = []}) {
  ;<Typography.Title className={styles.name} level={4}>
    {props.review.user}
  </Typography.Title>
}
