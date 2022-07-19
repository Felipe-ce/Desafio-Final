import React from 'react'
import styles from './CardBlog.module.css'

const CardBlog = ({titulo, paragrafo}) => {
  return (
    <div className={styles.cardBlog}>
      <h2>{titulo}</h2>
      <p>{paragrafo}</p>
    </div>
  )
}

export default CardBlog