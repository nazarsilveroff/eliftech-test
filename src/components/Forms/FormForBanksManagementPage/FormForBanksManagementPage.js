import React, {useEffect, useState} from 'react';
import {Form, Formik, useFormikContext} from 'formik'
import FormikCustomField from "../../../utils/formikCustomField";
import {validationSchemaForBanksManagementPage} from "../../../utils/schemas";
import {FormsStyled} from "../FormsStyled";
import {useDispatch} from "react-redux";
import {addBank, editBank} from "../../../redux/banks/banksSlice";


function FormForBanksManagementPage({editing, changeStatus, bank}) {

    const dispatch = useDispatch()

    const initialValues = {
        bankName: '',
        interestRate: '',
        maximumLoan: '',
        minimumDownPayment: '',
        loanTerm: '',
    }

    const [inputValues, setInputValues] = useState(initialValues)


    useEffect(() => {
        if (bank) {
            setInputValues({
                id: bank.id,
                bankName: bank.bankName,
                interestRate: bank.interestRate,
                maximumLoan: bank.maximumLoan,
                minimumDownPayment: bank.minimumDownPayment,
                loanTerm: bank.loanTerm,
            })
        } else {
            setInputValues(initialValues)
        }

    }, [bank])

    useEffect(() => {
        !editing&&setInputValues(initialValues)
    }, [editing])

    const getMinimumDownPayment = (value, setFieldValue) => {
        setFieldValue("maximumLoan", +value);
        setFieldValue("minimumDownPayment", (value * 20) / 100);
    }

    return (
        <FormsStyled>
            <h1>{editing ? "Edit your bank settings" : "Enter your bank settings"}</h1>
            <Formik
                enableReinitialize
                initialValues={inputValues}
                validationSchema={validationSchemaForBanksManagementPage}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        if (editing) {
                            dispatch(editBank(values))
                            changeStatus(false)
                            setSubmitting(false);
                        } else {
                            dispatch(addBank(values))
                            setSubmitting(false);
                        }

                    }, 400);
                }}
            >
                {({isSubmitting, setFieldValue}) => (
                    <Form>
                        <FormikCustomField fieldName='input' name="bankName" type="text" label="Bank Name"
                                           placeholder="bank name"/>
                        <FormikCustomField fieldName='input' name="interestRate" type="number" label="Interest Rate"
                                           placeholder="the annual percentage rate that expresses the amount of money"/>
                        <FormikCustomField fieldName='input'
                                           onChange={({target: {value}}) => getMinimumDownPayment(value, setFieldValue)}
                                           name="maximumLoan" type="number" label="Maximum Loan"
                                           placeholder="the maximum amount of money a bank is able to borrow"/>
                        <FormikCustomField fieldName='input' disabled name="minimumDownPayment" type="number"
                                           label="Minimum Down Payment"
                                           placeholder="the amount of money a person needs to pay upfront"/>
                        <FormikCustomField fieldName='input' name="loanTerm" type="number" label="Loan Term"
                                           placeholder="a period of time in which a person must pay off the loan"/>

                        <button type="submit" disabled={isSubmitting}>
                            {editing ? "Save settings" : "Add bank settings"}
                        </button>
                    </Form>
                )}
            </Formik>
        </FormsStyled>
    );
}

export default FormForBanksManagementPage;