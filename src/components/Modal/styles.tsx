import styled, { css } from "styled-components";

export interface ModalProps {
    active: boolean;
}

const active = css`
    background: rgba(0, 0, 0, 0.4);
    pointer-events: all;
    z-index: 99;
    transition: all 0.5s;
    .container-body {
        top: 50% !important;
        transition: all 0.5s;
    }

    @media (max-width: 480px) {
        .container-body {
            top: 50% !important;
        }
    }
`;

const scroll = css`
    overflow-y: scroll;
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        border-radius: 5px;
    }

    &::-webkit-scrollbar:vertical {
        width: 5px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar:horizontal {
        height: 12px;
        border-radius: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(89, 92, 118, 0.5);
        border-radius: 5px;
    }

    &::-webkit-scrollbar-track {
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 5px;
    }
`;

export const Container = styled.div<ModalProps>`
    width: 100vw;
    height: 100vh;
    top: 0px;
    left: 0px;
    position: fixed;
    background-color: transparent;
    z-index: -1;
    pointer-events: none;
    ${(props) => (props.active ? active : null)};
    transition: all 0.5s;
    .container-body {
        position: absolute;
        top: -5000px;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        align-items: center;
        background-size: contain;
        background-repeat: no-repeat;
        transition: all 0.5s;
        /* ${scroll} */
    }

    @media (max-width: 480px) {
        .container-body {
            width: 90%;
        }
    }
`;

export const DetalhesArquivo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.white};
    width: 1064px;
    border-radius: 16px;
    padding: 20px;
    margin: 0 auto;
    h3 {
        font-weight: bold;
        font-size: 24px;
        line-height: 130%;
        text-align: center;
    }
    img {
        margin: 30px 0;
    }
    button {
        width: 295px;
    }
`;

export const Topo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .close-modal {
        margin: 0;
        cursor: pointer;
    }
    .usuarios,
    .link,
    .erro {
        display: flex;
        align-items: center;
        img {
            margin-right: 10px;
        }
        span {
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            color: ${(props) => props.theme.colors.gray300};
        }
    }
`;

export const Erros = styled.div`
    border-top: 1px solid #d0d0d0;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    .ver-todos {
        cursor: pointer;
        font-weight: bold;
        font-size: 15px;
        line-height: 18px;
        color: ${(props) => props.theme.colors.primary};
    }
    .erro {
        display: flex;
        align-items: center;
        img {
            margin-right: 10px;
        }
        span {
            font-weight: 500;
            font-size: 15px;
            line-height: 18px;
            color: ${(props) => props.theme.colors.gray700};
        }
    }
`;
