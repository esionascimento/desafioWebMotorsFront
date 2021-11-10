import React from 'react';

import logo from '../img/logo.png';
import './Comprar.css';

export const Comprar = () => {
  return (
    <div className="box">
      <header className="boxLogo">
        <img className="logo" src={ logo } alt="logo da empresa web motors"/>
      </header>
      <div>
        <div className="boxEscolher">
          <a className="ativar"href="http">
            <div className="ad carro">
              <img className="motoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/car_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <p className="textComprar">COMPRAR</p>
                <bold>CARROS</bold>
              </div>
            </div>
          </a>
          <a href="https://">
            <div className="ad moto">
              <img className="motoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/bike_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <p className="textComprar">COMPRAR</p>
                <p>MOTOS</p>
              </div>
            </div>
          </a>
        </div>
        <a className="ativar"href="http">
            <div className="ad carro">
              <img className="motoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/car_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <p className="textComprar">COMPRAR</p>
                <bold>CARROS</bold>
              </div>
            </div>
          </a>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
