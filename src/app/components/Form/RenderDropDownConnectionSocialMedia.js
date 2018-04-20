import React from 'react';
import axios from 'axios';
import GetData from '../Page/SourceManagement/testdata';

const URLDataCount = "http://usum-wscoid.000webhostapp.com/usum/public/api/v1/ref/getsourcetype/1";
var hj = document.getElementsByClassName("name");


function getData() {
    // return axios.get(URLDataCount);
    let x = "";
    axios.get(URLDataCount)
    .then(function (response) {

        // console.log(response.data[0].NAME);
        console.log(response.data[0].NAME);
        // pokemonName.innerHTML = response.data[0].NAME;

        console.log(pokemonName);
        console.log("tets"+x);

    })

    .catch(function (error) {
        console.log(error);
    });
    return x;
    // console.log(this.x);

}


var name = ["6","7"];
const RenderDropDownCennectionSocialMedia = ({ input, meta: { touched, error } }) => (

    <div>

        <div className="form-group">

            <span className="name"></span>
        <select className="js-select2 form-control select2-hidden-accessible" {...input} >

            <option value="">Social Network</option>
            {name.map(val => <option value={val} key={val}>{val}</option>)}

        </select>
            {touched && error && <span>{error}</span>}
        </div>

    </div>
);


export default RenderDropDownCennectionSocialMedia;
