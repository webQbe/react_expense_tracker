/* Renders Individual Transactions */
import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    // Subscribe to the GlobalContext & Retrieve deleteTransaction function
    const { deleteTransaction } = useContext(GlobalContext);

    // Decide + or - sign based on amount
    const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
        {transaction.text} 
            <span>{sign}${Math.abs(transaction.amount)}</span> 
        <button onClick={() => deleteTransaction(transaction.id)} 
          className="delete-btn">x</button>
    </li>
    /* onClick={() => deleteTransaction(transaction.id)}:
        - Triggers the deleteTransaction function when clicked
        - Passes the transaction.id as the id argument to identify the transaction to delete.
        
      Math.abs(transaction.amount) : Always outputs positive amount 
    */
  )
}
