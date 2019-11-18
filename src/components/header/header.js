import React from 'react'
import Logo from './logo'
import styles from './header.module.css'
import {Button} from 'antd'

function Header(props) {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.langSwitcher}>
        <Button
          onClick={() => {
            props.handleLang('ru')
          }}
        >
          RU
        </Button>
        <Button
          onClick={() => {
            props.handleLang('en')
          }}
        >
          EN
        </Button>
      </div>
    </header>
  )
}

export default Header
