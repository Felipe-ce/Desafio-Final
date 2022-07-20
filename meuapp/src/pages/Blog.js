import React from 'react';
import { Link } from 'react-router-dom';
//Importando componentes
import CardBlog from '../components/CardBlog';
import Logo from '../components/Logo';
//Importando estilos da pagina
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <>
      <Logo />
      <h1 className={styles.tituloBlog}>Felipe Xavier</h1>
      <p className={styles.subTituloBlog}>
        {/* o SPAN sera estilizado no css */}
        Front-End & <span>UI/UX</span> Designer
      </p>

      {/* Seção de agupamento para os cards */}
      <section className={styles.containerCard}>
        {/* Estou passando os parametros titulo e paragrafo em cada card/componente */}
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
