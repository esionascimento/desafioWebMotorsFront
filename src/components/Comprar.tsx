import React from 'react';

import logo from '../img/logo.png';
import { BoxConfigurar } from './BoxConfigurar';
/* import './Comprar.ts'; */
import * as S from './ts/Comprar';

export const Comprar = () => {
  return (
    <S.Box>
      <header>
        <img className="logo" src={ logo } alt="logo da empresa web motors"/>
      </header>
      <div className="boxComponent">
        <div className="boxEscolher">
          <a className="ativar"href="http">
            <div className="ad carro">
              <img className="motoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/car_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <p className="textComprar">COMPRAR</p>
                <p>CARROS</p>
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
        <a className="vender"href="http">
          <p className="venderCarro">Vender meu carro</p>
        </a>
      </div>
      <BoxConfigurar />
    </S.Box>
  );
};
