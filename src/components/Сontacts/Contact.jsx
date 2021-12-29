import React from 'react';
import './contactsMain.scss';

function Contact(props) {
    return (
        <div className="contacts_adress">
            <h3 contacts_adress__title>{props.Ctitle}</h3>
            <a href="url(phone-handset_icon-icons.png)">{props.Clinks}</a>
        </div>

    )
}

export default Contact;
