import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AscSchema from './AscSchema';

function AskUs() {

    const initialValues = {
        name: '',
        email: '',
        phone: ''
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Объязательно к запалнению!'),
        email: Yup.string().email('Не правильно введенный формат почты.').required('Объязательно к запалнению!'),
        phone: Yup.string().required('Объязательно к запалнению!'),
    });

    const onSubmit = values => console.log('Form data', values);

    return (
        <section id='ascUs'>
            <div className="container">
                <h3 className='formUs-control__title'>Остались вопросы, спросите у нас</h3>
                <h5 className='formUs-control__subTitle'>Оставьте заявку, мы ответим на вопросы:
                    как обеспечить не прерывность бизнеса в
                    условиях удаленной работы
                </h5>
                <div className="ascUs">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <Form className='formUs'>
                                <AscSchema control='input' type='text' label='Ваша имя' name='name' />
                                <AscSchema control='input' type='email' label='Ваш e-mail' name='email' />
                                <AscSchema control='input' type='text' label='Ваш телефон' name='phone' />

                                <button className='formUs-control__button' type='submit' disabled={!formik.isValid}>Получить консультацию</button>

                            </Form>
                        )}
                    </Formik>
                    <div className="ascUs__Link">
                        <ul>
                            <li><a href="/">1 (234) 56 78 90</a></li>
                            <li><a href="/">asdfg@mail.ru</a></li>
                        </ul>
                    </div>
                </div>
                <p className='formUs-control__text'>
                    *Нажимая на кнопку, вы даете согласие на обработку данных и соглашаетесь с политикой конфидициальности
                </p>
            </div>
        </section>
    )
}

export default AskUs
