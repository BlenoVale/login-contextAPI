import { useContext, useState } from 'react';
import * as C from './styles';
import { Context } from '../../contexts/Contexts';
import { Link, useNavigate } from 'react-router-dom';

export const Login = () => {
    const { state, dispatch } = useContext(Context);
    const [email, setEmailInput] = useState<string>();
    const [senha, setSenhaInput] = useState<string>();
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.getAttribute('data-input')) {
            case 'email':
                return setEmailInput(e.target.value);
                break;
            case 'senha':
                return setSenhaInput(e.target.value);
                break;
        }
    }

    const verifyCredentials = () => {
        if (state.user.email === email && state.user.password === senha) {
            setIsRegister(true);
            navigate('/home');
        } else {
            alert('E-mail ou Senha Inválido!')
        }
    }

    return (
        <C.Container>
            <C.Title>Login do Usuário</C.Title>
            <C.Form>
                <C.Label>*E-mail</C.Label>
                <C.Input type='text' data-input='email' onChange={handleChangeInputs}></C.Input>

                <C.Label>*Senha</C.Label>
                <C.Input type='password' data-input='senha' onChange={handleChangeInputs}></C.Input>

                <C.Button onClick={verifyCredentials}>Entrar</C.Button>

                <C.Info>Não tem cadastro?
                    <Link to={`/cadastrar`}>
                        Cadastre-se
                    </Link>
                </C.Info>
            </C.Form>
        </C.Container>
    );
}