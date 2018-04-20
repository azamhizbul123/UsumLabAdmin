import React from "react";
export class Dashboard extends React.Component{
    render(){

        return(

            <div>

                <main id="main-container">
                    <div className="content cs-bg-gray-neteural">
                        <div className="row items-push">
                            <div className="col-sm-7">
                                <h1 className="page-heading">
                                    Dashboard
                                </h1>
                            </div>
                            <div className="col-sm-5 text-right hidden-xs">
                                <ol className="breadcrumb push-10-t">
                                    <li>Home</li>
                                    <li><a className="link-effect" href="">Dashboard</a></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="block">
                            <div className="block-content cs-padding-bottom-20">

                                    <h2 className="text-center">USUM</h2>
                                    <h2 className="text-center">Simplifying Complex Data Into Better Insight</h2>

                            </div>

                        </div>

                    </div>

                </main>

            </div>

        );
    }
}