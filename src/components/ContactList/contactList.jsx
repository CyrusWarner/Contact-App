import React from 'react';
import ContactCard from '../ContactCard/contactCard';


const ContactList = (props) => {

    const deleteContacthandler = (id) => {
        props.getContactId(id);
    }

    const contacts = [{
        id: "1",
        name: "Cyrus",
        email: "Cyrus@gmail.com"
    }]
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContacthandler} key={contact.id}></ContactCard>
        )
    })
    return (
        <div class="main">
            <h2>Contact List</h2>
            <div className="ui celled list">{renderContactList}</div>
        </div>
    )
}

export default ContactList