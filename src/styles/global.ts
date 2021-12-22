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
    svg{
        pointer-events: none;
    }

    *, 
    *:after,
    *:before {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
    }

    button{
        background: transparent;
        cursor: pointer;
        border: none;
    }

    .MuiPaper-root {
        background: ${({ theme }) => theme.colors.primary} !important;
        transition: all .5s !important;
        .MuiBox-root{
            background-color: transparent !important;
            .MuiList-root{
                background-color: transparent !important;
                    .MuiListSubheader-root{
                        background-color: transparent !important;
                    }
            }
        }
        .theme {
            position: absolute;
            bottom: 5%;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 250px;
        }
    }

    .container{
        width: 1110px;
        margin: 0 auto;
    }

    .react-jinke-music-player{
        &.react-draggable{
            top: 3.8% !important;
            left: 5% !important;
        }
    }

    @media (max-width: 1280PX) {
        .container{
            width: 90%;
        }
    }
`;
