import React from 'react';
import AskUs from '../../page/Sections/AskUs/AskUs';
import Contact from './Contact';
import './contactsMain.scss'



function ContactsMain() {

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
            links: 'vektor.png',
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
            <AskUs />

        </div>
    )
}

export default ContactsMain
