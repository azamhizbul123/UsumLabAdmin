import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';


const FormGmailPortal = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-6">
                        <Field
                            name="udernameGmail"
                            component={RenderField}
                            type="email"
                            label="Username"

                        />
                    </div>
                    <div className="col-lg-6">
                        <Field
                            name="passwordGamil"
                            component={RenderField}
                            type="password"
                            label="Password"
                        />
                    </div>


                    <div className="modal-footer cs-modal-footer">
                        <button className="btn btn-sm btn-default" type="button" disabled={pristine || submitting} onClick={reset}>
                            Clear Values
                        </button>
                        <button className="btn btn-sm btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
                    </div>

                </form>
            </div>


        </div>
    );
};




export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(FormGmailPortal);
