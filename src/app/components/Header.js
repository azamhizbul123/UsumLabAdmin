import React from "react";
import {NavLink, Link} from "react-router-dom";


export const Header =(props) =>{
    return(
        <div>
            <nav id="sidebar">
               
                <div id="sidebar-scroll">
                    
                    <div className="sidebar-content">
                        
                        <div className="side-header side-content bg-white-op cs-color-sidebar">
                            
                            <button className="btn btn-link text-gray pull-right hidden-md hidden-lg" type="button" data-toggle="layout" data-action="sidebar_close">
                                <i className="fa fa-times"></i>
                            </button>
                           

                            <Link className="h5 text-white" to="/">
                                <img src="app/assets/images/Logo/usumicon.png" alt="" width="30px" style={{marginRight:"20px"}}/> <span className="h4 font-w600 sidebar-mini-hide">USUM</span>
                            </Link>
                        </div>
                        
                        <div className="side-content">
                            <ul className="nav-main">


                                    {/*Menu Dashboard Usum*/}

                                <li className="open">
                                    <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">Dashboard</span></a>
                                <ul>
                                    <li>
                                        <NavLink to="/home" replace><i className="si si-rocket"></i><span className="sidebar-mini-hide">Dashboard</span></NavLink>
                                    </li>

                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">Total</span></a>
                                        <ul>
                                            <li>
                                                <NavLink to="/numbersocial">Social Media Grouwth</NavLink>
                                                <NavLink to="/numbernews">News Portal Grouwth</NavLink>
                                            </li>

                                        </ul>
                                    </li>

                                    <li>
                                        <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">Peak Point</span></a>
                                        <ul>
                                            <li>
                                                <NavLink to="/peaksocial">Social Media Engagement</NavLink>
                                                <NavLink to="/peaknews">News Portal Engagement</NavLink>
                                            </li>

                                        </ul>
                                    </li>

                                </ul>
                                </li>


                                {/*Menu Source Management*/}
                                <li>
                                    <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">Source Management</span></a>
                                    <ul>
                                        <li>
                                            <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">Internal Source</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/numbersocial">Data Base</NavLink>
                                                    <NavLink to="/numbernews">File</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                        <li>
                                            <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">External Source</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/GmailPortal">Gmail</NavLink>
                                                    <NavLink to="/SocialMediaPortal">Social Media</NavLink>
                                                    <NavLink to="/NewsPortal">News Portal</NavLink>
                                                    <NavLink to="/peaknews">Forum</NavLink>
                                                    <NavLink to="/peaknews">Website</NavLink>
                                                    <NavLink to="/ECommercePortal">E-commerce</NavLink>
                                                </li>

                                            </ul>
                                        </li>

                                    </ul>
                                </li>

                                {/*Menu Agent Management*/}
                                <li>
                                    <a className="nav-submenu" data-toggle="nav-submenu" ><i className="si si-badge"></i><span className="sidebar-mini-hide">Agent Management</span></a>

                                    <ul>
                                        <li>
                                            <a className="nav-submenu" data-toggle="nav-submenu"><i className="si si-badge"></i><span className="sidebar-mini-hide">Social Media</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/allagentsocialmedia">All Agent</NavLink>
                                                    <NavLink to="/Configuration">Configure Agent</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <a className="nav-submenu" data-toggle="nav-submenu"><i className="si si-badge"></i><span className="sidebar-mini-hide">News Portal</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/allagentnewsportal">All Agent</NavLink>
                                                    <NavLink to="/conditionnews">Configure Agent</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <a className="nav-submenu" data-toggle="nav-submenu"><i className="si si-badge"></i><span className="sidebar-mini-hide">Forum</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/allagentsocialmedia">All Agent</NavLink>
                                                    <NavLink to="/conditionsocaialmedia">Configure Agent</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <a className="nav-submenu" data-toggle="nav-submenu"><i className="si si-badge"></i><span className="sidebar-mini-hide">Website</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/allagentsocialmedia">All Agent</NavLink>
                                                    <NavLink to="/Configuration">Configure Agent</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <a className="nav-submenu" data-toggle="nav-submenu"><i className="si si-badge"></i><span className="sidebar-mini-hide">E-Commerce</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/allagentecommerce">All Agent</NavLink>
                                                    <NavLink to="/conditionecommerce">Configure Agent</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>

                                            <a className="nav-submenu" data-toggle="nav-submenu"><i className="si si-badge"></i><span className="sidebar-mini-hide">Gmail</span></a>
                                            <ul>
                                                <li>
                                                    <NavLink to="/allagentgmail">All Agent</NavLink>
                                                    <NavLink to="/conditiongmail">Configure Agent</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>


                            </ul>
                        </div>
                        
                    </div>
                    
                </div>
                
            </nav>
            

            
            <header id="header-navbar" className="content-mini content-mini-full cs-nav-dark">
               
                <ul className="nav-header pull-right">
                    <li>
                        <div className="btn-group">
                            <button className="btn btn-default btn-image dropdown-toggle" data-toggle="dropdown" type="button">
                                <img src="/app/assets/images/avatars/avatar10.jpg" alt="Avatar" />
                                    <span className="caret"></span>
                            </button>
                            <ul className="dropdown-menu dropdown-menu-right">
                                <li className="dropdown-header">Profile</li>
                                <li>
                                    <a tabIndex="-1" href="base_pages_profile.html">
                                        <i className="si si-user pull-right"></i>
                                        <span className="badge badge-success pull-right">1</span>Profile
                                    </a>
                                </li>
                                <li className="divider"></li>
                                <li className="dropdown-header">Actions</li>
                                <li>
                                    <a tabIndex="-1" href="base_pages_login.html">
                                        <i className="si si-logout pull-right"></i>Log out
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
                
                <ul className="nav-header pull-left">
                    <li className="hidden-md hidden-lg">
                        
                        <button className="btn btn-default" data-toggle="layout" data-action="sidebar_toggle" type="button">
                            <i className="fa fa-navicon"></i>
                        </button>
                    </li>
                    <li className="hidden-xs hidden-sm">

                        <button className="btn btn-default " data-toggle="layout" data-action="sidebar_mini_toggle" type="button">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                    </li>
                    <li>

                        <button className="btn btn-default pull-right" data-toggle="modal" data-target="#apps-modal" type="button">
                            <i className="si si-grid"></i>
                        </button>
                    </li>
                    <li className="visible-xs">

                        <button className="btn btn-default" data-toggle="class-toggle" data-target=".js-header-search" data-class="header-search-xs-visible" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </li>
                    <li className="js-header-search header-search">
                        <form className="form-horizontal" action="base_pages_search.html" method="post">
                            <div className="form-material form-material-primary input-group remove-margin-t remove-margin-b">
                                <input className="form-control" type="text" id="base-material-text" name="base-material-text" placeholder="Search.." />
                                    <span className="input-group-addon"><i className="si si-magnifier"></i></span>
                            </div>
                        </form>
                    </li>
                </ul>
                
            </header>

        </div>
    );
}