import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(95vh - 95px);
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

export const Title = styled.strong`  font-size: 40px;
font-weight: 500;
@media (max-width: 760px) {
  font-size: 25px;
}`;

export const Infos = styled.div`
  text-align: start;
  width: 50%;
  display: grid;
  @media (max-width: 760px) {
    width: 90%;
  }
`;

export const Intro = styled.span`
  color: lightgray;
  text-align: justify;
  @media (max-width: 760px) {
    font-size: 15px;
  }
`;


export const Nextlogo = styled.div`
  height: calc(45vh - 45px);
  width: 31%;
  align-items: end;
  justify-content: end;
  aspect-ratio: 1/1;/**/
    border-radius: 2rem;
    display: grid;
    place-items: end;/**/
    @media (max-width: 600px) {
   
      height: calc(25vh - 25px);
    
  }

`;



export const Img = styled.img`

  width: 10rem;
  height: 10rem;

  @media (max-width: 600px) {
   
      width: 5rem;
      height: 5rem;
    
  }

`;