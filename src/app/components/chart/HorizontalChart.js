import React from "react";
import axios from "axios";
import {HorizontalBar} from "react-chartjs-2";

const URL = "http://203.81.248.210:9200/usum_twitter_tweet/default/_search?pretty&q=yunus";

export default class HorizontalChart extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            hits: []
        }
    }
    componentDidMount() {
        var _this = this;
        axios.get(URL,{auth:{username:'elastic', password:'changeme'}})

            .then(function(res){

                _this.setState({
                    hits: res.data.hits.hits

                });


            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }

    render(){

        const renderItems = this.state.hits.map(function(item, i) {
            return item.Price

        });
        const renderUsername = this.state.hits.map(function(item, i) {
            return item.BookName

        });

        const data = {

            labels: renderUsername,
            datasets: [
                {
                    label: 'Data in Facebook',
                    backgroundColor: ['rgba(255,99,132,0.2)', 'rgba(54, 162, 235, 0.2)','rgba(54, 162, 67, 0.2)','rgba(14, 62, 480, 0.2)','rgba(34, 62, 87, 0.2)'],
                    borderColor: ['rgba(255,99,132,0.2)','rgba(54, 162, 235, 0.2)'],
                    borderWidth: 1,
                    data: renderItems

                }

            ],


        };

        return(
            <div>
                <HorizontalBar options={{legend : { display: false}}} data={data}/>
            </div>
        );
    }
}