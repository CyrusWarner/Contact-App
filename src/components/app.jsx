import React from 'react';
import Header from './Header/header';
import AddContact from './AddContact/addContact';
import ContactList from './ContactList/contactList';

function App() {

    const contacts = [
        {
            id:"1",
            name: "Cyrus",
            email: "Cyruswarner@gmail.com",
        },
        {
            id: "2",
            name: "Ayiven",
            email: "Ayvien@gmail.com",
        }
    ];
    return (
        <div className="ui container">
            <Header />
            <AddContact />
            <ContactList contacts={contacts} /> 
        </div>
    )
}

export default App;