import React from 'react';
//Importando estilos do componente
import styles from './CardBlog.module.css';

// como este componente pode ser bastante utilizado, optei por passar deu conteudo por esses parametros
const CardBlog = ({ titulo, paragrafo }) => {
  return (
    <div className={styles.cardBlog}>
      <h2>{titulo}</h2>
      <p>{paragrafo}</p>
    </div>
  );
};

export default CardBlog;
