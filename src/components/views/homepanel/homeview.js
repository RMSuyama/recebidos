import React from 'react';
import InsertModal from './insertModal';


const HomeView = () => {


  const cifrao = "R$"+" "

  const entradaValue = 3500;  
  const saidaValue = 1850;
  const tmesValue = entradaValue-saidaValue


  const entrada = cifrao+entradaValue;  
  const saida = cifrao+saidaValue;
  const tmes = cifrao+tmesValue;
  const tano = cifrao+"total do ano";
  const mes = new Date().toLocaleString('default', { month: 'long' });

  return (
    <div className="card-group">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Entrada</h5>
          <h6 className="card-title text-center">{entrada}</h6>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Saídas</h5>
          <h6 className="card-title text-center">{saida}</h6>
          <p className="card-text"></p>
        </div>
      </div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title text-center">Total</h5>
          <h6 className="card-title text-center">Do mês de {mes} {tmes}</h6>
        </div>
      </div>


    </div>
  );
};

export default HomeView;
