import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  @media (max-height: 340px) { /* evita que o texto invada o cabeçalho*/
    height: auto;
  }
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: space-around;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
  
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Name = styled.span`
  font-size: 40px;
  font-weight: 500;
  @media (max-width: 760px) {
    font-size: 25px;
  }
`;

export const Function = styled.span`
  color: ${({ theme }) => theme.text2};
  margin-bottom: 10px;
`;

export const Intro = styled.span`
  color: ${({ theme }) => theme.text2};
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 15px;
  }
`;

export const LinkProjects = styled.button`
  width: 10rem;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  font-weight: bold;
  svg {
    font-size: 20px;
  }
`;

export const Logo = styled.div`
  width: 31%;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1/1;/**/
    border-radius: 2rem;
    background: linear-gradient(to right, #205E9B, #0575E6, #021B79);
    display: grid;
    place-items: center;/**/
  img {
    width: 20rem;
    height: 20rem;
  }
  @media (max-width: 1200px) {/*novo media query*/
    width: 35%;
    img {
      width: 18rem;
      height: 18rem;
    }
  }
  @media (max-width: 760px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    img {
      width: 12rem;
      height: 12rem;
    }
  }
  @media (max-height: 500px) {
    img {
      display: none;
    }
    display: none;
    }
  }
 
`;

export const Img = styled.img`
  width: 50%;
  border-radius: 2rem; /*modificado*/
  justify-self: center;
  align-self: center;
  overflow: hidden;
  transform: rotate(-12deg);
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: .6s ease-out;
  filter: drop-shadow(12px 12px 10px rgba(0,0,0,.6));/*modificado*/
  &:hover {/*assim*/
    transform: rotate(0);
    filter: none;
  }/*que usa o hover*/
`;