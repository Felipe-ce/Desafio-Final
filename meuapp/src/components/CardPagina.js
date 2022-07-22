import React from 'react';
import styles from './CardPagina.module.css';

export const CardPagina = ({ cor, id, titulo, paragrafo, img }) => {
  return (
    <div className={styles.cardPagina} style={{ backgroundColor: cor }}>
      <div>
        <p>Objetivo de Desenvolvimento Sustentável</p>
        <span>{id}</span>
        <h4>{titulo}</h4>
        <p>{paragrafo}</p>
      </div>
      <img src={img} alt="" />
    </div>
  );
};
