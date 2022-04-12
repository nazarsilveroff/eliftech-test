import React from 'react';
import {Form, Formik} from 'formik'
import FormikCustomField from "../../../utils/formikCustomField";
import {validationSchemaForBanksManagementPage} from "../../../utils/schemas";
import {FormForBanksManagementPageStyled} from "./FormForBanksManagementPageStyled";
import {useDispatch} from "react-redux";
import {addBank} from "../../../redux/banks/banksSlice";


function FormForBanksManagementPage(props) {
    const dispatch = useDispatch()

    const getMinimumDownPayment=(value,setFieldValue)=>{
        setFieldValue("maximumLoan", +value);
        setFieldValue("minimumDownPayment", (value * 20) / 100);
    }

    return (
        <FormForBanksManagementPageStyled>
            <h1>Enter your bank settings</h1>
            <Formik
                initialValues={{
                    bankName: '',
                    interestRate: '',
                    maximumLoan: '',
                    minimumDownPayment: '',
                    loanTerm: ''
                }}
                validationSchema={validationSchemaForBanksManagementPage}
                onSubmit={(values, {setSubmitting}) => {
                    setTimeout(() => {
                        dispatch(addBank(values))
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({isSubmitting,setFieldValue}) => (
                    <Form>
                        <FormikCustomField name="bankName" type="text" label="Bank Name" placeholder="bank name"/>
                        <FormikCustomField name="interestRate" type="number" label="Interest Rate"
                                           placeholder="the annual percentage rate that expresses the amount of money"/>
                        <FormikCustomField onChange={({target:{value}})=>getMinimumDownPayment(value,setFieldValue)} name="maximumLoan" type="number" label="Maximum Loan"
                                           placeholder="the maximum amount of money a bank is able to borrow"/>
                        <FormikCustomField disabled name="minimumDownPayment" type="number"
                                           label="Minimum Down Payment"
                                           placeholder="the amount of money a person needs to pay upfront"/>
                        <FormikCustomField name="loanTerm" type="number" label="Loan Term"
                                           placeholder="a period of time in which a person must pay off the loan"/>

                        <button type="submit" disabled={isSubmitting}>
                            Add bank settings
                        </button>
                    </Form>
                )}
            </Formik>
        </FormForBanksManagementPageStyled>
    );
}

export default FormForBanksManagementPage;