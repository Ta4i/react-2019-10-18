import React, {Component} from 'react'
import {Tabs, Typography} from 'antd'
import Restaurant from './restaurant'

class App extends Component {
  state = {
    value: 0,
    otherValue: 'foo bar',
  }

  render() {
    const {restaurants} = this.props
    const restaurantsTags = restaurants.map(restaurant => (
      <Tabs.TabPane tab={restaurant.name} key={restaurant.id}>
        <Restaurant restaurant={restaurant} />
      </Tabs.TabPane>
    ))

    return (
      <div>
        <Typography.Title level={1} underline>
          Restaurants
        </Typography.Title>
        <Tabs>{restaurantsTags}</Tabs>
      </div>
    )
  }
}

export default App
