import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList({ contacts, onDeleteContact }) {
    
    return (
        <div className={css.container}>
            {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} onDeleteContact={onDeleteContact} />))}
            
        </div>
    )
}