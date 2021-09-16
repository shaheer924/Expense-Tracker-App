import React, { useContext } from 'react';

import { GlobalContext } from '../Context/Globalstate';
export const Transaction = ({ transaction }) => {

    const { deltransactions } = useContext(GlobalContext);
    let sign;
    let transactiontype;
    if (transaction.transactionamount < 0) {
        sign = '-';
    }
    else {
        sign = '+';
    }
    if (transaction.transactionamount > 0) {
        transactiontype = 'plus';
    }
    else {
        transactiontype = 'minus';
    }

    return (
        <li>
            <div className="transs">
                <button className="delbtn" onClick={() => deltransactions(transaction.id)}>X</button>
                <div className="transac">
                    <div className="descript"><h5 className="dhead">{transaction.description}</h5></div>
                    <div className="amnt"><h5 className="ahead">{sign}{Math.abs(transaction.transactionamount)}</h5></div>
                </div>
            </div>
        </li>
    );
}