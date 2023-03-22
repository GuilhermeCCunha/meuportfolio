import { createGlobalStyle } from 'styled-components'

export default  createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        //-webkit-transition: 0.25s;
        //transition: 0.25s;
        //-moz-transition: 4.25s; 
         /* efeito bonito de transição não apagar  0.25s parece bom*/
    } 
    .container {
        margin: auto;
        width: 50%;        
        /*padding: 10px;*/
        text-align: center;       
    }
    body {
        /*overflow-y: hidden;*/
        background: ${(props) => props.theme.background};
        color: ${props => props.theme.text};
        text-align: -webkit-center;        
    }

    a, button {
        cursor: pointer;
      }      

    h1 {
        color: ${props => props.theme.titles};        
    }
    
`