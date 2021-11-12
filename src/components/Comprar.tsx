import React, { useState } from 'react';

import logo from '../img/logo.png';
import { BoxConfigurar } from './BoxConfigurar';
import * as S from './ts/Comprar';

export const Comprar = () => {
  const [activeCarro, setActiveCarro] = useState(true);
  const [activeMoto, setActiveMoto] = useState(false);

  function ativar(a: any, b: any) {
    setActiveCarro(a);
    setActiveMoto(b)
  }

  return (
    <S.Box>
      <header>
        <S.Logo src={ logo } alt="logo da empresa web motors"/>
      </header>
      <S.BoxComponent>
        <S.BoxEscolher className="boxEscolher">
          <S.TagA if={activeCarro} onClick={() => ativar(true, false)}>
            <S.AdFlex className="ad carro">
              <S.MotoCar className="MotoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/car_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <S.TextComprar>COMPRAR</S.TextComprar>
                <p>CARROS</p>
              </div>
            </S.AdFlex>
          </S.TagA>
          <S.TagA if={activeMoto} onClick={() => ativar(false, true)}>
            <S.AdFlex className="ad moto">
              <S.MotoCar className="MotoCar" src="https://cdn.webmotors.com.br/webmotors/Content/assets/img/bike_icon_gray.svg" alt="logo da empresa web motors"/>
              <div>
                <S.TextComprar>COMPRAR</S.TextComprar>
                <p>MOTOS</p>
              </div>
            </S.AdFlex>
          </S.TagA>
        </S.BoxEscolher>
        
        <S.Vender className="vender"href="http">
          <S.VenderCarro className="venderCarro">Vender meu carro</S.VenderCarro>
        </S.Vender>
      </S.BoxComponent>
      <BoxConfigurar />
    </S.Box>
  );
};
