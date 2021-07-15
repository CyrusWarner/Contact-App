import React from 'react';
import {Link} from "react-router-dom";
import ContactCard from '../ContactCard/contactCard';


const ContactList = (props) => {

    const deleteContacthandler = (id) => {
        props.getContactId(id);
    }

    const renderContactList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContacthandler} key={contact.id}></ContactCard>
        )
    })
    return (
        <div class="main">
            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue">Add Contact</button>
                </Link>

            </h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    )
}

export default ContactList