import React from 'react';
import axios from 'axios';

const URLDataCount = "http://usum-wscoid.000webhostapp.com/usum/public/api/v1/ref/getsourcetype/1";

export class testdata extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data : "",
            data2:""
        }
    }
    componentDidMount() {

        var _this = this;
        axios.get(URLDataCount)

            .then(function(res){

                _this.setState({
                    data: res.data,
                    data2: res.data

                });


            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }


    render(){
        const dat = this.state.data;
        const dat2 = this.state.data2;
        // var js = JSON.parse(dat);


        console.log(dat);
        // console.log(dat2);
        //
        //
        // console.log(dat2[1]);
        //
        var a = [];
        for (var i = 0; i <dat.length; i++){
        console.log(dat[i].NAME);
            console.log(dat[i].PARENT_ID);
            console.log(dat[i].CREATED_DATE);
           a[i] = dat[i].NAME;

        }




        // function opo() {
        //     var v = '';
        //     for (var bau = 0; bau < a.length; bau++ ){
        //        console.log(bau);
        //        //return bau;
        //     }
        //     return {__html: bau };
        // }

        function opo() {
            var v  = [];
            for (var bau = 0; bau < a.length; bau++ ){
               //console.log(bau);
               //return bau;
                v[bau] = a[bau];
            }
            var list = v.map(function (v) {
                return <h1 key={v.length}>{v}</h1>;
            })
            return list;
            //return {__html: bau };
        }

        return(
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aliquid doloremque ducimus error ipsum, provident vel. Beatae dignissimos fugiat illo non nostrum odio perspiciatis porro similique vel. Dicta maiores, similique.</p>

                <div >
                <ul>
                    {/*<li dangerouslySetInnerHTML={opo()}></li>*/}
                    {opo()}
                </ul>
                </div>




            </div>
        );
    }
}