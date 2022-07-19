import logo from './logo.jpg';
import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <>
    <img className={styles.logo} src={logo} alt="Logo" />
    </>
  )
}

export default Logo