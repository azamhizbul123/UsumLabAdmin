import React from 'react';
import { BootstrapTable, TableHeaderColumn, } from 'react-bootstrap-table';


const products = [];
function addProducts(quantity) {
    const startId = products.length;
    for (let i = 0; i < quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            name: 'Item name ' + id,
            price: 2100 + i
        });
    }
}

addProducts(5);




export class TableTesting extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            segments: this.props.data,
            selected: []
        };
    }

    handleClickBtn = () => {
        console.log(this.state.selected[0]);
    }

    onRowSelect = ({id}, isSelected) => {
        if (isSelected) {
            this.setState({ selected: [...this.state.selected, id] });
        } else {
            this.setState({ selected: this.state.selected.filter(it => it !== id) });
        }
    }

    selectFirstRow(){
        this.setState({
            selected: [this.props.data[0].id]
        });
    }

    unselectAllRow(){
        this.setState({
            selected: []
        });
    }


    render() {

        const selectRowProp = {
            mode: "checkbox",
            clickToSelect: true,
            selected: this.state.selected  //give a default selected row.
        };

        return (
            <main id="main-container">
                <div>
                    <button onClick={this.selectFirstRow}>Dynamic select first row</button>
                    <button onClick={this.unselectAllRow}>Dynamic unselect all row</button>
                </div>
                <BootstrapTable data={products} pagination={true} selectRow={selectRowProp} search={true} hover={true}>
                    <TableHeaderColumn isKey={true} dataField="id" dataSort={true}>Product ID</TableHeaderColumn>
                    <TableHeaderColumn dataField="name">Product Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="price">Product Price</TableHeaderColumn>
                </BootstrapTable>
            </main>
        );
    }
}