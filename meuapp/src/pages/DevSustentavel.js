import React from 'react';
import CardsSocial from '../components/CardsSocial';
import Header from '../components/Header';
import { Introducao } from '../components/Introducao';



const DevSustentavel = () => {
  return (
    <>
      <Header />
      <Introducao
        titulo="Sobre o nosso trabalho para alcançar os Objetivos de Desenvolvimento Sustentável no Brasil"
        subtitulo="Como as Nações Unidas apoiam os Objetivos de Desenvolvimento Sustentável no Brasil"
        paragrafo="A ONU e seus parceiros no Brasil estão trabalhando para atingir os Objetivos de Desenvolvimento Sustentável. São 17 objetivos ambiciosos e interconectados que abordam os principais desafios de desenvolvimento enfrentados por pessoas no Brasil e no mundo."
      />

      {/* Importando o container de todos os cards */}
      <CardsSocial />
    </>
  );
};

export default DevSustentavel;
