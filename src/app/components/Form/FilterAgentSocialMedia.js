import React from 'react';
import { Field, reduxForm } from 'redux-form';
import RenderField from './renderField';
import RenderChekBox from './renderChekBox';
import validate from './validate';

const FilterAgentSocialMedia = props => {
    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <div className="row">
            <div className="block-header bg-primary-dark text-white">
                <h5>Filter</h5>
            </div>
            <div className="block block-content">

            <div className="col-lg-12">
                <form onSubmit={handleSubmit}>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <h5>Agent Status</h5>
                        <br/>
                        <Field
                            name="running"
                            id="title"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Running"
                        />
                        <Field
                            name="Idle"
                            id="image"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Idle"
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <h5>Total Data</h5>
                        <br/>
                        <Field
                            name="totaldata"
                            id="title"
                            component={RenderChekBox}
                            type="checkbox"
                            label="<90.000"
                        />
                        <Field
                            name="totaldata2"
                            id="image"
                            component={RenderChekBox}
                            type="checkbox"
                            label=">100.000"
                        />
                        <Field
                            name="totaldata3"
                            id="image"
                            component={RenderChekBox}
                            type="checkbox"
                            label=">1.000.000"
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <h5>Condition</h5>
                        <br/>
                        <Field
                            name="yes"
                            id="title"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Yes"
                        />
                        <Field
                            name="no"
                            id="image"
                            component={RenderChekBox}
                            type="checkbox"
                            label="No"
                        />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
                        <h5>Type</h5>
                        <br/>
                        <Field
                            name="facebook"
                            id="title"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Facebook"
                        />
                        <Field
                            name="twitter"
                            id="image"
                            component={RenderChekBox}
                            type="checkbox"
                            label="Twitter"
                        />
                    </div>


                </form>
            </div>
            </div>

        </div>
    );
};




export default reduxForm({
    form: 'simple', // a unique identifier for this form
})(FilterAgentSocialMedia);
