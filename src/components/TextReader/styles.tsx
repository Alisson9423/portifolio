import styled from "styled-components";

export const Container = styled.div`
    margin: auto;
    padding: 20px;

    h1,
    h3 {
        text-align: center;
        margin-bottom: 16px;
        transition: all 0.5s;
    }

    .btn {
        cursor: pointer;
        background-color: #11ae68;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-size: 16px;
        padding: 8px;
    }

    .btn:active {
        transform: scale(0.98);
    }

    .btn:focus,
    select:focus {
        outline: 0;
    }

    .btn-toggle {
        display: block;
        margin: auto;
        margin-bottom: 20px;
    }

    .text-box {
        width: 70%;
        position: absolute;
        top: 30%;
        left: 50%;
        transform: translate(-50%, -800px);
        background-color: ${({ theme }) => theme.colors.primary};
        color: #fff;
        padding: 20px;
        border-radius: 5px;
        transition: all 1s ease-in-out;
    }

    .text-box.show {
        transform: translate(-50%, 0);
    }

    select {
        background-color: ${({ theme }) => theme.colors.secondary};
        filter: brightness(1.1);
        border: 0;
        color: #1a2232;
        font-size: 12px;
        height: 30px;
        margin: 0 auto 20px;
        display: block;
        min-width: 260px;
        max-width: 30%;
    }

    .text-box textarea {
        border: 1px ${({ theme }) => theme.colors.secondary} solid;
        border-radius: 4px;
        font-size: 16px;
        padding: 8px;
        margin: 15px 0;
        width: 100%;
        height: 150px;
    }

    .text-box .btn {
        width: 100%;
    }

    .text-box .close {
        float: right;
        text-align: right;
        cursor: pointer;
    }

    main {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 10px;
    }

    @media (max-width: 1100px) {
        main {
            grid-template-columns: repeat(3, 1fr);
        }
    }

    @media (max-width: 760px) {
        main {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media (max-width: 500px) {
        main {
            grid-template-columns: 1fr;
        }
    }
`;

export const ExpressionBbox = styled.div`
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    transition: box-shadow 0.2s ease-out;
    &.active {
        box-shadow: 0 0 10px 5px ${({ theme }) => theme.colors.success};
    }

    img {
        width: 100%;
        object-fit: cover;
        height: 200px;
    }

    .info {
        background-color: ${({ theme }) => theme.colors.secondary};
        color: ${({ theme }) => theme.colors.primaryDark};
        text-transform: uppercase;
        margin: 0;
        padding: 10px;
        text-align: center;
    }
`;
