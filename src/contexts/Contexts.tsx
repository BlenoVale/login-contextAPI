import React, { createContext, useReducer } from 'react';
import { UserType } from '../types/UserType';
import { UserInitialStates, userReducer } from '../reducers/userReducers';
import { reducerActionType } from '../types/reducerActionType';

type initialStatesType = {
    user: UserType;
}

type ContextType = {
    state: initialStatesType;
    dispatch: React.Dispatch<any>;
}

const initialStates = {
    user: UserInitialStates
}

export const Context = createContext<ContextType>({
    state: initialStates,
    dispatch: () => null
});

const mainReducer = (state: initialStatesType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(mainReducer, initialStates);

    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
}


