/* Define how state changes based on dispatched action */
export default (state, action) => {
    /* Specify the logic for updating state based on the action.type. */
    switch(action.type) {
        default: 
        /* Currently, the reducer only has a default case that returns the unchanged state. Will evolve to handle various actions like adding, deleting, or modifying transactions. */
            return state;
    }
}

/* How it Works

    Takes in the current state and an action.
    Uses a switch statement to determine how the state should be updated based on the action.type.
    Returns the updated state or the unchanged state if the action.type is unrecognized.
*/