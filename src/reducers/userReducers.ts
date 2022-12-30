import { reducerActionType } from "../types/reducerActionType";
import { UserType } from "../types/UserType";

export const UserInitialStates: UserType = {
    fullName: '',
    birthDate: '',
    cpf: '',
    phone: 0,
    email: '',
    password: ''

}

export const userReducer = (state: UserType, action: reducerActionType) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                fullName: action.payload.fullName,
                birthDate: action.payload.birthDate,
                cpf: action.payload.cpf,
                phone: action.payload.phone,
                email: action.payload.email,
                password: action.payload.password
            };
            break;
    }

    return state;
}