import styled from 'styled-components';

export const Container = styled.div`
background: linear-gradient(to right, #205E9B, #0575E6, #021B79); 
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${({ theme }) => theme.text};
  color: white;
`;

export const Content = styled.div`
  width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const Title = styled.div`
  font-size: 30px;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 560px) {
    z-index: 2;//evita que a barra de menu fique por baixo da imagem
    flex-direction: column;
    background-color: #161616;
    position: fixed;
    height: 100%;
    gap: 0px;
    top: 0px;
    right: 0px;
    width: 60%;
    right: ${props => props.sidebar ? '0' : '-100%'};
    transition: 0.5s;
    overflow-x: auto;                          
    &::-webkit-scrollbar {
      width: 12px;
      border-radius: 10px;
      background-color: whitesmoke; 
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: darkgray; 
    } 
    a {
      margin-top: 60px; //assim a barra de menu fica melhor em telas menores
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
  }
`;

export const Ancora = styled.a`
  font-size: 20px;
  height: 100px;
  transition: 0.3s;
  
  &.active {
    background-color: rgba(0, 0, 0, 0.45);
  }
  @media (min-width: 560px) {
    align-items: center;
    display: flex;
    padding: 0px 10px;
  }
`;

export const Menu = styled.div`
  font-size: 30px;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const CloseSidebar = styled.div`
  font-size: 30px;
  right: 15px;
  top: 35px;
  position: absolute;
  display: none;
  cursor: pointer;
  
  @media (max-width: 560px) {
    display: flex;
  }
`;

export const ContentTitle = styled.div`
  text-align: end;
`;

export const SubTitle = styled.span``;