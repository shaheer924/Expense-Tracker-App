import React,{ useContext } from 'react';


//import global state
import { GlobalContext } from '../Context/Globalstate';


export const Balance = () => {

    const { transactions }=useContext(GlobalContext);
    const getBalance = () =>{
        let Balance = 0;
        for(var i=0 ; i< transactions.length ; i++ ){
            Balance = Balance + transactions[i].transactionamount;
        }
        return Balance;
    }

    return (
        <div className="balance">
            <hr className="line"></hr>
            <h2>Current Balance</h2>
            <h1>${getBalance()}</h1>
            <hr className="line"></hr>
        </div>
    );
}