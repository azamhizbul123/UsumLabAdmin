import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import cssTable from "react-bootstrap-table/dist/react-bootstrap-table-all.min.css";

export class TableBootstrap extends React.Component{



    render(){
        var products = [{
            id: 1,
            name: "Item name 1",
            price: 100
        },{
            id: 2,
            name: "Item name 2",
            price: 100
        }];
        function priceFormatter(cell, row){
            return '<i class="glyphicon glyphicon-usd"></i> ' + cell;
        }
        return(
            <BootstrapTable data={products} striped={true} hover={true} search>
                <TableHeaderColumn dataField="id" isKey={true} dataAlign="center">Product ID</TableHeaderColumn>
                <TableHeaderColumn dataField="name" >Product Name</TableHeaderColumn>
                <TableHeaderColumn dataField="price" >Product Price</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}