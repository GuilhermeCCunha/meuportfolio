import styled from "styled-components";


export const StyledThemeButton = styled.button`
    background-color: ${props => props.theme.accent};
    color: ${props => props.theme.text};
    height: 35px;/*30px*/
    width: 35px;/*30px*/
    border-radius 30px; /**/
    margin-left: 36.5%; /* arruma no canto*/
    margin-top: 0.33%; 
    position: absolute;
    border: none;
    z-index: 1;   
 `;
