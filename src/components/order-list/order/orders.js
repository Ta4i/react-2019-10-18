import {React} from 'react'
import {Card, Typography} from 'antd'

const Order = props => {
  ;<Card className={styles.productDetailedOrderCard}>
    <Typography.Title level={4}>{props.name}</Typography.Title>
  </Card>
}

export default Order
