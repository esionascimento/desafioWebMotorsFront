import styled from 'styled-components';

interface Props {
  if: boolean;
}

export const Box = styled.div `
  margin: 0;
  text-decoration: none;
`;

export const TagA = styled.a<Props>`
  display: flex;
  padding-bottom: 10px;
  margin: 0;
  border-bottom: ${(props) => props.if && `3px solid red`}
`;

export const BoxComponent = styled.div `
  display: flex;
  justify-content: space-between;
`;

export const BoxEscolher = styled.div `
  margin-top: 20px;
  display: flex;
`;

export const AdFlex = styled.div `
  display: flex;
`;

export const MotoCar = styled.img `
  padding-top: 17px;
  margin: 0 15px;
  height: 14px;
`;

export const Logo = styled.img `
  width: 180px;
  height: 50px;
`;

/* 
.ativar {
  border-bottom: 3px solid red;
}

a {
  display: flex;
  padding-bottom: 10px;
  margin: 0;
}

.textComprar {
  font: 10px Arial;
}

.vender {
  width: 200px;
  text-align: center;
  float: right; 
}

.venderCarro {
  border-color: #f89e00;
  margin: auto 0;
  padding: 10px 20px;
  color: #f89e00;
  border-style: solid;
  border-radius: 5px;
  * {
    margin: 0;
    text-decoration: none;
  }
} */