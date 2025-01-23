import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  return (
    <> 
        <h3>History</h3>
        <ul className="list">
            {transactions.map(transaction => (
                /* Output each item to component with a key  */
                <Transaction key={transaction.id} transaction={transaction} />
              ))}
        </ul>
    </>
  )
}
