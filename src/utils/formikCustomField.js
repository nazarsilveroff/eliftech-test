import React from 'react';
import {useField} from "formik";

function FormikCustomField({label, fieldName, options, ...props}) {
    const [field, meta, helpers] = useField(props);
    if (fieldName === 'input') {
        return (
            <>
                <label>
                    {label}
                    <input {...field} {...props}  />
                    {meta.touched && meta.error ? (
                        <p className="error">{meta.error}</p>
                    ) : null}
                </label>
            </>
        );
    } else if (fieldName === 'select') {
        return (
            <>
                <label>
                    {label}
                    <select
                        {...field} {...props}
                    >
                        <option value=''>
                            Select your bank
                        </option>
                        {options?.map(option => (
                            <option key={option.id} value={option.id}>
                                {option.bankName} {option.interestRate}% {option.loanTerm} months
                            </option>
                        ))}
                    </select>
                    {meta.touched && meta.error ? (
                        <p className="error">{meta.error}</p>
                    ) : null}
                </label>
            </>
        )
    }

}

export default FormikCustomField;