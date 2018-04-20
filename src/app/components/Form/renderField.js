import React from 'react';



const renderField = ({ input, place, values, label, type, edit, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <input className="form-control" {...input} placeholder={place} type={type} value={values}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>

);


export default renderField;
