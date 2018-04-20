import React from "react";
import {Link} from "react-router-dom";

export class coba extends React.Component{
    render(){
        return(
            <div>
                <main id="main-container">
                    <div className="content bg-gray-lighter">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    Unit Testing
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li>Home</li>
                                    <li> <Link  className="link-effect" to="#" />Unit Testing</li>

                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="block">
                            <div className="block-header">
                                <h3 className="block-title">Unit Testing</h3>
                            </div>
                            <div className="block-content block-content-narrow">
                                <h1>Ini adalah halaman Unit Testing</h1>
                            </div>
                        </div>

                    </div>

                </main>
            </div>
        );
    }
}
