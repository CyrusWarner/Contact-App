import React, {useState} from 'react';
import Header from './Header/header';
import AddContact from './AddContact/addContact';
import ContactList from './ContactList/contactList';

function App() {
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
    }
    return (
        <div className="ui container">
            <Header />
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts={contacts} /> 
        </div>
    )
}

export default App;