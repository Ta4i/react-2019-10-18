import React from 'react'
import {Card, Radio} from 'antd'

import styles from './radio-card.module.css'

const RadioCard = props => {
  const {title, variants, setValue, value} = props

  const genRadio = arr =>
    arr.map((item, index) => (
      <Radio value={index} key={`N_${index}`}>
        {item}
      </Radio>
    ))

  return (
    <Card title={title} className={styles.wrapper}>
      <Radio.Group
        onChange={e => setValue(e.target.value)}
        value={value}
        className={styles.container}
      >
        {genRadio(variants)}
      </Radio.Group>
    </Card>
  )
}

export default RadioCard
