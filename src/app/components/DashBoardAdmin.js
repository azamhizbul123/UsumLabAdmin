import React from "react";
export class DashBoardAdmin extends React.Component{
    render(){

        return(

            <div>
                
                <main id="main-container">
                    
                    <div className="content bg-gray-lighter">
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
                            <div className="block-header">
                                <ul className="block-options">
                                    <li>
                                        <button type="button"><i className="si si-settings"></i></button>
                                    </li>
                                </ul>
                                <h3 className="block-title">Form Pengisian Pembuatan Fakultas</h3>
                            </div>
                            <div className="block-content block-content-narrow">
                                <form action="base_forms_elements.html" method="post" >
                                    <div className="form-group">
                                        <label htmlFor="example-nf-email">Email</label>
                                        <input className="form-control" type="email" id="example-nf-email" name="example-nf-email" placeholder="Enter Email.."/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="example-nf-password">Password</label>
                                        <input className="form-control" type="password" id="example-nf-password" name="example-nf-password" placeholder="Enter Password.."/>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-sm btn-primary" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>
                    
                </main>

            </div>

        );
    }
}