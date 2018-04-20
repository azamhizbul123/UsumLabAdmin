import React from "react";
import Helmet from "react-helmet";
import { Provider } from 'react-redux';
import FormEcommerce from "../../Form/FormEcommercePortal";
import FormEditEcommercePortal from "../../Form/FormEditEcommercePortal";
import store from "../../Form/store";
import ShowResults from "../../Form/showResult";

import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import '../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
export class SourceEcommerce extends React.Component{

    render(){

        function buttonFormatter(cell, row){
            return '<div class="col-lg-12"><div class="col-lg-6 col-xs-6 col-md-6 col-sm-6"><a class="btn btn-default btn-sm " data-target="#modal-fadein-edit" data-toggle="modal"><i class="fa fa-edit"></i> Update</a></div> <div class="col-lg-6 col-xs-6 col-md-6 col-sm-6 "><a class="btn btn-default btn-sm" data-target="#modal-fadein-delete" data-toggle="modal" ><i class="fa fa-times"></i> Delete</a></div></div>';
        }

        var products = [{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 2,
            name: "Item name 2",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },{
            id: 1000,
            name: "Item name 1",
            price: 100
        },];

        return(

            <div>
                <Helmet
                    title="News Portal"
                />

                <main id="main-container">
                    <div className="content cs-bg-gray-neteural ">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    E-Commerce Administratif Tools
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li>Home</li>
                                    <li><a className="link-effect" href="">E-Commerce Portal
                                    </a></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    {/*Continer*/}
                    <div className="content">
                        <div className="row">
                            <div className="col-lg-12">

                                <div className="col-lg-12 cs-background-white block block-bordered">
                                    <div className="row">
                                        <div className="block-header bg-primary-dark text-white-op">
                                            <h5>Table E-Commerce Administratif Tools </h5>
                                        </div>

                                    <div className="block">
                                        <div className="block-content">
                                            <div className="col-lg-3 cs-remove-margin-bottom30 cs-remove-padding-left-sm">
                                                <button className="btn btn-default btn-sm cs-btn-colour-primarry" data-toggle="modal" data-target="#modal-fadein" type="button"><i className="fa fa-plus"></i> Add Source</button>
                                            </div>
                                            <BootstrapTable data={products} striped={false} hover={true} search>
                                                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center">No</TableHeaderColumn>
                                                <TableHeaderColumn dataField="name" dataAlign="center">ConnectionName</TableHeaderColumn>
                                                <TableHeaderColumn dataField="price" dataAlign="center">Type</TableHeaderColumn>
                                                <TableHeaderColumn dataFormat={buttonFormatter} dataAlign="center">Action</TableHeaderColumn>
                                            </BootstrapTable>
                                        </div>
                                    </div>
                                </div>
                                </div>

                            </div>

                        </div>

                    </div>
                    {/*End Container*/}

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
                                            <FormEcommerce onSubmit={ShowResults}/>
                                        </div>

                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal craete*/}

                {/*modal edit*/}
                <div className="modal fade" id="modal-fadein-edit" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                            <div className="block block-themed block-transparent remove-margin-b">
                                <div className="block-header bg-primary-dark">
                                    <ul className="block-options">
                                        <li>
                                            <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Edit Source</h3>
                                </div>
                                <div className="modal-body">
                                    <Provider store={store}>
                                        <div>
                                            <FormEditEcommercePortal onSubmit={ShowResults}/>
                                        </div>

                                    </Provider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal edit*/}

                {/*modal delete*/}
                <div className="modal fade" id="modal-fadein-delete" tabIndex="-1" role="dialog" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content">
                            <div className="block block-themed block-transparent remove-margin-b">
                                <div className="block-header bg-danger">
                                    <ul className="block-options">
                                        <li>
                                            <button data-dismiss="modal" type="button"><i className="si si-close"></i></button>
                                        </li>
                                    </ul>
                                    <h3 className="block-title">Confirm Delete</h3>
                                </div>
                                <div className="modal-body">
                                    <h3>Confirmation</h3>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium necessitatibus nesciunt officia. A adipisci architecto beatae blanditiis in ipsam iste laboriosam minus, placeat quae, repellat, temporibus? Est odio, quod.</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-sm btn-default" type="button" data-dismiss="modal">Cancel</button>
                                <button className="btn btn-sm btn-danger" type="submit" data-dismiss="modal">Okeh</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal delete*/}



            </div>

        );
    }
}