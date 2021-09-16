import React, { useState, useContext } from 'react';

import { GlobalContext } from '../Context/Globalstate';


export const AddTransaction = () => {

    let [description, setdescription] = useState("");
    let [transactionamount, settransactionamount] = useState(0);
    const {addtransactions} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransactions = {
            id: Math.random()*10000000+1,
            description,
            transactionamount: +transactionamount
        }

        addtransactions(newTransactions);
    }
    return (
        <div className="addtrans">
            <h4 className="addhead">Add New Transaction</h4>
            <hr className="line"></hr>

            <form className="forms" onSubmit={onSubmit}>
                <label htmlFor="description"><h5>Description</h5></label>
                <input
                    className="inputer"
                    type="text"
                    placeholder="Enter Description"
                    id="description"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                    required
                ></input>
                <br />
                <label htmlFor="transactionamount"><h5>Amount</h5></label>
                <input
                    className="inputer"
                    type="number"
                    id="transactionamount"
                    placeholder="Enter Amount"
                    value={transactionamount}
                    onChange={(e) => settransactionamount(e.target.value)}
                    required
                ></input>
                <br/>
                <br/>
                <input
                    className="submission"
                    type="submit"
                    value="Add Transaction"></input>
            </form>
        </div>
    );
}