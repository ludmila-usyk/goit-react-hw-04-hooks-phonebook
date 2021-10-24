import { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

// import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
    
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
 
    const nameInputId = shortid.generate();
    const numberInputId = shortid.generate();

    const handleChange = e => {
    const { name, value } = e.currentTarget;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    }

    const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    reset();
    }
    
    const reset = () => {
        setName('');
        setNumber('');
    };
    
    return (
        <form
            onSubmit={handleSubmit}>
            <label
                htmlFor={nameInputId}>
                Name
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    value={name}
                    onChange={handleChange}
                    id={nameInputId}
                />
            </label>

            <label
                htmlFor={numberInputId}>
                Number
                <input
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    value={number}
                    onChange={handleChange}
                    id={numberInputId}
                />
            </label>

            <button
                type="submit">
                Add contact
            </button>
        </form>
    )
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};