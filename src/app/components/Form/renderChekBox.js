import React from 'react';

const renderChekBox = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <div className="form-group">
            <label>{label}</label>
            <input className="cs-margin-left-samall" {...input} placeholder={label} type={type} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);


export default renderChekBox;
