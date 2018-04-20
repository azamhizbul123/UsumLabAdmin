import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';
import RenderDropDownCennectionSocialMedia from './RenderDropDownConnectionSocialMedia';
import validate from './validate';
//

const lessThan = otherField =>
    (value, previousValue, allValues) =>
        parseFloat(value) < parseFloat(allValues[otherField])
            ? value
            : previousValue;
const greaterThan = otherField =>
    (value, previousValue, allValues) =>
        parseFloat(value) > parseFloat(allValues[otherField])
            ? value
            : previousValue;

const FormSocialMedia = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-6 ">
                        <Field
                            name="name"
                            component={RenderField}
                            type="text"
                            label="Connection Name"
                        />

                    </div>
                    <div className="col-lg-6 ">
                        <label>Connection Type</label>
                        <Field name="ref_id"
                               component={RenderDropDownCennectionSocialMedia}
                        />

                    </div>

                    <h5>API Authentication </h5>
                    <hr/>

                    <div className="col-lg-6 ">

                        <Field
                            name="consumer_key"
                            component={RenderField}
                            type="text"
                            label="Consumer Key"

                        />
                    </div>
                    <div className="col-lg-6">

                        <Field
                            name="consumer_secret"
                            component={RenderField}
                            type="password"
                            label="Consumer Secret"

                        />
                    </div>
                    <div className="col-lg-12">
                        <Field
                            name="access_token"
                            component={RenderField}
                            type="text"
                            label="Access Token"

                        />
                    </div>
                    <div className="col-lg-12">
                        <Field
                            name="access_token_secret"
                            component={RenderField}
                            type="text"
                            label="Access Token Secret"

                        />
                    </div>
                    <div className="col-lg-12">
                        <Field
                            name="type"
                            component={RenderField}
                            type="text"
                            label="Access Token Secret"
                            normalize={lessThan('type')}

                        />
                    </div>
                    <div className="col-lg-12">
                        <Field
                            name="created_by"
                            component={RenderField}
                            type="number"
                            label="xxxxxx"
                            normalize={greaterThan('created_by')}

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

export class FormSocialMEdiaPortal extends React.Component{
    render(){


        return(
            <FormSocialMedia/>
        );

    }

}
export default reduxForm({
    form: 'simple', // a unique identifier for this form
    initialValues: { type: 'S', created_by: '1' },
})(FormSocialMedia);





