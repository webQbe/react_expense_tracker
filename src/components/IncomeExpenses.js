import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount)

  const income = amounts
    .filter(item => item > 0) /* Get positive values */
    .reduce((acc, item) => (acc += item), 0) /* Get total income */
    .toFixed(2);

  const expense = ( amounts
    .filter(item => item < 0) /* Get negative values */
    .reduce((acc, item) => (acc += item), 0) * -1 /* Get total expense */
  ).toFixed(2);

  return (
    <div className="inc-exp-container"> 
        <div>
            <h4>Income</h4>
            <p className="money plus">{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p className="money minus">{expense}</p>
        </div>
    </div> 
  )
}
