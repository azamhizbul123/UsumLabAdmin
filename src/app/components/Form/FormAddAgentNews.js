import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';
import RenderDropNews from './RenderDropNews';
import validate from './validate';

const FormAddNews = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>

                    <div className="col-lg-6">
                        <label>Connection Type</label>
                        <Field name="connectionType"
                               component={RenderDropNews}
                        />
                    </div>
                    <div className="modal-footer cs-modal-footer cs-margin-top-65 pull-right">
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
    form: 'addAgentSocialMedia', // a unique identifier for this form
})(FormAddNews);
