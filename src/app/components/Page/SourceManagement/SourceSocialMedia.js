import React from "react";
import { Router } from 'react-router-dom'
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import FormSocialMedia from "../../Form/FormSocialMediaPortal";
import EditFormSocialMedia from "../../Form/FormEditSocialMediaPortal";
import axios from 'axios';
import store from "../../Form/store";
import storeEdit from "../../Form/sotreEdit";
import ShowResults from "../../Form/showResult";
import showResultEdit from "../../Form/showResultEdit"
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import '../../../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

const URLDataCount = "http://127.0.0.1/usum-ws/public/api/v1/properties/getref/1";


export class SourceSocialMedia extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data : "",
            selected : [],
            x : [],
            xID:"",
            redirect: false
        }
        this.abc = props.abc;

    }

    componentDidMount() {

        var _this = this;
        axios.get(URLDataCount)

            .then(function(res){

                _this.setState({
                    data: res.data

                });
            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })

    }

    getSelectedRowKeys() {
        var ti = this.refs.table.state.selectedRowKeys;
        var xa = ti[ti.length-1];
        console.log(xa);
        this.state.x.push(xa);
        this.setState(
            this.state
        );
        console.log(this.state.x);
         console.log("http://127.0.0.1/usum-ws/public/api/v1/source-twitter/delete/"+this.state.x[this.state.x.length-1]);
         axios.delete("http://127.0.0.1/usum-ws/public/api/v1/source-twitter/delete/"+this.state.x[this.state.x.length-1]).then(() => this.setState({ redirect: true }));

    }

    cancelDelete() {
        this.state.x = [];
        this.setState(
            this.state
        );
        console.log(this.state.x);
    }

    onRowSelect = ({ID}, isSelected) => {
        if (isSelected) {
            this.setState({ selected: [...this.state.selected, ID] });
        } else {
            this.setState({ selected: this.state.selected.filter(it => it !== ID) });
        }
    }

    handleClickBtn = () => {
        console.log(this.state.selected[0]);
    }

    getIdRows() {
        let tp = this.refs.table.state.selectedRowKeys;
        console.log(tp);
        var vr = this.refs.table.state.selectedRowKeys[0];
        console.log(vr);

    }

    buttonFormatter(){
        return (<div className="col-lg-12">
                    <div className="col-lg-6 col-xs-6 col-md-6 col-sm-6">
                        <a className="btn btn-default btn-sm " data-target="#modal-fadein-edit" data-toggle="modal"  onClick={this.options}>
                            <i className="fa fa-edit"/> Update</a>
                    </div>

                    <div className="col-lg-6 col-xs-6 col-md-6 col-sm-6 ">
                        <a className="btn btn-default btn-sm" data-target="#modal-fadein-delete" data-toggle="modal" data-backdrop="static" data-keyboard="false">
                            <i className="fa fa-times"/> Delete</a>
                </div></div>);
    }

    render(){

        const { redirect } = this.state;
        if (redirect) {
            window.location.href = "http://127.0.0.1:8080/SocialMediaPortal";
        }
        var abc = this.state.xID;

        const renderItems = this.state.data;
        console.log(renderItems);

        var sbc = renderItems;
        // console.log(renderItems);

        var op =[];
        for (var cv = 0; cv<renderItems.length; cv++){

            op.push(renderItems[cv].ID);

        }
        function onRowSelect(row, isSelected, selectedRowKeys) {
            let rowStr = '';
            for (const prop in row) {
                rowStr += row;
            }
             console.log(`is selected: ${rowStr}`);
            // alert(`is selected: ${isSelected}, ${rowStr}`);
           //isSelected, rowStr;
            //return c;
            return {__html: rowStr};

        }

        console.log("before option" + abc);

        const options = {
            onRowClick: function(row) {
                var _this = this;
                var ety = [];
                var xa = row.ID;
                axios.get("http://127.0.0.1/usum-ws/public/api/v1/source-twitter/get/"+ xa)
                    .then(function (response) {
                        console.log(response);
                        // this.setState({
                        //     data:response.data.id
                        // });
                        _this.setState({
                            xID : response.data

                        })
                    })
                    .catch(function (error) {
                        console.log(error);
                    });


            }.bind(this)

        };
        console.log("after option" + abc);


        const selectRowProp = {
            mode: 'checkbox',
             hideSelectColumn: true,
            clickToSelect: true,
             //onSelect: onRowSelect
        };

        return(

            <div>
                <Helmet
                    title="Source Social Media"
                />

                <main id="main-container">
                    <div className="content cs-bg-gray-neteural ">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    Social Media Portal Administratif Tools
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li>Home</li>
                                    <li><a className="link-effect" href="#">Social Media Portal Administrative Tools
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
                                            <h5>Table Social Media Portal Administratif Tools </h5>
                                        </div>

                                    <div className="block">
                                    <div className="block-content">
                                    <div className="col-lg-3 cs-remove-margin-bottom30 cs-remove-padding-left-sm">
                                        <button className="btn btn-default btn-sm cs-btn-colour-primarry" data-toggle="modal" data-target="#modal-fadein" type="button"><i className="fa fa-plus"></i> Add Source</button>
                                    </div>
                                    <BootstrapTable data={sbc} striped={false} hover={true} selectRow={ selectRowProp } search ref='table' options={options}>
                                        <TableHeaderColumn dataField="ID" isKey={true} dataAlign="center">No</TableHeaderColumn>
                                        <TableHeaderColumn dataField="NAME" dataAlign="center">Connection Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField="REF_ID" dataAlign="center">Type</TableHeaderColumn>
                                        <TableHeaderColumn dataFormat={this.buttonFormatter} dataAlign="center">Action</TableHeaderColumn>
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
                                            <FormSocialMedia onSubmit={ShowResults}/>
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
                                    <h3 className="block-title">Add Source</h3>
                                </div>
                                <div className="modal-body">

                                    <Provider store={storeEdit}>
                                        <div>
                                            <EditFormSocialMedia onSubmit={showResultEdit} socker={this.state.xID}/>

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
                                    <h3 className="block-title">Confirm Delete</h3>
                                </div>
                                <div className="modal-body">
                                    <h3>Confirmation</h3>
                                    <br/>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium necessitatibus nesciunt officia. A adipisci architecto beatae blanditiis in ipsam iste laboriosam minus, placeat quae, repellat, temporibus? Est odio, quod.</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-sm btn-default" type="button" data-dismiss="modal" onClick={this.cancelDelete.bind(this)} >Cancel</button>
                                <button className="btn btn-sm btn-danger" type="submit" data-dismiss="modal" onClick={this.getSelectedRowKeys.bind(this)}>Okeh</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*End modal delete*/}


            </div>

        );
    }
}




