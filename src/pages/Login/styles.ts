import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
`;

export const Title = styled.div`
    font-size: 40px;
    margin-bottom: 30px;
`;

export const Form = styled.form`
    width: 302px;
    heigth: auto;
`;

export const Label = styled.div`
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 5px;
`;

export const Input = styled.input`
    width: inherit;
    height: 40px;
    border-radius: 6px;
    padding-left: 8px;
    font-size: 18px;
`;

export const Button = styled.div`
    width: inherit;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #4939ac;
    border-radius: 6px;
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 19px;
    color: #fff;
    cursor: pointer;

    &:hover {
        background-color: #322586;
    }
`;

export const Info = styled.div`
    width: inherit;
    display: flex;
    justify-content: center;
    gap: 10px;
`;

export const LinkPage = styled.a``;