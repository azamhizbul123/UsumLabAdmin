import React from "react";
import ReactDOM from 'react-dom';
import {HorizontalBar} from 'react-chartjs-2';
import Line from '../../chart/LineChart';
import Helmet from "react-helmet";
export class PeakPointSocialMedia extends React.Component{
    render(){

        return(

            <div>
                <Helmet
                    title="Peak Point Social Media"
                />

                <main id="main-container">
                    <div className="content cs-bg-gray-neteural ">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    Number Of News Media Data/day
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li>Home</li>
                                    <li><a className="link-effect" href="">Number Of News Media Data/day
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

                                    <div className="block-content block-content-full">

                                        <div className="row items-push">

                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                    <div className="block-content block-content-full">
                                                        <div className="h5 text-uppercase push-5-t">Last Total Post</div>
                                                        <div className="h1 font-w700 cs-color-primary">30000</div>

                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                    <div className="block-content block-content-full">
                                                        <div className="h5 text-uppercase push-5-t">Last Engagement</div>
                                                        <div className="h1 font-w700 cs-color-primary">70</div>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>

                                        <div className="row items-push">
                                            <div className="col-sm-12 col-lg-12">
                                                <div className="block block-themed block-rounded">
                                                    <div className="block-header cs-border-b">
                                                        <h3 className="block-title cs-color-primary">Bar Chart News Media</h3>
                                                    </div>
                                                    <div className="block-content bg-gray-lighter">
                                                        <Line />
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

                                    <div className="block-content block-content-full">

                                        <div className="row items-push">

                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                    <div className="block-content block-content-full">
                                                        <div className="h5 text-uppercase push-5-t">Last Total Post</div>
                                                        <div className="h1 font-w700 cs-color-primary">30000</div>

                                                    </div>
                                                </a>
                                            </div>

                                            <div className="col-sm-12 col-md-6 col-lg-6">
                                                <a className="block block-rounded block-link-hover3 text-center block-bordered">
                                                    <div className="block-content block-content-full">
                                                        <div className="h5 text-uppercase push-5-t">Last Engagement</div>
                                                        <div className="h1 font-w700 cs-color-primary">70</div>
                                                    </div>
                                                </a>
                                            </div>

                                        </div>

                                        <div className="row items-push">
                                            <div className="col-sm-12 col-lg-12">
                                                <div className="block block-themed block-rounded">
                                                    <div className="block-header cs-border-b">
                                                        <h3 className="block-title cs-color-primary">Bar Chart News Media</h3>
                                                    </div>
                                                    <div className="block-content bg-gray-lighter">
                                                        <Line />
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