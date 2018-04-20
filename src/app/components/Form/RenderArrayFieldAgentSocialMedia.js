import React from "react";
import {Field, FieldArray} from 'redux-form';



const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <input className="form-control" {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const renderHobbies = ({ fields, meta: { error } }) => (
    <ul>
        {/*<li>*/}
        {/*<button type="button" onClick={() => fields.push()}>Add Hobby</button>*/}
        {/*</li>*/}
        {fields.map((hobby, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Hobby"
                    onClick={() => fields.remove(index)}
                />
                <Field
                    name={hobby}
                    type="text"
                    component={renderField}
                    label={`Hobby #${index + 1}`}
                />
            </li>
        ))}
        {error && <li className="error">{error}</li>}
    </ul>
);

const renderMembers = ({ fields, meta: { touched, error, submitFailed } }) => (
    <ul className="cs-list-style-disabled-point">
        <div className="col-lg-6 pull-right cs-remove-margin-top-20">
            <button className="btn btn-primary btn-sm pull-right cs-margin-bottom-30" type="button" onClick={() => fields.push({})}><i className="fa fa-plus"></i> Add Key</button>
            {(touched || submitFailed) && error && <span>{error}</span>}
        </div>


        {fields.map((member, index) => (
            <div className="col-lg-12">
                <li key={index}>

                    <h4>Condition #{index + 1}</h4>
                    <hr/>


                    <div className="col-lg-5">

                        <Field
                            name={`${member}.firstName`}
                            type="text"
                            component={renderField}
                            label="Connection Name"
                        />
                    </div>
                    <div className="col-lg-5">
                        <Field
                            name={`${member}.lastName`}
                            type="text"
                            component={renderField}
                            label="Term"
                        />

                    </div>
                    <div className="col-lg-1 cs-padding-top-26">
                        <button className="btn btn-danger btn-sm "
                                type="button"
                                title="Remove"
                                onClick={() => fields.remove(index)}>

                            <i className="fa fa-trash"></i>  Remove
                        </button>
                    </div>



                    <FieldArray name={`${member}.hobbies`} component={renderHobbies} />
                </li>
            </div>
        ))}
    </ul>
);

const FieldArraysForm = props => {
    const {} = props;
    return (
        <div>
            {/*<Field*/}
            {/*name="key"*/}
            {/*type="text"*/}
            {/*component={renderField}*/}
            {/*label="Key"*/}
            {/*/>*/}

            <FieldArray name="members" component={renderMembers} />
        </div>

    );
};

export default FieldArraysForm;