import React from 'react'

import Logo from './logo'
import LangSwitch from './lang-switch'
import styles from './header.module.css'

function Header(props) {
  return (
    <header className={styles.header}>
      <LangSwitch switchLang={props.switchLang} />
      <Logo />
    </header>
  )
}

export default Header
