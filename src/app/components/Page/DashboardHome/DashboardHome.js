import React from "react";
import {HorizontalBar} from 'react-chartjs-2';
import Helmet from 'react-helmet';
import Line from '../../chart/LineChart';
export class DashboardHome extends React.Component{
    render(){

        return(

            <div>
                <Helmet
                    title="Home"
                />

                <main id="main-container">
                    <div className="content cs-bg-gray-neteural ">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    Dashboard Home
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li><a className="link-effect" href="#"></a> Home</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="col-lg-4 col-md-4 col col-sm-4">

                                        <a className="block block-rounded block-link-hover3 text-center">

                                            <div className="block-content block-content-full cs-background-primary-single">
                                                <div className="h5 font-w700 text-white"><i className="fa fa-exchange fa-2x"></i></div>
                                                <div className="h5 text-white-op text-uppercase push-5-t">1200 Data</div>
                                            </div>
                                            <div className="block-content block-content-full block-content-mini">


                                                     <table className="block-table text-center">
                                                         <tbody>
                                                         <tr>
                                                             <td className="border-r cs-display-border-r" style={{width: "50%"}}>
                                                                 <div className="h3 font-w700">12750</div>
                                                                 <div className="h6 text-muted text-uppercase push-5-t">News</div>
                                                             </td>
                                                             <td style={{width: "50%"}}>
                                                                 <div className="h3 font-w700">77750</div>
                                                                 <div className="h6 text-muted text-uppercase push-5-t">Hashtag</div>
                                                             </td>
                                                         </tr>
                                                         </tbody>
                                                     </table>

                                            </div>
                                        </a>

                                </div>

                                <div className="col-lg-4 col-md-4 col col-sm-4">

                                    <a className="block block-rounded block-link-hover3 text-center">

                                        <div className="block-content block-content-full cs-background-primary-single" style={{paddingBottom:"16px"}}>
                                            <div className="h5 font-w700 text-white"><i className="glyphicon glyphicon-time fa-2x"></i></div>
                                            <div className="h5 text-white-op text-uppercase push-5-t">Last Crawler</div>
                                        </div>
                                        <div className="block-content block-content-full block-content-mini">


                                            <table className="block-table text-center">
                                                <tbody>
                                                <tr>
                                                    <td className=" border-r cs-display-border-r" style={{width: "50%"}}>
                                                        <div className="h3 font-w700">3 S</div>
                                                        <div className="h6 text-muted text-uppercase push-5-t">News</div>
                                                    </td>
                                                    <td style={{width: "50%"}}>
                                                        <div className="h3 font-w700">4 M</div>
                                                        <div className="h6 text-muted text-uppercase push-5-t">Hashtag</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </a>


                                </div>

                                <div className="col-lg-4 col-md-4 col col-sm-4">

                                    <a className="block block-rounded block-link-hover3 text-center">

                                        <div className="block-content block-content-full cs-background-primary-single">
                                            <div className="h5 font-w700 text-white"><i className="fa fa-user-secret fa-2x"></i></div>
                                            <div className="h5 text-white-op text-uppercase push-5-t">Agent</div>
                                        </div>
                                        <div className="block-content block-content-full block-content-mini">


                                            <table className="block-table text-center">
                                                <tbody>
                                                <tr>
                                                    <td className="" style={{width: "50%"}}>
                                                        <div className="h3 font-w700">Running</div>
                                                        <div className="h6 text-muted text-uppercase push-5-t">Of</div>
                                                    </td>
                                                    <td style={{width: "50%"}}>
                                                        <div className="h3 font-w700">70</div>
                                                        <div className="h6 text-muted text-uppercase push-5-t">100</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </a>


                                </div>

                                <div className="col-lg-12 cs-background-white block">
                                    <Line/>
                                </div>



                            </div>

                        </div>

                    </div>

                </main>

            </div>

        );
    }
}