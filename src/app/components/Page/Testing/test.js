import React from "react";
import axios from 'axios';

const URLDataCount = "http://localhost:5000/hastag";

export class test extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Books : []
        }
    }
    componentDidMount() {

        var _this = this;
        axios.get(URLDataCount)

            .then(function(res){

                _this.setState({
                    Books: res.data.Books

                });


            })
            .catch(function(e) {
                console.log("ERROR ", e);
            })
    }
    render(){
        const renderItems = this.state.Books.map(function(item, i) {
            return <li key={i}>{item.content}</li>

        });
        console.log(renderItems);

        return(
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
                            <ul>
                                {renderItems}
                            </ul>


                        </div>

                    </div>

                </div>

            </main>

        );
    }
}