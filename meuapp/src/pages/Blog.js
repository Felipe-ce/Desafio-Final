import React from 'react';
import CardBlog from '../components/CardBlog';
import Logo from '../components/Logo';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <>
      <Logo />
      <h1 className={styles.tituloBlog}>Felipe Xavier</h1>
      <p className={styles.subTituloBlog}>Front-End & <span>UI/UX</span> Designer</p>

      {/* Importando cada card */}
      <section className={styles.containerCard}>
        <CardBlog
          titulo="Desenvolvimento Sustentável"
          paragrafo="Desenvolvimento econômico, que leva em conta o meio ambiente."
        />

        <CardBlog
          titulo="Portfolio"
          paragrafo="Conheça um pouco mais sobre meu trabalho."
        />

        <CardBlog
          titulo="Git Hub"
          paragrafo="Acompanhe e colabore com minha rede de códigos."
        />

        <CardBlog
          titulo="Vai na Web"
          paragrafo="Uma plataforma de formação de talentos digitais."
        />
      </section>
    </>
  );
};

export default Blog;
