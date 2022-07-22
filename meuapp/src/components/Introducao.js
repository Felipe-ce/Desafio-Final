import React from 'react';
import styles from './Introducao.module.css';

export const Introducao = ({ titulo, subtitulo, paragrafo }) => {
  return (
    <section className={styles.introducao}>
      <div>
        <h1>{titulo}</h1>
      </div>
      <h2>{subtitulo}</h2>
      <p>{paragrafo}</p>
    </section>
  );
};
