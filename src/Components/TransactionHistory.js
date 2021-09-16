import React, { useContext } from 'react';

//import Global context

import { GlobalContext } from '../Context/Globalstate';

//import Transaction
import { Transaction } from './Transaction';


export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    console.log(transactions);

    return (
        <div className="transhist">
            <h4>Transaction History</h4>
            <hr className="line"></hr>
                <ul className="list">
                    {transactions.map(transaction => (
                        <Transaction key={transaction.id} transaction={transaction} />
                    ))}
                </ul>
        </div>
    );

}