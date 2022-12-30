import styled from "styled-components";

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1%;
`;

export const Title = styled.div`
    font-size: 30px;
    margin-bottom: 30px;
    width: 600px;
`;

export const Form = styled.form`
    width: 600px;
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

export const InputDate = styled.input`
    width: 200px;
    height: 40px;
    border-radius: 6px;
    padding-left: 8px;
    font-size: 18px;
`;

export const InputSmall = styled.input`
    width: 300px;
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