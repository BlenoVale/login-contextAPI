import styled from "styled-components";

export const Conteiner = styled.div`
    flex: 1;
    width: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HomeArea = styled.div`
    width: 600px;
    height: 600px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 1px 1px 15px #282a35;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const IMGHome = styled.img`
    width: 170px;
    height: auto;
    margin-top: 60px;
    margin-bottom: 40px;
`;

export const Title = styled.div`
    font-size: 35px;
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
`;

export const UserName = styled.div`
    font-size: 35px;
    color: #074785;
`;

export const UserInfos = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 18px;
    color: #074785;
`;

export const TitleInfos = styled.div`
    color: #000;
    font-size: 25px;
    margin: 15px 0;
`;