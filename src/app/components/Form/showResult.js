import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router';

export default (function showResults(values) {
     //var bc = values.ref_id;
    // window.alert(bc);
    //  var a = JSON.stringify(values);
    // console.log(a);
    axios.post('http://127.0.0.1/usum-ws/public/api/v1/source-twitter/add', {
        headers: {
            'Access-Control-Allow-Origin': '*',
        },
        "type":values.type,
        "created_by":values.created_by,
        "name":values.name,
        "ref_id":values.ref_id,
        "consumer_key":values.consumer_key,
        "consumer_secret":values.consumer_secret,
        "access_token":values.access_token,
        "access_token_secret":values.access_token_secret
       // a

    //"type":"S","created_by":"1","name":"12","ref_id":"7","consumer_key":"1","consumer_secret":"1","access_token":"1","access_token_secret":"1"


    })
        .then(function (response) {
            // JSON.stringify(values, null, 2;
            // if (response.status = 200){
            //     <Redirect to='/'/>
            //     // console.log("masuk");
            // }
            console.log(response);

        })
        .catch(function (error) {
            console.log(error);
        });
      //window.alert(a);
    // window.alert(JSON.stringify(values));


});
