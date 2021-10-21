import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    p {
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 100%;
        color: #050505;
        margin-left: 8px;
    }
    .toggle {
        background: #b2b2b2;
        border-radius: 250px;
        width: 39px;
        height: 21px;
        position: relative;
        cursor: pointer;
        transition: all 0.5s;
        &.active {
            background-color: #44e0a1;
            transition: all 0.5s;
            span {
                left: 20px;
                transition: all 0.5s;
            }
        }
        span {
            width: 15px;
            height: 15px;
            background: #ffffff;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 5px;
            transition: all 0.5s;
        }
    }
`;
