import React from 'react';
import unLogo from '../img/unLogo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div>
        <img className={styles.unLogo} src={unLogo} alt="Logo" />
        <input
          type="text"
          placeholder="Encontre dados, recursos noticias e mais..."
        />
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>Sobre</li>
          <li className={styles.ativo}>Objetivos de desenvolvimento sustentavel</li>
          <li>Faça sua parte</li>
          <li>Histórias</li>
          <li>Recursos</li>
          <li>Centro de imprensa</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
