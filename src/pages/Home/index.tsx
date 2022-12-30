import { useContext } from 'react';
import { Context } from '../../contexts/Contexts';
import * as C from './styles';
import BemVindo from '../../images/bemvindo.png';
import { Link } from 'react-router-dom';

export const Home = () => {
    const { state, dispatch } = useContext(Context);

    return (
        <C.Conteiner>
            <C.HomeArea>
                <C.IMGHome src={BemVindo} />
                <C.Title>Bem-vindo <C.UserName>{state.user.fullName}</C.UserName></C.Title>
                <C.UserInfos>
                    <Link to={'/'}>(Logoff)</Link>
                    <C.TitleInfos>Informações do Usuário:</C.TitleInfos>
                    Data de Nascimento: {state.user.birthDate} <br />
                    E-mail: {state.user.email} <br />
                </C.UserInfos>
            </C.HomeArea>
        </C.Conteiner>
    );
}