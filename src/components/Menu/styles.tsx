import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 5%;
    right: 5%;
    background-color: ${({ theme }) => theme.colors.white};
    width: 40px;
    padding-left: 12px;
    border-radius: 50%;
`;
