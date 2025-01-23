/* This is the root component of the app. */
import React from 'react';

/* Import multiple child components for rendering */
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';
/* The <GlobalProvider> enables all child components to access the global state and dispatch actions using the GlobalContext. 

How it Works

    GlobalProvider Context Wrapper:
        Encapsulates the components with a shared global state.

    Component Hierarchy:
        Components like Balance and TransactionList display or interact with transaction data.
        These components rely on the global state managed in GlobalState.js and AppReducer.js.
    */

import './App.css';

function App() {
  return ( 
    /* Wrap the entire app inside the <GlobalProvider> */
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
