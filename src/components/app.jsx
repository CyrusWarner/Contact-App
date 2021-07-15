import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; //NEEDED FOR CREATING NEW PAGES WITHOUT REFRESH
import {uuid} from 'uuidv4';
import Header from './Header/header';
import AddContact from './AddContact/addContact';
import ContactList from './ContactList/contactList';
import ContactDetail from './ContactDetail/contactDetail';

function App() {
    const LOCAL_STORAGE_KEY = "contacts";
    const [contacts, setContacts] = useState([]);

    const addContactHandler = (contact) => {
        console.log(contact);
        setContacts([...contacts, {id: uuid(), ...contact}]) // ... IS JUST PASSING ALL PROPERTIES INSTEAD OF TYPE EACH INDIVIDUALLY
    };

    const removeContactHandler = (id) => {
        const newContactList = contacts.filter((contact) =>{
            return contact.id !== id;
        })
        setContacts(newContactList)

    }

    useEffect(() => {
        const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retrieveContacts) setContacts(retrieveContacts);
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts]);

    return (
        <div className="ui container">
            <Router>
                <Header />
                <Switch>
                    <Route 
                    path="/add" 
                    render={(props) => (
                    <AddContact {...props} 
                    addContactHandler={addContactHandler}/>)} 
                    /> {/* Path gives our route the url path */}
                    <Route
                    path="/"
                    exact
                    render={(props) => (
                    <ContactList 
                    {...props} 
                    contacts={contacts} 
                    getContactId={removeContactHandler} 
                    />)} 
                    />
                    <Route 
                    path="/contact/:id" 
                    component={ContactDetail}>
                    </Route> {/* Since if is referenced in link path :id is used and displayed in browser as url path */}

                </Switch>
               {/* <AddContact addContactHandler={addContactHandler}/> */}
               {/* <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
            </Router>

        </div>
    )
}

export default App;