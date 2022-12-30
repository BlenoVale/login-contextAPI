import { useContext, useState } from 'react';
import * as C from './styles';
import { Context } from '../../contexts/Contexts';
import { Link, useNavigate } from 'react-router-dom';

export const Cadastrar = () => {
    const { state, dispatch } = useContext(Context);
    const [nameInput, setNameInput] = useState<string>();
    const [bDateInput, setBDateInput] = useState<string>();
    const [cpfInput, setCPFInput] = useState<string>();
    const [telefoneInput, setTelefoneInput] = useState<string>();
    const [emailInput, setEmailInput] = useState<string>();
    const [senhaInput, setSenhaInput] = useState<string>();
    const [confSenhaInput, setConfSenhaInput] = useState<string>();
    const navigate = useNavigate();

    const handleChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        switch (e.target.getAttribute('data-input')) {
            case 'name':
                return setNameInput(e.target.value);
                break;
            case 'birthDate':
                return setBDateInput(e.target.value);
                break;
            case 'cpf':
                return setCPFInput(e.target.value);
                break;
            case 'telefone':
                return setTelefoneInput(e.target.value);
                break;
            case 'email':
                return setEmailInput(e.target.value);
                break;
            case 'senha':
                return setSenhaInput(e.target.value);
                break;
            case 'confirmarSenha':
                return setConfSenhaInput(e.target.value);
                break;
        }
    }

    const handleRegisterUser = () => {
        if (nameInput == null) {
            alert('Campo Nome não pode ser vázio.');
        } else if (bDateInput == null) {
            alert('Campo Data de Nascimento não pode ser vázio.');
        } else if (emailInput == null) {
            alert('Campo E-mail não pode ser vázio.');
        } else if (senhaInput == null) {
            alert('Campo Senha não pode ser vázio.');
        } else {
            dispatch({
                type: 'REGISTER',
                payload: {
                    fullName: nameInput,
                    birthDate: bDateInput,
                    cpf: cpfInput,
                    phone: telefoneInput,
                    email: emailInput,
                    password: senhaInput
                }
            });
            navigate('/');
        }
    }

    return (
        <C.Container>
            <C.Title>Criar o seu Cadastro</C.Title>

            <C.Form method='post'>
                <C.Label>*Nome Completo</C.Label>
                <C.Input type='text' data-input='name' onChange={handleChangeInputs} required></C.Input>

                <C.Label>*Data de Nascimento</C.Label>
                <C.InputDate type='date' data-input='birthDate' onChange={handleChangeInputs}></C.InputDate>

                <C.Label>*E-mail</C.Label>
                <C.InputSmall type='text' data-input='email' onChange={handleChangeInputs}></C.InputSmall>

                <C.Label>*Senha</C.Label>
                <C.InputSmall type='password' data-input='senha' onChange={handleChangeInputs}></C.InputSmall>

                <C.Button onClick={handleRegisterUser}>
                    Criar seu Cadastro
                </C.Button>
            </C.Form>
        </C.Container>
    );
}