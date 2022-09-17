import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
`;

export const Content = styled.div`
  width: 1120px;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 600px) {
    padding: 5px;
  }
`;

export const Ul = styled.ul`
  overflow-x: auto;
  height: inherit;
  &::-webkit-scrollbar {
    width: 12px;
    border-radius: 10px;
    background-color: whitesmoke; 
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: darkgray; 
  }
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  text-align: start;
  word-break: break-word;
  margin: 10px 10px 20px;
  box-shadow: 1px 1px 1px 2px gray;
  gap: 5px;
  border-radius: 10px;
  padding: 18px; /*10px*/
  @media (max-width: 760px) {
   font-size: 13px;
  }
`;

export const TitleProject = styled.strong`
color: #000;
-webkit-text-stroke: 0.35px ${({ theme }) => theme.text};
 text-stroke: 0.35px ${({ theme }) => theme.text};
background-image:
  linear-gradient(90deg, #205E9B, #0575E6, #021B79);
  -webkit-background-clip: text;
  color: transparent;
  font-size: 175%
`;

export const Url = styled.span`
a:link { color: inherit;
  text-decoration: none;
  }
a:visited
   { color:inherit; }
&:hover { transform: scale(1.020); }
`;

export const Created_at = styled.span``;

export const Updated_at = styled.span``;

export const Language = styled.span``;

export const Description = styled.span``;

export const Stargazers_count = styled.span``;