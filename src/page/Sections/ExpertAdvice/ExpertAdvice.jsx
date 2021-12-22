import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Schemas from './Schemas';


function ExpertAdvice() {
    const initialValues = {
        name: '',
        email: '',
        phone: '',
        description: ''
    };
    const validationSchema = Yup.object({
        name: Yup.string().required('Объязательно к запалнению!'),
        email: Yup.string().email('Не правильно введенный формат почты.').required('Объязательно к запалнению!'),
        phone: Yup.string().required('Объязательно к запалнению!'),
        description: Yup.string().required('Объязательно к запалнению!')
    });
    const onSubmit = values => console.log('Form data', values);
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {formik => (
                <Form>
                    <Schemas control='input' type='text' label='Ваша имя' name='name' />
                    <Schemas control='input' type='email' label='Ваш e-mail' name='email' />
                    <Schemas control='input' type='text' label='Ваш телефон' name='phone' />
                    <Schemas control='textarea' label='Опишите задачу в свободной форме' name='description' />

                    <button type='submit' disabled={!formik.isValid}>Отправить</button>
                </Form>
            )}
        </Formik>
    )
}

export default ExpertAdvice
