import React from 'react'
import {Tabs} from 'antd'

const LangSwitch = ({switchLang}) => (
  <Tabs
    defaultActiveKey="ru"
    style={{position: 'absolute', right: '100px', top: '8px'}}
    onChange={val => switchLang(val)}
  >
    <Tabs.TabPane tab="RU" key="ru" />
    <Tabs.TabPane tab="EN" key="en" />
  </Tabs>
)

export default LangSwitch
