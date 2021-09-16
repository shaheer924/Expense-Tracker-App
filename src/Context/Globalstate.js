import React, { createContext, useReducer } from 'react';

//import AppReducer
import AppReducer from './AppReducer';

//create intialstate

const intialstate = {
    transactions: []
};

//create global state

export const GlobalContext = createContext(intialstate);

//create a provider for Global Context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, intialstate);
    function deltransactions(id){
        dispatch({
            type: "DELETE",
            payload: id
        });
    }

    function addtransactions(transaction){
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            { 
                transactions: state.transactions,
                deltransactions,
                addtransactions
                }
            }>
            {children}
        </GlobalContext.Provider>
    );
}