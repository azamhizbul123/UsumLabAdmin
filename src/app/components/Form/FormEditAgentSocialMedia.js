import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';

import RenderArrayFieldSocialMedia from './RenderArrayFieldAgentSocialMedia';
import RenderDropDownCennectionSocial from './RenderDropDownConnectionSocialMedia';
import validate from './validate';

const FormEditAgentSocialMedia = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-6">
                        <Field
                            name="connectionname"
                            component={RenderField}
                            type="text"
                            label="Agent Name"

                        />
                    </div>
                    <div className="col-lg-6">
                        <Field
                            name="mainkeyword"
                            component={RenderField}
                            type="text"
                            label="Main Keyword"
                        />
                    </div>

                    <div className="col-lg-12 row">
                    <div className="col-lg-6">
                        <label>Connection Type</label>
                        <Field name="connectionType"
                               component={RenderDropDownCennectionSocial}
                        />
                    </div>
                    </div>


                    <h5>Condition (Optional)</h5>
                    <hr/>
                    <div className="col-lg-12">
                        <Field
                            name="array"
                            component={RenderArrayFieldSocialMedia}

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
})(FormEditAgentSocialMedia);
