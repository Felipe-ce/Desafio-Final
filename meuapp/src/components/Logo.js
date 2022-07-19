//Importando a imagem de logo
import logo from './logo.jpg';
import React from 'react';
//Importando estilos do componente
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <img className={styles.logo} src={logo} alt="Logo" />
    </>
  );
};

export default Logo;
