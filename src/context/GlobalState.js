import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Define the initial global state
const initialState = {
    transactions: []
}

// Create context object to share state across components.
export const GlobalContext = createContext(initialState);

// Create context provider component that wraps the app and manages the global state.
export const GlobalProvider = ({ children }) => {
    // Use useReducer hook for state management with the AppReducer function
    const [ state, dispatch ] = useReducer(AppReducer, initialState);
        /* State Management
            state: Holds the current global state.
            dispatch: A function used to send actions to the reducer (AppReducer).
            AppReducer: The function that processes the actions and updates the state.
        */

    // Actions

    function deleteTransaction(id){
        // Send action to the reducer
        dispatch({
            // Creates an action object
            type: 'DELETE_TRANSACTION', 
            /* A string identifier for the action (DELETE_TRANSACTION) */
            payload: id 
            /* The data required to perform the action (in this case, the id of the transaction to delete). */
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction 
            /* Dispatches an action of type 'ADD_TRANSACTION' with the transaction object as the payload */
        });
    }

    return(<GlobalContext.Provider value={{
            /* Pass transactions state and functions as values */
            transactions: state.transactions, 
                deleteTransaction, // For deleting
                addTransaction // For adding

            /* Enable child components to consume the context and use these values */
        }}>
            {children} 
        </GlobalContext.Provider>);
} 

/*  Purpose

        Centralizes and shares the application's state (transactions) with all components via the Context API.

        Provides components with access to the state (state.transactions) and dispatch functions to update the state.

    How it Works

        The GlobalProvider:
            Exposes the transactions state to any component subscribing to GlobalContext.
            Will enable state updates through dispatch 
 */