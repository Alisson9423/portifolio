import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        outline: 0;
        box-sizing: border-box;
    }

    #root{
        overflow-x: hidden;
    }

    *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #10161B;
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
    }

    button{
        background: ${({ theme }) => theme.colors.transparent};
        cursor: pointer;
        border: none;
    }
`;
