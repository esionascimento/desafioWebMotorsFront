import React, { useState } from 'react';

import logo from '../img/logo.png';
import { BoxConfigurar } from './BoxConfigurar';
import * as S from './ts/Comprar';

export const Comprar = () => {
  const [active, setActive] = useState(false);

  function ativar() {
    setActive(true);
  }

  return (
    <S.Box>
      <header>
        <S.Logo src={ logo } alt="logo da empresa web motors"/>
      </header>
      <S.BoxComponent>
        <S.BoxEscolher className="boxEscolher">
          <S.TagA if={!active} href="http" onClick={ativar}>
            <S.AdFlex className="ad carro">
              <S.MotoCar className="MotoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/car_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <p className="textComprar">COMPRAR</p>
                <p>CARROS</p>
              </div>
            </S.AdFlex>
          </S.TagA>
          <S.TagA if={active} onClick={ativar} href="https://">
            <S.AdFlex className="ad moto">
              <S.MotoCar className="MotoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/bike_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <p className="textComprar">COMPRAR</p>
                <p>MOTOS</p>
              </div>
            </S.AdFlex>
          </S.TagA>
        </S.BoxEscolher>
        <a className="vender"href="http">
          <p className="venderCarro">Vender meu carro</p>
        </a>
      </S.BoxComponent>
      <BoxConfigurar />
    </S.Box>
  );
};
