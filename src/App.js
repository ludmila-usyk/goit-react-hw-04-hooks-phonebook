import { useState, useEffect } from 'react';
// import './App.css';
import shortid from 'shortid';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';


function App(){
  
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });
  
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    }

    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`)
      return;
    }
  
    setContacts(prevContacts => [newContact, ...prevContacts]);
  };
  
   const changeFilter = e => {
    setFilter({ filter: e.currentTarget.value });
  };
  
  const findContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };
    
  return (
    <div className="App">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addContact} contacts={contacts} />
      <h2 className="subtitle">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={findContacts}
        onDeleteContact={deleteContact}
      />
    </div>
  )
}
 

export default App;