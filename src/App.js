import './App.css';
import React from 'react';

//Components
import { GlobalProvider } from './Context/Globalstate';

import Header from './Components/Header'
import { Balance } from './Components/Balance'
import { AccountSummary } from './Components/AccountSummary';
import { TransactionHistory } from './Components/TransactionHistory';
import { AddTransaction } from './Components/AddTransaction';



function App() {
  return (
    <div className="main">
      <GlobalProvider>
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
