import React, { useContext } from 'react';

import { GlobalContext } from '../Context/Globalstate';

export const AccountSummary = () => {

    const { transactions } = useContext(GlobalContext);

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].transactionamount < 0) {
                continue;
            }
            income = income + transactions[i].transactionamount;
        }
        return income;
    }

    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.length; i++) {
            if (transactions[i].transactionamount < 0) {
                expense = expense + transactions[i].transactionamount;
            }
        }
        return expense;
    }

    return (
        <div className="acountsum">
            <div className="col-5">
                <h4>INCOME</h4>
                <h4 className="incomee">${getIncome()}</h4>
            </div>
            <div className="col-5">
                <h4 >EXPENSE</h4>
                <h4 className="expensee">${getExpense()}</h4>
            </div>
        </div>
    );
}