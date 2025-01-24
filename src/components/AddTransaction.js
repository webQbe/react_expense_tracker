import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => { 
    // Manage local state for the transaction's text and amount
    const [text, setText] = useState(''); /* Default state blank */
    const [amount, setAmount] = useState(0); /* Default state 0 */

    // Enable component to interact with the global state
    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault(); // Prevents the form's default submission behavior
        /* Create new transaction object */        
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000), // Generates a random ID
            text, // Description of the transaction
            amount: +amount // Amount (converted to number)
        }

        // Add the transaction to the global state
        addTransaction(newTransaction);
    }

  return (
    /* Provide UI to add a new transaction. 
        Call onSubmit when the form is submitted, triggering the state update.*/
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Text</label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder="Enter text..." />
            </div>
            <div className="form-control">
                <label htmlFor="amount"> Amount <br />
                    (negative - expense, positive - income)
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
  )
}
