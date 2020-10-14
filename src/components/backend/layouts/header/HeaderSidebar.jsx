import React from 'react'
import { Link } from 'react-router-dom';

const HeaderSidebar = () => {
    return ( 
        <>
         <nav id="sidebar" aria-label="Main Navigation">
                <div className="content-header bg-white-5">
                    <a className="font-w600 text-dual" href="index.html">
                        <i className="fa fa-circle-notch text-primary"></i>
                        <span className="smini-hide">
                            <span className="font-w700 font-size-h5">ne</span> <span className="font-w400">4.5</span>
                        </span>
                    </a>
                    
                    <div>
                        <div className="dropdown d-inline-block ml-2">
                            <a className="btn btn-sm btn-dual" id="sidebar-themes-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="si si-drop"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right font-size-sm smini-hide border-0" aria-labelledby="sidebar-themes-dropdown">
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="default" href="#">
                                    <span>Default</span>
                                    <i className="fa fa-circle text-default"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/amethyst.min.css" href="#">
                                    <span>Amethyst</span>
                                    <i className="fa fa-circle text-amethyst"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/city.min.css" href="#">
                                    <span>City</span>
                                    <i className="fa fa-circle text-city"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/flat.min.css" href="#">
                                    <span>Flat</span>
                                    <i className="fa fa-circle text-flat"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/modern.min.css" href="#">
                                    <span>Modern</span>
                                    <i className="fa fa-circle text-modern"></i>
                                </a>
                                <a className="dropdown-item d-flex align-items-center justify-content-between" data-toggle="theme" data-theme="assets/css/themes/smooth.min.css" href="#">
                                    <span>Smooth</span>
                                    <i className="fa fa-circle text-smooth"></i>
                                </a>

                                <div className="dropdown-divider"></div>

                                <a className="dropdown-item" data-toggle="layout" data-action="sidebar_style_light" href="#">
                                    <span>Sidebar Light</span>
                                </a>
                                <a className="dropdown-item" data-toggle="layout" data-action="sidebar_style_dark" href="#">
                                    <span>Sidebar Dark</span>
                                </a>

                                <div className="dropdown-divider"></div>

                               <a className="dropdown-item" data-toggle="layout" data-action="header_style_light" href="#">
                                    <span>Header Light</span>
                                </a>
                                <a className="dropdown-item" data-toggle="layout" data-action="header_style_dark" href="#">
                                    <span>Header Dark</span>
                                </a>
                            </div>
                        </div>

                        <a className="d-lg-none btn btn-sm btn-dual ml-2" data-toggle="layout" data-action="sidebar_close">
                            <i className="fa fa-fw fa-times"></i>
                        </a>
                    </div>
                </div>

                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li className="nav-main-item">
                             <Link to="/dashboard" className="nav-main-link active">
                                <i className="nav-main-link-icon si si-speedometer"></i>
                                <span className="nav-main-link-name">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                <i className="nav-main-link-icon si si-layers"></i>
                                <span className="nav-main-link-name">Content Management</span>
                            </a>
                            <ul className="nav-main-submenu">
                                <li className="nav-main-item">
                                    <Link to="/posts" className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false">
                                        <i className="nav-main-link-icon si si-bag"></i>
                                        <span className="nav-main-link-name">Posts</span>
                                    </Link>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <Link to="/posts" className="nav-main-link">
                                                <span className="nav-main-link-name">Post List</span>
                                            </Link>
                                        </li>
                                        <li className="nav-main-item">
                                            <Link to="/posts/create" className="nav-main-link">
                                                <span className="nav-main-link-name">Post Create</span>
                                            </Link>
                                        </li>
                                        
                                    </ul>
                                </li>
                                <li className="nav-main-item">
                                    <a className="nav-main-link nav-main-link-submenu" data-toggle="submenu" aria-haspopup="true" aria-expanded="false" href="#">
                                        <i className="nav-main-link-icon si si-handbag"></i>
                                        <span className="nav-main-link-name">Categories</span>
                                    </a>
                                    <ul className="nav-main-submenu">
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_home.html">
                                                <span className="nav-main-link-name">Create</span>
                                            </a>
                                        </li>
                                        <li className="nav-main-item">
                                            <a className="nav-main-link" href="be_pages_ecom_store_search.html">
                                                <span className="nav-main-link-name">List</span>
                                            </a>
                                        </li>
                                        
                                    </ul>
                                </li>
                            </ul>
                        </li>
                       
                       </ul>
                </div>
            </nav>
        </>
     );
}
 
export default HeaderSidebar;