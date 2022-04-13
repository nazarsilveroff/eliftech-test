import React, {useRef} from 'react';
import {TablesStyled} from "../TablesStyled";
import {useDispatch} from "react-redux";
import {deleteBank} from "../../../redux/banks/banksSlice";


function CreatedBanksTable({resArr, findBankFn,changeStatus}) {
    const dispatch = useDispatch()

    const editButtonHandler =  (e) => {
        const {target} = e
        const {id} = target
        changeStatus(true)
        findBankFn(id)
    }

    if (!resArr || resArr.length === 0) {
        return
    }
    return (
        <TablesStyled>
            <caption>Your list of all earlier created banks</caption>
            <thead>
            <tr>
                <th>Bank Name</th>
                <th>Interest Rate</th>
                <th>Maximum Loan</th>
                <th>Minimum Down Payment</th>
                <th>LoanTerm</th>
                <th>Settings</th>
            </tr>
            </thead>
            <tbody>
            {resArr?.map(({bankName, id: bankId, interestRate, maximumLoan, minimumDownPayment, loanTerm}) => (
                <tr key={bankId}>
                    <td>{bankName}</td>
                    <td>{interestRate}</td>
                    <td>{maximumLoan}</td>
                    <td>{minimumDownPayment}</td>
                    <td>{loanTerm}</td>
                    <td>
                        <button id={bankId} onClick={editButtonHandler}>Edit</button>
                        <button id={bankId} onClick={({target: {id}}) => dispatch(deleteBank(id))}>Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </TablesStyled>
    )
}

export default CreatedBanksTable;