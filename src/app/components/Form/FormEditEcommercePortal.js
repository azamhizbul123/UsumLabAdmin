import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';
import RenderChekBox from './renderChekBox';
import RenderArrayField from './rednderArrayField';
import validate from './validate';

const FormEditEcommercePortal = props => {
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
                            label="Connection Name"

                        />
                    </div>
                    <div className="col-lg-6">
                        <Field
                            name="url"
                            component={RenderField}
                            type="text"
                            label="URL"
                        />
                    </div>
                    <div className="col-lg-6">

                        <Field
                            name="title"
                            id="title"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Title"
                        />
                        <Field
                            name="image"
                            id="image"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Image"
                        />
                        <Field
                            name="date"
                            id="date"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Date"
                        />
                    </div>
                    <div className="col-lg-6">
                        <Field
                            name="content"
                            id="content"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Content"
                        />
                        <Field
                            name="author"
                            id="author"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Author"
                        />
                        <Field
                            name="location"
                            id="location"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Location"
                        />
                    </div>




                    <h5>Advance (Optional)</h5>
                    <hr/>
                    <div className="col-lg-12">
                        <Field
                            name="array"
                            component={RenderArrayField}

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
})(FormEditEcommercePortal);
