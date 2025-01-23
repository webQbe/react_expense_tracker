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
                - Filters the transactions array to remove the transaction whose id matches action.payload.
                - Returns the updated state. 
                
                - Filter Mechanism:
                    The filter() method is used to create a new array that excludes the transaction with the specified ID.
                    The condition transaction.id !== action.payload ensures that only transactions with IDs not equal to the given ID remain in the resulting array.
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