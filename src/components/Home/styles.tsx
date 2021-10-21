import { Flex } from "aplication-yetz";
import styled from "styled-components";

export const Container = styled.div`
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

export const Form = styled.form`
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
