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
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="sobre">Sobre</Link>
          <Link to="contato">Contato</Link>
        </nav> */}

        {/* Estou passando os parametros titulo e paragrafo em cada card/componente */}
        <Link to="/devsustentavel">
          <CardBlog
            titulo="Desenvolvimento Sustentável"
            paragrafo="Desenvolvimento econômico, que leva em conta o meio ambiente."
          />
        </Link>

        <a href="https://felipeads.com/" target="_blank">
          <CardBlog
            titulo="Portfolio"
            paragrafo="Conheça um pouco mais sobre meu trabalho."
          />
        </a>

        <a href="https://github.com/Felipe-ce" target="_blank">
          <CardBlog
            titulo="Git Hub"
            paragrafo="Acompanhe e colabore com minha rede de códigos."
          />
        </a>

        <a href="https://www.vainaweb.com.br/" target="_blank">
          <CardBlog
            titulo="Vai na Web"
            paragrafo="Uma plataforma de formação de talentos digitais."
          />
        </a>
      </section>
    </>
  );
};

export default Blog;
