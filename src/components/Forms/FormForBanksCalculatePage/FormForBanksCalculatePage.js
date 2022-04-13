import React from 'react';
import {Form, Formik} from "formik";
import {validationSchemaForBanksCalculatePage} from "../../../utils/schemas";
import FormikCustomField from "../../../utils/formikCustomField";
import {FormsStyled} from "../FormsStyled";
import {useDispatch, useSelector} from "react-redux";
import {BanksSelector} from "../../../redux/banks/banksSlice";
import {addResult} from "../../../redux/calculation/calculationSlice";

function FormForBanksCalculatePage(props) {
    const dispatch = useDispatch()
    const redxBanks = useSelector(BanksSelector)

    const filteredBanks = (initialLoan, downPayment, banksArray) => {
        return banksArray.filter(bank => initialLoan <= bank.maximumLoan && downPayment <= bank.minimumDownPayment)
    };

    const findBank = (bankId, banksArray) => {
        const data = banksArray.find(({id}) => id === bankId)
        const {id, bankName, interestRate, loanTerm} = data
        return {id, bankName, interestRate, loanTerm}
    }

    return (
        <FormsStyled>
            <h1>Enter your payment settings</h1>
            <Formik
                initialValues={{
                    initialLoan: '',
                    downPayment: '',
                    bankId: ''
                }}
                validationSchema={validationSchemaForBanksCalculatePage}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        const {bankId, initialLoan, downPayment} = values
                        const calculateData = {initialLoan, downPayment, ...findBank(bankId, redxBanks)}
                        dispatch(addResult(calculateData))
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting, values: {initialLoan, downPayment}}) => (
                    <Form>
                        <FormikCustomField fieldName='input' name="initialLoan" type="number" label="Initial Loan"
                                           placeholder="(example: $280.000)"/>
                        <FormikCustomField fieldName='input' name="downPayment" type="number" label="Down payment"
                                           placeholder="(example: $20.000)"/>
                        <FormikCustomField fieldName='select'
                                           options={filteredBanks(initialLoan, downPayment, redxBanks)} name="bankId"
                                           label="Banks"/>

                        <button type="submit" disabled={isSubmitting}>
                            Calculate
                        </button>
                    </Form>
                )}
            </Formik>
        </FormsStyled>
    );
}

export default FormForBanksCalculatePage;