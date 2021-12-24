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
    const onSubmit = (values, onSubmitProps) => {
        console.log('Form data', values)
        onSubmitProps.setSubmitting(false)
        onSubmitProps.resetForm()
    };
    return (
        <section id='expertAdvice'>
            <div className="container">
                <h3 className='form-control__title'>Требуется консультация  Эксперта?
                    Оставьте заявку, мы вам перезвоним
                    в течении 5 минут.
                </h3>
                <div className="advice">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <Form className='form'>
                                <Schemas control='input' type='text' label='Ваша имя' name='name' />
                                <Schemas control='input' type='email' label='Ваш e-mail' name='email' />
                                <Schemas control='input' type='text' label='Ваш телефон' name='phone' />
                                <Schemas control='textarea' label='Опишите задачу в свободной форме' name='description' />

                                <button className='form-control__button' type='submit' disabled={!formik.isValid && formik.isSubmitting}>Отправить</button>

                            </Form>
                        )}
                    </Formik>

                    <div className="advice__Link">
                        <ul>
                            <li><a href="/">1 (234) 56 78 90</a></li>
                            <li><a href="/">asdfg@mail.ru</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExpertAdvice
