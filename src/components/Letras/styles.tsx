import { Flex, Box } from "aplication-yetz";
import styled from "styled-components";
import { Form as Formik } from "formik";

export const Container = styled.div`
    padding-bottom: 100px;
    li {
        list-style: none;
    }
    .btn {
        background-color: #8d56fd;
        border: 0;
        border-radius: 10px;
        color: #fff;
        padding: 4px 10px;
    }

    .songs-container {
        list-style-type: none;
        padding: 0;
        margin: 30px auto;
        max-width: 100%;
        width: 500px;
        background-color: #10161b;
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
        color: #ea2234;
        text-align: center;
    }

    .song-artist {
        color: white;
        opacity: 0.4;
        max-width: 400px;
    }

    .lyrics-container {
        color: white;
        opacity: 0.4;
    }

    .lyrics {
        margin-top: 20px;
        line-height: 1.5;
    }
`;

export const HeaderStyles = styled(Flex)`
    background-image: url("https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    position: relative;
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
    }
`;

export const Form = styled(Formik)`
    position: relative;
    width: 500px;
    max-width: 100%;
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
        background-color: #8d56fd;
        border: 0;
        border-radius: 50px;
        color: #fff;
        font-size: 16px;
        padding: 13px 30px;
        cursor: pointer;
        &:active {
            transform: scale(0.95);
        }
    }
`;

export const TableStyles = styled(Box)`
    .table {
        .header {
            padding-top: 32px;
        }
        .tr {
            &.header {
                .th {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 1rem;
                    font-weight: 400;
                }
            }

            &.body {
                &.active {
                    background-color: #40444b;
                }
                .td {
                    img {
                        border-radius: 50%;
                        margin-right: 16px;
                    }
                }
            }
        }
    }
`;

export const ModalStyles = styled(Box)`
    width: 600px;
    border-radius: 5px;
    .container-header {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 20px;
        background-color: ${({ theme }) => theme.colors.fundoBase};
        border-radius: 5px 5px 0 0;
    }

    .content-body {
        padding: 20px;
        max-height: 70vh;
        width: 100%;
        overflow-y: scroll;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 0px 0px 5px 5px;
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
`;
