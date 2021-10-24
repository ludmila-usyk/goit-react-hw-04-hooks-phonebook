import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
// import s from './Filter.module.css';

export default function Filter({value, onChange}){

    const filterInputId = shortid.generate();  
        return (
            <label htmlFor={filterInputId}>
                Find contacts by name
                <input
                    type='text'
                    value={value}
                    onChange={onChange}
                    id={filterInputId}
                />
            </label>
        )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};