import React from 'react';
const renderTextArea = ( { input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <textarea className="form-control" {...input} placeholder={label} type={type} rows={5} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>

);
export default renderTextArea;