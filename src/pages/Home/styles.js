import styled from 'styled-components';

// Wrapper do Mapa

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh;
  overflow-y: auto;
`;

// Criando area de Busca
export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

// Estilizando Logotipo
export const Logo = styled.img`
  margin-bottom: 15px;
`;

// Mapa

export const Map = styled.div`
  background-color: red;
  width: 500px;
`;
