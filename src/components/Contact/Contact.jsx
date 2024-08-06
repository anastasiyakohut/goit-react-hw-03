import css from './Contact.module.css'
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

export default function Contact({ contact: {id, name, number}, onDeleteContact }) {
    
    return (
        <div className={css.container}>
            <li className={css.contactListItem}>
                <div>
                    <p className={css.userInfo}><IoPerson className={css.icon} />{name}</p>
                    <p className={css.userInfo}><FaPhone className={css.icon} />{number}</p>
                </div>
                <button className={css.delBtn} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
        </div>
    )
}