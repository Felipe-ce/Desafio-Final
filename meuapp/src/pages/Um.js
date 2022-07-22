import React from 'react';
import { CardPagina } from '../components/CardPagina';
import Header from '../components/Header';

// Importando as imagens dos itens
import Luz from '../img/luz.svg';
import Lazer from '../img/lazer.svg';
import Casa from '../img/casa.svg';
import Educacao from '../img/educacao.svg';
import CardsSocial from '../components/CardsSocial';

const Um = () => {
  return (
    <section className="container">
      <Header />
      <CardPagina
        cor="#FCC30B"
        id="1"
        titulo="Iluminação publica"
        paragrafo="Garantir o acesso a fontes de energia fiáveis, sustentáveis e modernas para todos"
        img={Luz}
      />

      <CardsSocial />
    </section>
  );
};

export default Um;
