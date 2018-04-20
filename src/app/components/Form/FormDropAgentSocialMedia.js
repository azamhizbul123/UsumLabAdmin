import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';
import RenderDropDownCennectionSocial from './RenderDropDownConnectionSocialMedia';
import RenderDropAgentNameSocialMedia from './renderDropAgentNameSocialMedia';
import validate from './validate';

const FromDropAgentSocialMedia = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-6">
                        <label>Agent Name</label>
                        <Field
                            name="agentNameSocialMedia"
                            component={RenderDropAgentNameSocialMedia}


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
                    <div className="col-lg-6">
                        <label>Connection Type</label>
                        <Field name="connectionType"
                               component={RenderDropDownCennectionSocial}
                        />
                    </div>

                </form>
            </div>


        </div>
    );
};




export default reduxForm({
    form: 'addAgentSocialMedia', // a unique identifier for this form
})(FromDropAgentSocialMedia);
