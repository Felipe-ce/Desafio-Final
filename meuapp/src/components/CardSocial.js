import React from 'react';
import styles from './CardSocial.module.css';


const CardSocial = ({ cor, id, titulo, img}) => {
  return (
    <div className={styles.cardSocial} style={{ backgroundColor: cor }}>
      <div>
        <span>{id}</span>
        <p>{titulo}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};

export default CardSocial;
