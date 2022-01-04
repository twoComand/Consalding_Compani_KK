import React from 'react';
import { FaTelegramPlane } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import AskUs from '../../page/Sections/AskUs/AskUs';
import MapCart from '../../page/Sections/MapCart';
import Contact from './Contact';
import './contactsMain.scss'



function ContactsMain({ children }) {

    const contact = [
        {
            title: 'Телефон',
            links: '7 906 23 33 33',
        },
        {
            title: 'E-mail',
            links: 'asdf@mail.ru',
        },
        {
            title: 'Социальные сети',
            links: <FaTelegramPlane />,
        },
        {
            title: 'Социальные сети',
            links: <GrInstagram />,
        },
        {
            title: 'Адрес',
            links: 'г. Бишкеке ул. Токтогула 24',
        }
    ]
    return (
        <div className="contacts" id='ContactsMain'>
            <h1 className="contacts_title">Адрес и контакты</h1>
            {
                contact.map((element, index) => {
                    return <Contact Ctitle={element.title} Clinks={element.links} key={index + element.title} />
                })
            }
            <MapCart />
            <AskUs />

            <div >{children}</div>

        </div>
    )
}

export default ContactsMain
