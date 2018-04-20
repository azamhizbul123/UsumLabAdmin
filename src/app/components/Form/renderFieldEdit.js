import React from 'react';



const renderField = ({ input, values, label, type, edit, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div className="form-group">
            <input className="form-control" {...input} placeholder={label} type={type} value={values}  onChange={this.handleChange}/>
            {touched && error && <span>{error}</span>}
        </div>
    </div>

);

export default class renderFieldEdit extends React.Component{

    handleChange (event){
        var _this=this;
        _this.setState({value: event.target.value});
    }
    render(){
        return(
            <renderField/>
        );
    }
}



