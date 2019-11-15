import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './submenu.module.css'

function SubMenu(props) {
  return (
    <NavLink
      to={props.to}
      activeStyle={{color: 'red'}}
      className={styles.submenu}
    >
      {props.children}
    </NavLink>
  )
}

export default SubMenu
