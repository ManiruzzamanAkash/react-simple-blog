import React from 'react';

const Header = () => {

    const changeStatus = (e) => {
        // change active state
    }

    return ( 
        <aside id="side-overlay" className="font-size-sm">
                <div className="content-header border-bottom">
                    <a className="img-link mr-1">
                        <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar10.jpg" alt="" />
                    </a>

                    <div className="ml-2">
                        <a className="link-fx text-dark font-w600">Adam McCoy</a>
                    </div>

                    <a className="ml-auto btn btn-sm btn-alt-danger" data-toggle="layout" data-action="side_overlay_close">
                        <i className="fa fa-fw fa-times text-danger"></i>
                    </a>
                </div>
                
                <div className="content-side">
                    <div className="block block-transparent pull-x pull-t">
                        <ul className="nav nav-tabs nav-tabs-alt nav-justified" data-toggle="tabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" href="#so-overview">
                                    <i className="fa fa-fw fa-coffee text-gray mr-1"></i> Overview
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#so-sales">
                                    <i className="fa fa-fw fa-chart-line text-gray mr-1"></i> Sales
                                </a>
                            </li>
                        </ul>
                        <div className="block-content tab-content overflow-hidden">
                            <div className="tab-pane pull-x fade fade-left show active" id="so-overview" role="tabpanel">
                                
                                <div className="block">
                                    <div className="block-header block-header-default">
                                        <h3 className="block-title">Recent Activity</h3>
                                        <div className="block-options">
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                <i className="si si-refresh"></i>
                                            </button>
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <ul className="nav-items mb-0">
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="si si-wallet text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale ($15)</div>
                                                        <div className="text-success">Admin Template</div>
                                                        <small className="text-muted">3 min ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="si si-pencil text-info"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">You edited the file</div>
                                                        <div className="text-info">
                                                            <i className="fa fa-file-text"></i> Documentation.doc
                                                        </div>
                                                        <small className="text-muted">15 min ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="si si-close text-danger"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Project deleted</div>
                                                        <div className="text-danger">Line Icon Set</div>
                                                        <small className="text-muted">4 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="block">
                                    <div className="block-header block-header-default">
                                        <h3 className="block-title">Online Friends</h3>
                                        <div className="block-options">
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                                <i className="si si-refresh"></i>
                                            </button>
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <ul className="nav-items mb-0">
                                            <li>
                                                <a className="media py-2">
                                                    <div className="mr-3 ml-2 overlay-container overlay-bottom">
                                                        <img className="img-avatar img-avatar48" src="assets/media/avatars/avatar1.jpg" alt="" />
                                                        <span className="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Lori Moore</div>
                                                        <div className="font-w400 text-muted">Copywriter</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="media py-2">
                                                    <div className="mr-3 ml-2 overlay-container overlay-bottom">
                                                        <img className="img-avatar img-avatar48" src="assets/media/avatars/avatar15.jpg" alt="" />
                                                        <span className="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Jeffrey Shaw</div>
                                                        <div className="font-w400 text-muted">Web Developer</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="media py-2">
                                                    <div className="mr-3 ml-2 overlay-container overlay-bottom">
                                                        <img className="img-avatar img-avatar48" src="assets/media/avatars/avatar6.jpg" alt="" />
                                                        <span className="overlay-item item item-tiny item-circle border border-2x border-white bg-success"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Marie Duncan</div>
                                                        <div className="font-w400 text-muted">Web Designer</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="media py-2">
                                                    <div className="mr-3 ml-2 overlay-container overlay-bottom">
                                                        <img className="img-avatar img-avatar48" src="assets/media/avatars/avatar1.jpg" alt="" />
                                                        <span className="overlay-item item item-tiny item-circle border border-2x border-white bg-warning"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Danielle Jones</div>
                                                        <div className="font-w400 text-muted">Photographer</div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="media py-2">
                                                    <div className="mr-3 ml-2 overlay-container overlay-bottom">
                                                        <img className="img-avatar img-avatar48" src="assets/media/avatars/avatar14.jpg" alt="" />
                                                        <span className="overlay-item item item-tiny item-circle border border-2x border-white bg-warning"></span>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Wayne Garcia</div>
                                                        <div className="font-w400 text-muted">Graphic Designer</div>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="block mb-0">
                                    <div className="block-header block-header-default">
                                        <h3 className="block-title">Quick Settings</h3>
                                        <div className="block-options">
                                            <button type="button" className="btn-block-option" data-toggle="block-option" data-action="content_toggle"></button>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <form action="be_pages_dashboard.html" method="POST">
                                            <div className="form-group">
                                                <p className="font-w600 mb-2">
                                                    Online Status
                                                </p>
                                                <div className="custom-control custom-switch mb-1">
                                                    <input type="checkbox" className="custom-control-input" id="so-settings-check1" name="so-settings-check1" onChange={(e) => changeStatus(e)} />
                                                    <label className="custom-control-label" htmlFor="so-settings-check1">Show your status to all</label>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="form-group">
                                                <p className="font-w600 mb-2">
                                                    Auto Updates
                                                </p>
                                                <div className="custom-control custom-switch mb-1">
                                                    <input type="checkbox" className="custom-control-input" id="so-settings-check2" name="so-settings-check2" onChange={(e) => changeStatus(e)} />
                                                    <label className="custom-control-label" htmlFor="so-settings-check2">Keep up to date</label>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="form-group">
                                                <p className="font-w600 mb-1">
                                                    Application Alerts
                                                </p>
                                                <div className="custom-control custom-switch mb-1">
                                                    <input type="checkbox" className="custom-control-input" id="so-settings-check3" name="so-settings-check3" onChange={(e) => changeStatus(e)} />
                                                    <label className="custom-control-label" htmlFor="so-settings-check3">Email Notifications</label>
                                                </div>
                                                <div className="custom-control custom-switch mb-1">
                                                    <input type="checkbox" className="custom-control-input" id="so-settings-check4" name="so-settings-check4" onChange={(e) => changeStatus(e)} />
                                                    <label className="custom-control-label" htmlFor="so-settings-check4">SMS Notifications</label>
                                                </div>
                                            </div>
                                            <hr />
                                            <div className="form-group">
                                                <p className="font-w600 mb-1">
                                                    API
                                                </p>
                                                <div className="custom-control custom-switch mb-1">
                                                    <input type="checkbox" className="custom-control-input" id="so-settings-check5" name="so-settings-check5" onChange={(e) => changeStatus(e)} />
                                                    <label className="custom-control-label" htmlFor="so-settings-check5">Enable access</label>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="tab-pane pull-x fade fade-right" id="so-sales" role="tabpanel">
                                <div className="block mb-0">
                                    <div className="block-content">
                                        <div className="row items-push pull-t">
                                            <div className="col-6">
                                                <div className="font-w700 text-uppercase">Sales</div>
                                                <a className="link-fx font-size-h3 font-w300">22.030</a>
                                            </div>
                                            <div className="col-6">
                                                <div className="font-w700 text-uppercase">Balance</div>
                                                <a className="link-fx font-size-h3 font-w300">$4.589,00</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="block-content block-content-full block-content-sm bg-body-light">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="font-w600 text-uppercase">Today</span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <span className="ext-muted">$996</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <ul className="nav-items push">
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $249</div>
                                                        <small className="text-muted">3 min ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $129</div>
                                                        <small className="text-muted">50 min ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $119</div>
                                                        <small className="text-muted">2 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $499</div>
                                                        <small className="text-muted">3 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="block-content block-content-full block-content-sm bg-body-light">
                                        <div className="row">
                                            <div className="col-6">
                                                <span className="font-w600 text-uppercase">Yesterday</span>
                                            </div>
                                            <div className="col-6 text-right">
                                                <span className="text-muted">$765</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="block-content">
                                        <ul className="nav-items push">
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $249</div>
                                                        <small className="text-muted">26 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-danger"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Product Purchase - $50</div>
                                                        <small className="text-muted">28 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $119</div>
                                                        <small className="text-muted">29 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-danger"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">Paypal Withdrawal - $300</div>
                                                        <small className="text-muted">37 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $129</div>
                                                        <small className="text-muted">39 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $119</div>
                                                        <small className="text-muted">45 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="text-dark media py-2">
                                                    <div className="mr-3 ml-2">
                                                        <i className="fa fa-fw fa-circle text-success"></i>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="font-w600">New sale! + $499</div>
                                                        <small className="text-muted">46 hours ago</small>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                        <div className="text-center">
                                            <a className="btn btn-sm btn-light">
                                                <i className="fa fa-arrow-down mr-1"></i> Load More..
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
     );
}
 
export default Header;