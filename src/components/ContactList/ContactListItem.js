import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onDeleteContact }) => {
    return (
        <li>
            {name} : {number}
            <button
            type="button"
            onClick={() => onDeleteContact(id)}
        >
            Delete
        </button>
        </li>
    )
}

export default ContactListItem;

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
};