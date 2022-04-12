import React from 'react';
import {useField} from "formik";

function FormikCustomField({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
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
}

export default FormikCustomField;