import React from 'react'
import UserHeaderInfo from './user-data/UserHeaderInfo';

const PageHeader = () => {
    return ( 
        <>
          <header id="page-header">
                <div className="content-header">
                    <div className="d-flex align-items-center">
                        <button type="button" className="btn btn-sm btn-dual mr-2 d-lg-none" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>

                        <button type="button" className="btn btn-sm btn-dual mr-2 d-none d-lg-inline-block" data-toggle="layout" data-action="sidebar_mini_toggle">
                            <i className="fa fa-fw fa-ellipsis-v"></i>
                        </button>

                        <button type="button" className="btn btn-sm btn-dual mr-2" data-toggle="modal" data-target="#one-modal-apps">
                            <i className="si si-grid"></i>
                        </button>
                        <button type="button" className="btn btn-sm btn-dual d-sm-none" data-toggle="layout" data-action="header_search_on">
                            <i className="si si-magnifier"></i>
                        </button>

                        <form className="d-none d-sm-inline-block" action="be_pages_generic_search.html" method="POST">
                            <div className="input-group input-group-sm">
                                <input type="text" className="form-control form-control-alt" placeholder="Search.." id="page-header-search-input2" name="page-header-search-input2" />
                                <div className="input-group-append">
                                    <span className="input-group-text bg-body border-0">
                                        <i className="si si-magnifier"></i>
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="d-flex align-items-center">
                        <div className="dropdown d-inline-block ml-2">
                            <button type="button" className="btn btn-sm btn-dual" id="page-header-user-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <UserHeaderInfo isAvatar={true} isName={true}/>
                                <i className="fa fa-fw fa-angle-down d-none d-sm-inline-block"></i>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="page-header-user-dropdown">
                                <div className="p-3 text-center bg-primary">
                                    <img className="img-avatar img-avatar48 img-avatar-thumb" src="/assets/media/avatars/avatar10.jpg" alt="" />
                                </div>
                                <div className="p-2">
                                    <h5 className="dropdown-header text-uppercase">User Options</h5>
                                    <a className="dropdown-item d-flex align-items-center justify-content-between" href="op_auth_signin.html">
                                        <span>Log Out</span>
                                        <i className="si si-logout ml-1"></i>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="dropdown d-inline-block ml-2">
                            <button type="button" className="btn btn-sm btn-dual" id="page-header-notifications-dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="si si-bell"></i>
                                <span className="badge badge-primary badge-pill">6</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0 border-0 font-size-sm" aria-labelledby="page-header-notifications-dropdown">
                                <div className="p-2 bg-primary text-center">
                                    <h5 className="dropdown-header text-uppercase text-white">Notifications</h5>
                                </div>
                                <ul className="nav-items mb-0">
                                    <li>
                                        <a className="text-dark media py-2">
                                            <div className="mr-2 ml-3">
                                                <i className="fa fa-fw fa-check-circle text-success"></i>
                                            </div>
                                            <div className="media-body pr-2">
                                                <div className="font-w600">You have a new follower</div>
                                                <small className="text-muted">15 min ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2">
                                            <div className="mr-2 ml-3">
                                                <i className="fa fa-fw fa-plus-circle text-info"></i>
                                            </div>
                                            <div className="media-body pr-2">
                                                <div className="font-w600">1 new sale, keep it up</div>
                                                <small className="text-muted">22 min ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2">
                                            <div className="mr-2 ml-3">
                                                <i className="fa fa-fw fa-times-circle text-danger"></i>
                                            </div>
                                            <div className="media-body pr-2">
                                                <div className="font-w600">Update failed, restart server</div>
                                                <small className="text-muted">26 min ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2">
                                            <div className="mr-2 ml-3">
                                                <i className="fa fa-fw fa-plus-circle text-info"></i>
                                            </div>
                                            <div className="media-body pr-2">
                                                <div className="font-w600">2 new sales, keep it up</div>
                                                <small className="text-muted">33 min ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2">
                                            <div className="mr-2 ml-3">
                                                <i className="fa fa-fw fa-user-plus text-success"></i>
                                            </div>
                                            <div className="media-body pr-2">
                                                <div className="font-w600">You have a new subscriber</div>
                                                <small className="text-muted">41 min ago</small>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="text-dark media py-2">
                                            <div className="mr-2 ml-3">
                                                <i className="fa fa-fw fa-check-circle text-success"></i>
                                            </div>
                                            <div className="media-body pr-2">
                                                <div className="font-w600">You have a new follower</div>
                                                <small className="text-muted">42 min ago</small>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="p-2 border-top">
                                    <a className="btn btn-sm btn-light btn-block text-center">
                                        <i className="fa fa-fw fa-arrow-down mr-1"></i> Load More..
                                    </a>
                                </div>
                            </div>
                        </div>

                        <button type="button" className="btn btn-sm btn-dual ml-2" data-toggle="layout" data-action="side_overlay_toggle">
                            <i className="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
                        </button>
                    </div>
                </div>

                <div id="page-header-search" className="overlay-header bg-white">
                    <div className="content-header">
                        <form className="w-100" action="be_pages_generic_search.html" method="POST">
                            <div className="input-group input-group-sm">
                                <div className="input-group-prepend">
                                    <button type="button" className="btn btn-danger" data-toggle="layout" data-action="header_search_off">
                                        <i className="fa fa-fw fa-times-circle"></i>
                                    </button>
                                </div>
                                <input type="text" className="form-control" placeholder="Search or hit ESC.." id="page-header-search-input" name="page-header-search-input" />
                            </div>
                        </form>
                    </div>
                </div>
                
                <div id="page-header-loader" className="overlay-header bg-white">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-circle-notch fa-spin"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default PageHeader;