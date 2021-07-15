import React from 'react';
import Header from './Header/header';
import AddContact from './AddContact/addContact';
import ContactList from './ContactList/contactList';

function App() {
    return (
        <div>
            <Header />
            <AddContact />
            <ContactList /> 
        </div>
    )
}

export default App;