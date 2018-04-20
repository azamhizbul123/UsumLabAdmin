import React from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import RenderFieldEdit from './renderFieldEdit';
import RenderField from './renderField';
import RenderDropDownCennectionSocialMedia from './RenderDropDownConnectionSocialMedia';
import validate from './validate';

var host = "";

const FormEdit = props => {
    const { handleSubmit, pristine, reset, submitting, } = props;
    return (


        <div className="row">
            <div className="col-lg-12">
                <form onSubmit={handleSubmit} >
                    <div className="col-lg-6 ">

                        <Field
                            name="idEdit"
                            component={RenderField}
                            type="text"
                            label="id"
                             values={props.socker.id}

                        />

                        <Field
                            name="connectionname"
                            component={RenderField}
                            type="text"
                            label="Connection Name"
                             values={props.socker.name}
                            onChange={event => {
                                field.onChange(event)
                                setTimeout(handleSubmit)
                            }}

                        />
                    </div>

                    <div className="col-lg-6 ">
                        <label>Connection Type</label>
                        <Field name="connectionType"
                               component={RenderDropDownCennectionSocialMedia}
                                val={props.socker.ref_id}
                        />

                    </div>

                    <h5>API Authentication </h5>
                    <hr/>

                    <div className="col-lg-6 ">

                        <Field
                            name="userName"
                            component={RenderField}
                            type="text"
                            label="User Name"
                             values={props.socker.consumer_key}
                            onChange={event => {
                                field.onChange(event)
                                setTimeout(handleSubmit)
                            }}


                        />
                    </div>
                    <div className="col-lg-6">

                        <Field
                            name="password"
                            component={RenderField}
                            type="password"
                            label="Password"
                             values={props.socker.consumer_secret}
                            onChange={event => {
                                field.onChange(event)
                                setTimeout(handleSubmit)
                            }}


                        />
                    </div>
                    <div className="col-lg-12">
                        <Field
                            name="apiToken"
                            component={RenderField}
                            type="text"
                            label="API Token"
                             values={props.socker.access_token}
                            onChange={event => {
                                field.onChange(event)
                                setTimeout(handleSubmit)
                            }}
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

export class FormEditSocialMediaPortal extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        }
    }




    render(){
        // var sd = this.props.socker;
        // dub = sd;
       const f = this.props.socker.id
        console.log(f);




        return(


            <FormEdit/>

        );
    }
}
// var a = this.lang.bind(this);

export default reduxForm({
    form: 'edit',
})(FormEdit);

