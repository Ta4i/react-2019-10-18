import React from 'react'
import {Card, Typography, Button, Badge, Col} from 'antd'
import amount from '../../decorators/amount'

const {Text} = Typography

function Dish(props) {
  // useEffect(() => {
  //   console.log('Apply Effect')
  // })

  const {
    dish,

    // from decorator
    amount,
    increase,
    decrease,
  } = props

  const titleTag = (
    <div>
      {dish.name} &nbsp;
      <Badge count={dish.price + '$'} style={{backgroundColor: '#52c41a'}} />
    </div>
  )

  return (
    <Col span={12}>
      <Card title={titleTag}>
        <div>
          <Text strong>Ingredients:</Text> {dish.ingredients.join(', ')}
        </div>
        <br />
        <div>
          <Text strong>To cart:</Text> <Button onClick={decrease}>-</Button>{' '}
          <Text>{amount}</Text> <Button onClick={increase}>+</Button>
        </div>
      </Card>
    </Col>
  )
}

export default amount(Dish)
