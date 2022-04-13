import React from 'react';
import {TablesStyled} from "../TablesStyled";
import {generate} from 'shortid'

function ResultCalculationsTable({resArr, name}) {
    if (!resArr || resArr.length === 0) {
        return
    }
    return (
        <TablesStyled>
            <caption>{name === 'localStorage' ? 'Your earlier calculations of the monthly mortgage payment' : 'Your calculations result'}</caption>
            <thead>
            <tr>
                <th>Bank Name</th>
                <th>Down Payment</th>
                <th>Initial Loan</th>
                <th>Interest Rate</th>
                <th>Loan Term</th>
                <th>Monthly Payment</th>
            </tr>
            </thead>
            <tbody>
            {resArr?.map(({bankName, downPayment, initialLoan, interestRate, loanTerm, monthlyPayment}) => (
                <tr key={generate()}>
                    <td>{bankName}</td>
                    <td>{downPayment}</td>
                    <td>{initialLoan}</td>
                    <td>{interestRate}</td>
                    <td>{loanTerm}</td>
                    <td>{monthlyPayment}</td>
                </tr>
            ))}
            </tbody>
        </TablesStyled>
    )
}

export default ResultCalculationsTable;