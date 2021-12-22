import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './expertAdvice.scss';

const initialValues = {
    name: 'asel',
    email: '',
    channel: ''
};
const onSubmit = values => {
    console.log('Forn data', values)
}

const validate = values => {
    //values.name values.emale values.cannel
    //errors.name errors.emale errors.cannel
    //errors.name = 'Thise is filed is required'
    let errors = {}

    if (!values.name) {
        errors.name = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0_9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
    }
    if (!values.channel) {
        errors.channel = 'Required';
    }

    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required("Required"),
    channel: Yup.string()
        .required('Required'),
})


function OldForm() {


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        // validate
    });


    console.log('visited fields', formik.touched)

    return (
        <div className='forme'>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="temailext"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Channel</label>
                    <input
                        type="text"
                        id='channel'
                        name='channel'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel ? <div className='error'>{formik.errors.channel}</div> : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OldForm;

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import './expertAdvice.scss';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNambers: ['', ''],
    phNumbers: ['']
};

const savedValues = {
    name: 'asel',
    email: 'asel@mail.ru',
    channel: 'AAA',
    comments: 'welcome AAA',
    address: 'qqq 6565k',
    social: {
        facebook: '',
        twitter: ''
    },
    phoneNambers: ['', ''],
    phNumbers: ['']
};


const onSubmit = (values, onSubmitProps) => {
    console.log('Forn data', values, onSubmitProps)
    onSubmitProps.setSubmitting(false)
    onSubmitProps.resetForm()
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required!'),
    email: Yup.string()
        .email('Invalid email format')
        .required("Required"),
    channel: Yup.string().required('Required'),
})

const validateComments = value => {
    let error;
    if (!value) {
        error = 'Required';
    }
    return error;
};


function ExpertAdvice() {

    const [formValues, setFormValues] = useState(null);

    return (
        <Formik
            initialValues={formValues || initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            enableReinitialize
        // validateOnMount
        >
            {
                formik => {
                    console.log('Formik props', formik)
                    return (

                        <Form >
                            <div className='form-control'>
                                <label htmlFor="name">Name</label>
                                <Field
                                    type="text"
                                    id='name'
                                    name='name'
                                />
                                <ErrorMessage name='name' component={TextError} />
                            </div>

                            <div className='form-control'>
                                <label htmlFor="email">E-mail</label>
                                <Field
                                    type="temailext"
                                    id='email'
                                    name='email'
                                />
                                <ErrorMessage name='email'>
                                    {
                                        (errorMsg) => <div className='error'>{errorMsg}</div>
                                    }
                                </ErrorMessage>
                            </div>

                            <div className='form-control'>
                                <label htmlFor="channel">Channel</label>
                                <Field
                                    type="text"
                                    id='channel'
                                    name='channel'
                                    placeholder='Ypur channel name'
                                />
                                <ErrorMessage name='channel' component={TextError} />
                            </div>
                            <div className="forn-control">
                                <label htmlFor="comments">Comments</label>
                                <Field as='textarea' id='comments' name='comments' validate={validateComments} />
                                <ErrorMessage name='comments' component={TextError} />
                            </div>

                            <div className="form-control">
                                <label htmlFor="address">Address</label>
                                <FastField name='address'>
                                    {
                                        props => {
                                            console.log('field render')
                                            const { field, form, meta } = props
                                            console.log('props', props)
                                            return (
                                                <div>
                                                    <input type='text' id='address' {...field} />
                                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                </div>
                                            )
                                        }}
                                </FastField>
                            </div>

                            <div className='form-control'>
                                <label htmlFor="facebook">Facebook profile</label>
                                <Field type='text' id='facebook' name='social.facebook' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor="twitter">Twitter profile</label>
                                <Field type='text' id='twitter' name='social.twitter' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor="primaryPh">Primary phone number</label>
                                <Field type='text' id='primaryPh' name='phoneNambers[0]' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor="secondaryPh">Primary phone number</label>
                                <Field type='text' id='secondaryPh' name='phoneNambers[1]' />
                            </div>

                            <div className='form-control'>
                                <label htmlFor="">List of phon numbers</label>
                                <FieldArray name='phNumbers'>
                                    {
                                        fieldArrayProps => {
                                            const { push, remove, form } = fieldArrayProps;
                                            const { values } = form;
                                            const { phNumbers } = values
                                            console.log('Form errors', form.errors)
                                            return <div>
                                                {
                                                    phNumbers.map((phNumber, index) => (
                                                        <div key={index}>
                                                            <Field name={`phNumber[${index}]`} />
                                                            {
                                                                index > 0 && (

                                                                    <button type='button' onClick={() => remove(index)}>
                                                                        {' '}
                                                                        -{' '}
                                                                    </button>
                                                                )
                                                            }
                                                            <button type='button' onClick={() => push('')}>+</button>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        }
                                    }
                                </FieldArray>
                            </div>
                            {/* <button type='button' onClick={() => formik.validateField()}>validate comments</button>
                            <button type='button' onClick={() => formik.validateForm()}>validate all</button>

                            <button type='button' onClick={() => formik.setFieldTouched('comments')}>visit comments</button>
                            <button type='button' onClick={() => formik.setTouched({
                                name: true,
                                email: true,
                                channel: true,
                                comments: true,
                            })}>visit filed</button> */}
                            <button onClick={() => setFormValues(savedValues)}>Load saved </button>
                            <button type='reset'>Reset </button>
                            <button type='submit' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik >
    )
}

export default ExpertAdvice

