import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';
import RenderDropDownCennectionSocial from './RenderDropDownConnectionSocialMedia';
import RenderArrayField from './rednderArrayField';
import validate from './validate';

const FormAddAgentSocialMedia = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-6">
                        <Field
                            name="nameagent"
                            component={RenderField}
                            type="text"
                            label="Name Agent"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Field
                            name="mainKeyword"
                            component={RenderField}
                            type="text"
                            label="Main Keyword"

                        />
                    </div>
                    <div className="col-lg-12">
                        <div className="col-lg-6">
                            <label>Connection Type</label>
                            <Field name="connectionType"
                                   component={RenderDropDownCennectionSocial}
                            />
                        </div>
                    </div>

                    <h5>Advance (Optional)</h5>
                    <hr/>

                    <div className="col-lg-12">

                        <Field
                            name="array"
                            component={RenderArrayField}

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
})(FormAddAgentSocialMedia);
