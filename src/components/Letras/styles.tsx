import { Flex, Box } from "alisson-application";
import closeImg from "../../assets/img/close.svg";
import styled from "styled-components";
import { Form as Formik } from "formik";

export const Container = styled.div`
    min-height: 100vh;
    padding-bottom: 100px;
    transition: all 0.5s;
    li {
        list-style: none;
    }
    .btn {
    }

    .songs-container {
        list-style-type: none;
        padding: 0;
        margin: 30px auto;
        max-width: 100%;
        width: 500px;
        background-color: ${({ theme }) => theme.colors.primary};
        transition: all 0.5s;
    }

    .song {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin: 10px 0;
    }

    .prev-and-next-container h2 {
        font-weight: 300;
    }

    .prev-and-next-container {
        display: flex;
        justify-content: center;
    }

    .prev-and-next-container button {
        transform: scale(1.3);
        margin: 15px;
    }

    .warning-message {
        color: ${({ theme }) => theme.colors.warning};
        transition: all 0.5s;
        text-align: center;
    }

    .song-artist {
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.5s;
        opacity: 0.4;
        max-width: 400px;
    }

    .lyrics-container {
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.5s;
        opacity: 0.4;
    }

    .lyrics {
        margin-top: 20px;
        line-height: 1.5;
    }
`;

export const HeaderStyles = styled(Flex)`
    /* background-image: url("https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"); */
    background-image: ${({ theme }) =>
        theme.isDark
            ? "url('https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')"
            : "url('https://blog.emania.com.br/wp-content/uploads/2015/10/thumb-04.jpg')"};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    position: relative;
    transition: all 0.5s;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.4);
    }
    * {
        z-index: 1;
    }

    h1 {
        margin: 0 0 30px;
        color: ${({ theme }) => theme.colors.primaryBright};
        transition: all 0.5s;
    }
`;

export const Form = styled(Formik)`
    position: relative;
    width: 500px;
    max-width: 100%;
    margin: 0 auto;
    input {
        border: 0;
        border-radius: 50px;
        font-size: 16px;
        padding: 15px 30px;
        width: 100%;
    }

    button {
        position: absolute;
        top: 2px;
        right: 2px;
        background-color: ${({ theme }) => theme.colors.secondary};
        border: 0;
        border-radius: 50px;
        color: ${({ theme }) => theme.colors.white};
        font-size: 16px;
        padding: 13px 30px;
        cursor: pointer;
        transition: all 0.5s;
        &:active {
            transform: scale(0.95);
        }
    }
`;

export const TableStyles = styled(Box)`
    .table {
        button {
            &.btn {
                display: block;
                margin: 0 auto;
            }
        }
        .header {
            padding-top: 32px;
        }
        .tr {
            &.header {
                .th {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 1rem;
                    font-weight: 400;
                    transition: all 0.5s;
                    &:nth-child(4) {
                        text-align: center;
                    }
                }
            }

            &.body {
                cursor: pointer;
                &.active {
                    background-color: ${({ theme }) => theme.colors.secondary};
                    transition: all 0.5s;
                    button {
                        svg {
                            color: #fff !important;
                        }
                    }
                    p {
                        color: #fff;
                    }
                }

                &:hover {
                    background-color: ${({ theme }) => theme.colors.secondary};
                    transition: all 0.5s;
                    button {
                        svg {
                            color: #fff !important;
                        }
                    }
                    p {
                        color: #fff;
                    }
                }
                .td {
                    img {
                        border-radius: 50%;
                        margin-right: 16px;
                    }
                }
            }

            p {
                &.title {
                    /* width: 200px; */
                    text-align: left;
                }
            }
        }
    }

    @media (max-width: 1024px) {
        .table {
            .tr {
                button {
                    width: 100%;
                    p {
                        &.title {
                            width: 100%;
                        }
                    }
                }
            }
        }
    }
`;

export const ModalStyles = styled(Box)`
    width: 600px;
    border-radius: 5px;

    button {
        width: 33px;
        height: 33px;
        &:before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            -webkit-mask: url(${closeImg});
            background-color: ${({ theme }) => theme.colors.primary};
            transition: all 0.5s;
        }
    }

    .container-header {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px;
        background-color: ${({ theme }) => theme.colors.primaryBright};
        border-radius: 5px 5px 0 0;
        transition: all 0.5s;
    }

    .text-content {
        color: ${({ theme }) => theme.colors.white};
        transition: all 0.5s;
    }

    .content-body {
        padding: 20px;
        max-height: 70vh;
        width: 100%;
        overflow-y: scroll;
        background-color: ${({ theme }) => theme.colors.primary};
        border-radius: 0px 0px 5px 5px;
        transition: all 0.5s;
        &::-webkit-scrollbar {
            -webkit-appearance: none;
        }

        &::-webkit-scrollbar:vertical {
            width: 5px;
        }

        &::-webkit-scrollbar:horizontal {
            height: 12px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(89, 92, 118, 0.5);
        }

        &::-webkit-scrollbar-track {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    @media (max-width: 560px) {
        h1 {
            width: 250px;
        }
    }
`;
