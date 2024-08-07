import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import css from './App.module.css'
import { useState, useEffect } from 'react'

export default function App() {
    const [contact, setContact] = useState(() => {
        const savedContacts = localStorage.getItem('contact');
        return savedContacts ? JSON.parse(savedContacts) : [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
    });
    
    const [filter, setFilter] = useState('');

    useEffect(() => {
        localStorage.setItem('contact', JSON.stringify(contact));
    }, [contact])
    
    const addContact = (newContact) => {
        setContact((prevContacts) => [...prevContacts, newContact]);
    };
    
    const deleteContact = (id) => {
        setContact((prevContacts) => prevContacts.filter(contact => contact.id !== id));
    };
    
    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredContacts = contact.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
    return (
        <div className={css.container}>
            <h1>Phonebook</h1>
            <ContactForm addContact={addContact}/>
            <SearchBox filter={filter} onFilterChange={handleFilterChange}/>
            <ContactList contacts={filteredContacts} onDeleteContact={deleteContact}/>
        </div>
    )   
}