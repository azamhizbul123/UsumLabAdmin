import React from "react";
import { Provider } from 'react-redux';
import store from "../../Form/store";
import Helmet from 'react-helmet';
import FilterAgentSocialMedia from '../../Form/FilterAgentSocialMedia';
import RenderDropNews from '../../Form/FormAddAgentNews';
import FormEditAgentSocialMedia from '../../Form/FormEditAgentSocialMedia';

export class AllAgentNewsPortal extends React.Component{
    render(){

        return(

            <div>
                <Helmet
                    title="All Agent News Portal"
                />

                <main id="main-container">
              a      <div className="content cs-bg-gray-neteural ">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    All Agent News Portal
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
                            <div className="col-lg-12 cs-margin-bottom-30">

                                <div className="col-lg-4 col-md-4 col col-sm-4">

                                    <a className="block block-bordered block-link-hover3">
                                        <table className="block-table text-center">
                                            <tbody>
                                            <tr>
                                                <td className="bg-primary border-r">
                                                    <div className="push-30 push-30-t">
                                                        <i className="fa fa-exchange fa-3x text-white-op"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="h5 text-muted text-uppercase push-5-t">Total Data</div>
                                                    <div className="h1 font-w700">750</div>
                                                    <div className="h6 text-muted push-6-t">Last Update : 202020</div>

                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </a>

                                </div>

                                <div className="col-lg-4 col-md-4 col col-sm-4">

                                    <a className="block block-bordered block-link-hover3">
                                        <table className="block-table text-center">
                                            <tbody>
                                            <tr>
                                                <td className="bg-gray-darker cs-bg-dark border-r">
                                                    <div className="push-30 push-30-t">
                                                        <i className="fa fa-user-secret fa-3x text-white-op"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="h5 text-muted text-uppercase push-5-t">Users</div>
                                                    <div className="h2 font-w700 ">2<span className="h2 text-muted"> of 700</span></div>
                                                    <div className="h6 text-muted push-6-t">Last Update : 202020</div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </a>

                                </div>

                                <div className="col-lg-4 col-md-4 col col-sm-4">

                                    <a className="block block-bordered block-link-hover3">
                                        <table className="block-table text-center">
                                            <tbody>
                                            <tr>
                                                <td className="bg-success border-r">
                                                    <div className="push-30 push-30-t">
                                                        <i className="fa fa-hdd-o fa-3x text-white-op"></i>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="h5 text-muted text-uppercase push-5-t">Total Resource</div>
                                                    <div className="h1 font-w700">Low</div>
                                                    <div className="h6 text-muted push-6-t">Last Update : 202020</div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </a>


                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 cs-background-white block block-bordered">

                                    <Provider store={store}>
                                        <FilterAgentSocialMedia/>
                                    </Provider>


                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12 cs-background-white block block-bordered">
                                    <div className="row">
                                        <div className="block-header bg-primary-dark text-white">
                                            <h5>Agent</h5>
                                        </div>
                                        <div className="block">
                                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12   block">
                                                <button className="btn btn-primary pull-right col-lg-2 col-md-2 col-sm-2 col-xs-12  " data-target="#modal-fadein" data-toggle="modal"> <i className="fa fa-plus text-white"></i> Add Agent</button>
                                            </div>


                                            <ul className="cs-list-style cs-remove-padding-left-sm cs-margin-top-30 cs-remove-margin-left-15 cs-remove-margin-right-15">
                                                <li className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="col-lg-12">
                                                        <a className="block block-link-hover2">
                                                            <div className="block-content block-content-full bg-primary clearfix">
                                                                <i className="fa fa-user-secret fa-2x text-white pull-right"></i>
                                                                <span className="h4 font-w700 text-white">Twitter</span> <br/>
                                                                <span className="h6 text-white-op">lorem ipsum dolor</span>
                                                                <br/>
                                                                <div className="col-lg-2  pull-left row">
                                                                    <span className="label label-success">Running</span>
                                                                </div>
                                                                <div className="col-lg-10  pull-right row">
                                                                    <button className="btn btn-default btn-xs pull-right cs-btn-transparent " data-target="#modal-fadein-edit-agent" data-toggle="modal">Edit</button>

                                                                    <button className="btn btn-default btn-xs pull-right cs-btn-transparent cs-margin-right-5" data-target="#modal-fadein-detail" data-toggle="modal">Detail</button>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>

                                                </li>
                                                <li className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="col-lg-12">
                                                        <a className="block block-link-hover2">
                                                            <div className="block-content block-content-full bg-primary clearfix">
                                                                <i className="fa fa-user-secret fa-2x text-white pull-right"></i>
                                                                <span className="h4 font-w700 text-white">Twitter</span> <br/>
                                                                <span className="h6 text-white-op">lorem ipsum dolor</span>
                                                                <br/>
                                                                <div className="col-lg-2  pull-left row">
                                                                    <span className="label label-success">Running</span>
                                                                </div>
                                                                <div className="col-lg-10  pull-right row">
                                                                    <button className="btn btn-default btn-xs pull-right cs-btn-transparent " data-target="#modal-fadein-edit-agent" data-toggle="modal">Edit</button>

                                                                    <button className="btn btn-default btn-xs pull-right cs-btn-transparent cs-margin-right-5" data-target="#modal-fadein-detail" data-toggle="modal">Detail</button>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                                <li className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="col-lg-12">
                                                        <a className="block block-link-hover2">
                                                            <div className="block-content block-content-full cs-bg-gray-dark clearfix">
                                                                <i className="fa fa-user-secret fa-2x text-white pull-right"></i>
                                                                <span className="h4 font-w700 text-white">Twitter</span> <br/>
                                                                <span className="h6 text-white-op">lorem ipsum dolor</span>
                                                                <br/>
                                                                <div className="col-lg-2  pull-left row">
                                                                    <span className="label label-success">Running</span>
                                                                </div>
                                                                <div className="col-lg-10  pull-right row">
                                                                    <button className="btn btn-default btn-xs pull-right cs-btn-transparent " data-target="#modal-fadein-edit-agent" data-toggle="modal">Edit</button>

                                                                    <button className="btn btn-default btn-xs pull-right cs-btn-transparent cs-margin-right-5" data-target="#modal-fadein-detail" data-toggle="modal">Detail</button>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                </main>
                {/*modal create*/}
                <div className="modal fade" id="modal-fadein" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="block block-themed block-transparent remove-margin-b">
                                <div className="block-header bg-primary-dark">
                                    <ul className="block-options">
                                        <li>
                                            <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Add Source</h3>
                                </div>
                                <div className="modal-body">
                                    <Provider store={store}>
                                        <div>
                                            <RenderDropNews/>
                                        </div>

                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal craete*/}
                {/*modal edit social media*/}
                <div className="modal fade" id="modal-fadein-edit-agent" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="block block-themed block-transparent remove-margin-b">
                                <div className="block-header bg-primary-dark">
                                    <ul className="block-options">
                                        <li>
                                            <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Add Source</h3>
                                </div>
                                <div className="modal-body">
                                    <Provider store={store}>
                                        <div>
                                            <FormEditAgentSocialMedia/>
                                        </div>

                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal edit social media*/}

                {/*modal detail*/}
                <div className="modal fade" id="modal-fadein-detail" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="block block-themed block-transparent remove-margin-b">
                                <div className="block-header bg-primary-dark">
                                    <ul className="block-options">
                                        <li>
                                            <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Detail Agent</h3>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="col-lg-3">

                                                <label >Type :</label>
                                                <br/>
                                                <label >URL :</label>
                                                <br/>
                                                <label >Conditioning :</label>
                                            </div>
                                            <div className="col-lg-3">
                                                <label >lorem ipsum</label>
                                                <br/>
                                                <label >setik.com</label>
                                                <br/>
                                                <label >Yes</label>
                                            </div>
                                            <div className="col-lg-3">
                                                <label >Total Data :</label>
                                                <br/>
                                                <label >Status :</label>
                                            </div>
                                            <div className="col-lg-3">
                                                <label >1000</label>
                                                <br/>
                                                <span className="label label-success">Running</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button className="btn btn-sm btn-danger" type="submit">Stop</button>
                                    <button className="btn btn-sm btn-default" type="button">
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal detail*/}

            </div>

        );
    }
}