import React from 'react';
import { Field, ErrorMessage } from 'formik';
import TextError from '../ExpertAdvice/TextError';
import './ascUs.scss';


function InputAskUs(props) {
    const { label, name, ...rest } = props;
    return (
        <div className='formUs-control'>
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError} />

        </div>
    )
}

export default InputAskUs
