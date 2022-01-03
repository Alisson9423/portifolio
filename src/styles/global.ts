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
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all 0.5s;
    }

    button{
        background: transparent;
        cursor: pointer;
        border: none;
    }

    .combo-box-select{
    
        span{
            color: ${({ theme }) => theme.colors.white};
        }

        &.multipleSelect{
            .MuiInput-root{
                .MuiInput-input{
                    margin-top: 16px;
                }
            }
        }

        &.MuiAutocomplete-root{
            .MuiAutocomplete-tag{
                background: ${({ theme }) => theme.colors.primary};
            }

            .MuiOutlinedInput-root{
                padding: 0px !important;
                .MuiAutocomplete-input{
                    padding: 4px 4px 4px 0px;
                    &:before{
                        border-bottom: 1px solid ${({ theme }) =>
                            theme.colors.secondary} !important;
                    }
                }
            }

            .MuiInput-root{
                &::after{
                    border-bottom: 1px solid ${({ theme }) =>
                        theme.colors.secondary} !important;
                }
                &:before{
                    border-bottom: 1px solid ${({ theme }) =>
                        theme.colors.secondary} !important;
                }
            }

            &:hover{
                .MuiOutlinedInput-notchedOutline{
                    border: 1px solid #13393B;
                }
            }

            .MuiAutocomplete-input{
                color: ${({ theme }) => theme.colors.white};
                font-weight: bold;
                &::placeholder{
                    color: ${({ theme }) => theme.colors.white};
                    font-weight: 400;
                }
            }

            .MuiInputLabel-root{
                left: 0px;
                top: 0px;
                &.MuiInputLabel-formControl{
                    color: ${({ theme }) => theme.colors.secondary};
                    font-weight: 400;
                    font-size: 1rem;
                }
            }

            .MuiAutocomplete-endAdornment{
                top: calc(50% - 12px);
            }

            .MuiOutlinedInput-notchedOutline{
                border: 1px solid transparent !important;
            }
        }
    }

    .MuiDrawer-paperAnchorRight {
        transition: all .5s !important;
        background: ${({ theme }) => theme.colors.primary} !important;
            .MuiBox-root{
                background: ${({ theme }) => theme.colors.primary} !important;
                
                .MuiList-root{
                    background: ${({ theme }) =>
                        theme.colors.primary} !important;
                        .MuiListSubheader-root{
                            background: ${({ theme }) =>
                                theme.colors.primary} !important;
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
