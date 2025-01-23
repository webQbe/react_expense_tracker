import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext); 

  /* Create a new array containing only the amount values */
  const amounts = transactions.map(transaction => transaction.amount);

  /* Calculate the Total Amount */
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  /* reduce Function:

      Aggregates the values in the amounts array by iterating through each item.

      acc (accumulator): Holds the running total of amounts. 
        Starts with an initial value of 0 (specified as the second argument to reduce).

      For each item in the amounts array:
          Adds item to acc (acc += item).

      Returns the final total.
      

    .toFixed(2):

      Converts the result to a string, ensuring it has 2 decimal places 
      (useful for currency or financial data).
      Example:
          320 becomes "320.00".
    */

  return (
    <>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
    </>
  )
}
