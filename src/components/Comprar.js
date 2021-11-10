import React from 'react';

import logo from '../img/logo.png';
import './Comprar.css';

export const Comprar = () => {
  return (
    <div className="box">
      <div className="boxLogo">
        <img className="logo" src={ logo } alt="logo da empresa web motors"/>
      </div>
      <div className="boxEscolher">
        <a href="http">
          <img className="motoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/car_icon_gray.svg" alt="logo da empresa web motors"/>
          <div>
            <p>COMPRAR</p>
            <p>CARROS</p>
          </div>
        </a>
        <a href="https://">
          <img className="motoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/bike_icon_gray.svg" alt="logo da empresa web motors"/>
        </a>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
