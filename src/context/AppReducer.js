/* Define how state changes based on dispatched action */
export default (state, action) => {
    /* Specify the logic for updating state based on the action.type. */
    switch(action.type) {

        case 'DELETE_TRANSACTION':
            return {
                ...state, 
                transactions: state.transactions
                                .filter(transaction => transaction.id !== action.payload)

            /* DELETE_TRANSACTION Case:
                -...state: The spread operator creates a shallow copy of the existing state to avoid directly mutating it.
                - Filters the transactions array to remove the transaction whose id matches action.payload.
                - Returns the updated state. 

                - Filter Mechanism:
                    The filter() method is used to create a new array that excludes the transaction with the specified ID.
                    The condition transaction.id !== action.payload ensures that only transactions with IDs not equal to the given ID remain in the resulting array.
            */                     
            }
        
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]

            /* 'ADD_TRANSACTION' Case

                Case Identifier:
                    Listens for an action of type 'ADD_TRANSACTION'
                
                State Update:
                    ...state: The spread operator creates a shallow copy of the existing state to avoid directly mutating it.
                    
                    transactions: [action.payload, ...state.transactions]
                    Updates the transactions array in the state by:
                        Adding the new transaction (action.payload) to the beginning of the array.
                        Spreading (...state.transactions) the existing transactions into the array.

                    This ensures :
                    - The new transaction is the most recent one and appears at the top when rendered.
                    - The state is not mutated by creating a new array with the updated transactions.
            */
            }

        default: 
        /* Return current state if the action type is unrecognized. */
            return state;
    }
}

/* How it Works
    Takes in the current state and an action.
    Uses a switch statement to determine how the state should be updated based on the action.type.
*/