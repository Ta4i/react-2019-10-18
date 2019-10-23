import React from 'react'
import {Card, Typography, Button, Badge} from 'antd'
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
    <div>
      <Card title={titleTag}>
        <Text>Ingredients:</Text>
        <Text>{dish.ingredients.join(', ')}</Text>
        <br />
        <Button onClick={decrease}>-</Button>&nbsp;
        <Text>{amount}</Text>&nbsp;
        <Button onClick={increase}>+</Button>
      </Card>
    </div>
  )
}

export default amount(Dish)
