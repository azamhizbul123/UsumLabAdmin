import React from "react";
import {HorizontalBar} from 'react-chartjs-2';
import DataHorizontalBar from '../../chart/HorizontalChart';
import axios from 'axios';
import Helmet from "react-helmet";


const URLDataCount = "http://203.81.248.210:9200/usum_twitter_tweet/default/_count";

export class NumberSocialMediaData extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data : ""
        }
    }
    componentDidMount() {

        var _this = this;
        axios.get(URLDataCount,{auth:{username:'elastic', password:'changeme'}})

            .then(function(res){

                _this.setState({
                    data: res.data.count

                });


            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }

    render(){

        const renderItems = this.state.data;

        console.log(renderItems);

        return(

            <div>
                <Helmet
                    title="Number Social Media Data"
                />

                <main id="main-container">
                    <div className="content cs-bg-gray-neteural ">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading ">
                                    Number Of Social Media Data/day
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li>Home</li>
                                    <li><a className="link-effect cs-color-primary" href="">Number Of Social Media Data/day
                                    </a></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="col-lg-6">
                                        <div className="block block-themed block-rounded">

                                        <div className="block-header bg-primary-dark">
                                            <h3 className="block-title">Facebook</h3>
                                        </div>

                                        <div className="block-content">
                                            <div className="row items-push">

                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                        <div className="block-content block-content-full">
                                                            <div className="h5 text-uppercase push-5-t">Total Post</div>
                                                            <div className="h1 font-w700 cs-color-primary">30000</div>

                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                        <div className="block-content block-content-full">
                                                            <div className="h5 text-uppercase push-5-t">Growth</div>
                                                            <div className="h1 font-w700 cs-color-primary">20 <span className="h2">%</span></div>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>

                                            <div className="row items-push">
                                                <div className="col-sm-12 col-lg-12">
                                                    <div className="block block-themed block-rounded">
                                                        <div className="block-header cs-border-b">
                                                            <h3 className="block-title cs-color-primary">Bar Chart Social Media</h3>
                                                        </div>
                                                        <div className="block-content bg-gray-lighter">
                                                            <DataHorizontalBar />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="block block-themed block-rounded">

                                        <div className="block-header bg-primary-dark">
                                            <h3 className="block-title">Twitter</h3>
                                        </div>

                                        <div className="block-content">
                                            <div className="row items-push">

                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                        <div className="block-content block-content-full">
                                                            <div className="h5 text-uppercase push-5-t">Total Tweet</div>
                                                            <div className="h1 font-w700 cs-color-primary">{renderItems}</div>

                                                        </div>
                                                    </a>
                                                </div>

                                                <div className="col-sm-12 col-md-6 col-lg-6">
                                                    <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                        <div className="block-content block-content-full">
                                                            <div className="h5 text-uppercase push-5-t">Growth</div>
                                                            <div className="h1 font-w700 cs-color-primary">10 <span className="h2">%</span></div>
                                                        </div>
                                                    </a>
                                                </div>

                                            </div>

                                            <div className="row items-push">
                                                <div className="col-sm-12 col-lg-12">
                                                    <div className="block block-themed block-rounded">
                                                        <div className="block-header cs-border-b">

                                                            <h3 className="block-title cs-color-primary">Bar Chart Social Media</h3>
                                                        </div>
                                                        <div className="block-content bg-gray-lighter">
                                                            <DataHorizontalBar />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    </div>


                                </div>

                            </div>

                    </div>

                </main>

            </div>

        );
    }
}