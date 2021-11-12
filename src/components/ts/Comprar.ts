import styled from 'styled-components';

interface Props {
  if: boolean;
}

export const Box = styled.div `
  width: 933px;
  height: 312px;
  margin: 10px auto;
  border: 1px solid silver;
`;

export const TagA = styled.a<Props>`
  display: flex;
  padding-bottom: 5px;
  width: 150px;
  margin: 0;
  border-bottom: ${(props) => props.if ? `3px solid red` : `none`}
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
  padding-top: 15px;
  margin: 0 15px;
  height: 14px;
`;

export const Logo = styled.img `
  width: 180px;
  height: 50px;
`;

export const TextComprar = styled.p `
  font: 10px Arial;
`;

export const Vender = styled.a `
  width: 200px;
  text-align: center;
  float: right; 
`;

export const VenderCarro = styled.p `
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
`;
