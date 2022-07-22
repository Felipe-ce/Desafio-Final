import React from 'react';
import CardSocial from './CardSocial';
import styles from './CardsSocial.module.css';
import { Link } from 'react-router-dom';

// Importando as imagens dos itens
import Luz from '../img/luz.svg';
import Lazer from '../img/lazer.svg';
import Casa from '../img/casa.svg';
import Educacao from '../img/educacao.svg';

const CardsSocial = () => {
  return (
    <section className={styles.socialContainer}>
      <div className={styles.socialDescricao}>
        <h4>Os Objetivos de Desenvolvimento Sustentável no Brasil</h4>
        <p>
          Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação
          para acabar com a pobreza, proteger o meio ambiente e o clima e
          garantir que as pessoas, em todos os lugares, possam desfrutar de paz
          e de prosperidade. Estes são os objetivos para os quais as Nações
          Unidas estão contribuindo a fim de que possamos atingir a Agenda 2030
          no Brasil.
        </p>
      </div>
      <Link to="/um">
        <CardSocial
          cor="#FCC30B"
          id="1"
          titulo="Iluminação publica"
          img={Luz}
        />
      </Link>
      <Link to="/">
        <CardSocial cor="#3F7E44" id="2" titulo="Área de lazer" img={Lazer} />
      </Link>
      <Link to="/">
        <CardSocial
          cor="#00689D"
          id="3"
          titulo="Saneamento básico"
          img={Casa}
        />
      </Link>
      <Link to="/">
        <CardSocial
          cor="#C5192D"
          id="4"
          titulo="Educação de qualidade"
          img={Educacao}
        />
      </Link>
      <Link to="/">
        <CardSocial cor="#3F7E44" id="5" titulo="Área de lazer" img={Lazer} />
      </Link>
      <Link to="/">
        <CardSocial
          cor="#00689D"
          id="6"
          titulo="Saneamento básico"
          img={Casa}
        />
      </Link>
      <Link to="/">
        <CardSocial
          cor="#C5192D"
          id="7"
          titulo="Educação de qualidade"
          img={Educacao}
        />
      </Link>
      <Link to="/">
        <CardSocial
          cor="#FD6925"
          id="8"
          titulo="Iluminação publica"
          img={Luz}
        />
      </Link>
    </section>
  );
};

export default CardsSocial;
