import React from 'react'
import styles from './NavBar.module.scss'


const Navbar = () => {
  return (
    <nav className={styles.nav}>
    <ul>
        <li><a href='/'>Home</a></li>
        <li><a href='/'>About us</a></li>
        <li><a href='/'>Contact</a></li>
    </ul>
    </nav>
  )
}

export default Navbar