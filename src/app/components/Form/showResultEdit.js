// import React from 'react';
// import axios from 'axios';
//
//
// export default (function showResultEdit(values) {
//     console.log('http://127.0.0.1/usum-ws/public/api/v1/source-twitter/update/'+values.idEdit);
//     axios.put('http://127.0.0.1/usum-ws/public/api/v1/source-twitter/update/'+values.idEdit, {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         },
//         "name": values.connectionname,
//         "ref_id": values.connectionType,
//         "consumer_key": values.userName,
//         "consumer_secret": values.password,
//         "access_token": values.apiToken
//         // a
//
//         //"type":"S","created_by":"1","name":"12","ref_id":"7","consumer_key":"1","consumer_secret":"1","access_token":"1","access_token_secret":"1"
//
//
//     })
//         .then(function (response) {
//             // JSON.stringify(values, null, 2;
//             // if (response.status = 200){
//             //     <Redirect to='/'/>
//             //     // console.log("masuk");
//             // }
//             console.log(response);
//
//         })
//         .catch(function (error) {
//             console.log(error);
//         });
//     //window.alert(a);
//     // window.alert(JSON.stringify(values));
//
// });

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default ( function showResultsEdit(values) {
     // simulate server latency
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});

