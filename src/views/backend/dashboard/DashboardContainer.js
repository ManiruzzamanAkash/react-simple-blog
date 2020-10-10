import React from 'react';
import MainLayout from '../../../components/backend/layouts/base-content/MainLayout';

const DashboardContainer = () => {
    return ( 
        <MainLayout>
            {/* <!-- Hero --> */}
            <div className="bg-image overflow-hidden" style={{ backgroundImage: "url('assets/media/photos/photo3@2x.jpg')" }}>
                <div className="bg-primary-dark-op">
                    <div className="content content-narrow content-full">
                        <div className="d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center mt-5 mb-2 text-center text-sm-left">
                            <div className="flex-sm-fill">
                                <h1 className="font-w600 text-white mb-0 invisible" data-toggle="appear">Dashboard</h1>
                                <h2 className="h4 font-w400 text-white-75 mb-0 invisible" data-toggle="appear" data-timeout="250">Welcome Administrator</h2>
                            </div>
                            <div className="flex-sm-00-auto mt-3 mt-sm-0 ml-sm-3">
                                <span className="d-inline-block invisible" data-toggle="appear" data-timeout="350">
                                    <a className="btn btn-primary px-4 py-2" data-toggle="click-ripple">
                                        <i className="fa fa-plus mr-1"></i> New Project
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END Hero --> */}

            {/* <!-- Page Content --> */}
            <div className="content content-narrow">
                {/* <!-- Stats --> */}
                <div className="row">
                    <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                        <a className="block block-rounded block-link-pop border-left border-primary border-4x">
                            <div className="block-content block-content-full">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Visitors</div>
                                <div className="font-size-h2 font-w400 text-dark">120,580</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                        <a className="block block-rounded block-link-pop border-left border-primary border-4x">
                            <div className="block-content block-content-full">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Sales</div>
                                <div className="font-size-h2 font-w400 text-dark">150</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                        <a className="block block-rounded block-link-pop border-left border-primary border-4x">
                            <div className="block-content block-content-full">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Earnings</div>
                                <div className="font-size-h2 font-w400 text-dark">$3,200</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-6 col-md-3 col-lg-6 col-xl-3">
                        <a className="block block-rounded block-link-pop border-left border-primary border-4x">
                            <div className="block-content block-content-full">
                                <div className="font-size-sm font-w600 text-uppercase text-muted">Avg Sale</div>
                                <div className="font-size-h2 font-w400 text-dark">$21</div>
                            </div>
                        </a>
                    </div>
                </div>
                {/* <!-- END Stats --> */}

                {/* <!-- Dashboard Charts --> */}
                <div className="row">
                    <div className="col-lg-6">
                        <div className="block block-rounded block-mode-loading-oneui">
                            <div className="block-header block-header-default">
                                <h3 className="block-title">Earnings in $</h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh"></i>
                                    </button>
                                    <button type="button" className="btn-block-option">
                                        <i className="si si-settings"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="block-content p-0 text-center">
                                {/* <!-- Chart.js is initialized in js/pages/be_pages_dashboard.min.js which was auto compiled from _es6/pages/be_pages_dashboard.js) --> */}
                                {/* <!-- For more info and examples you can check out http://www.chartjs.org/docs/ --> */}
                                <div className="pt-3" style={{ height: 360 }}><canvas className="js-chartjs-dashboard-earnings"></canvas></div>
                            </div>
                            <div className="block-content">
                                <div className="row items-push text-center py-3">
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-wallet fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">$148,000</div>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-angle-double-up fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">+9% Earnings</div>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-ticket-alt fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">+20% Tickets</div>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-users fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">+46% Clients</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="block block-rounded block-mode-loading-oneui">
                            <div className="block-header block-header-default">
                                <h3 className="block-title">Sales</h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh"></i>
                                    </button>
                                    <button type="button" className="btn-block-option">
                                        <i className="si si-settings"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="block-content p-0 text-center">
                                {/* <!-- Chart.js is initialized in js/pages/be_pages_dashboard.min.js which was auto compiled from _es6/pages/be_pages_dashboard.js) --> */}
                                {/* <!-- For more info and examples you can check out http://www.chartjs.org/docs/ --> */}
                                <div className="pt-3" style={{ height: 360 }}><canvas className="js-chartjs-dashboard-sales"></canvas></div>
                            </div>
                            <div className="block-content">
                                <div className="row items-push text-center py-3">
                                    <div className="col-6 col-xl-3">
                                        <i className="fab fa-wordpress fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">+20% Themes</div>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-font fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">+25% Fonts</div>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-archive fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">-10% Icons</div>
                                    </div>
                                    <div className="col-6 col-xl-3">
                                        <i className="fa fa-paint-brush fa-2x text-muted"></i>
                                        <div className="text-muted mt-3">+8% Graphics</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- END Dashboard Charts --> */}

                {/* <!-- Customers and Latest Orders --> */}
                <div className="row row-deck">
                    {/* <!-- Latest Customers --> */}
                    <div className="col-lg-6">
                        <div className="block block-mode-loading-oneui">
                            <div className="block-header block-header-default">
                                <h3 className="block-title">Latest Customers</h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh"></i>
                                    </button>
                                    <button type="button" className="btn-block-option">
                                        <i className="si si-settings"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="block-content block-content-full">
                                <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm mb-0">
                                    <thead>
                                        <tr className="text-uppercase">
                                            <th className="font-w700" style={{ width: 80 }}>ID</th>
                                            <th className="d-none d-sm-table-cell font-w700 text-center" style={{ width: 100 }}>Photo</th>
                                            <th className="font-w700">Name</th>
                                            <th className="d-none d-sm-table-cell font-w700 text-center" style={{ width: 80 }}>Orders</th>
                                            <th className="font-w700 text-center" style={{ width: 60 }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar16.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                Adam McCoy                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">5</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar1.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                Megan Fuller                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">14</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar11.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                David Fuller                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">15</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar2.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                Carol Ray                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">36</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar12.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                Henry Harrison                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">3</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar3.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                Lori Moore                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">1</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#01368</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <img className="img-avatar img-avatar32" src="assets/media/avatars/avatar12.jpg" alt="" />
                                            </td>
                                            <td className="font-w600">
                                                Jose Mills                                </td>
                                            <td className="d-none d-sm-table-cell text-center">
                                                <a className="link-fx font-w600">12</a>
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Edit">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- END Latest Customers --> */}

                    {/* <!-- Latest Orders --> */}
                    <div className="col-lg-6">
                        <div className="block block-mode-loading-oneui">
                            <div className="block-header block-header-default">
                                <h3 className="block-title">Latest Orders</h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-toggle="block-option" data-action="state_toggle" data-action-mode="demo">
                                        <i className="si si-refresh"></i>
                                    </button>
                                    <button type="button" className="btn-block-option">
                                        <i className="si si-settings"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="block-content block-content-full">
                                <table className="table table-striped table-hover table-borderless table-vcenter font-size-sm mb-0">
                                    <thead>
                                        <tr className="text-uppercase">
                                            <th className="font-w700">ID</th>
                                            <th className="d-none d-sm-table-cell font-w700">Date</th>
                                            <th className="font-w700">State</th>
                                            <th className="d-none d-sm-table-cell font-w700 text-right"style={{ width: 120 }}>Price</th>
                                            <th className="font-w700 text-center" style={{ width: 60 }}></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07835</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">today</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-warning">Pending..</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $999,99
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07834</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">today</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-warning">Pending..</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $2.299,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07833</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">today</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-success">Completed</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $1200,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07832</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">today</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-danger">Cancelled</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $399,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07831</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">yesterday</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-success">Completed</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $349,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07830</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">yesterday</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-success">Completed</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $999,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07829</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">yesterday</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-success">Completed</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $39,99
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07828</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">yesterday</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-success">Completed</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $499,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="font-w600">#07827</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell">
                                                <span className="font-size-sm text-muted">yesterday</span>
                                            </td>
                                            <td>
                                                <span className="font-w600 text-success">Completed</span>
                                            </td>
                                            <td className="d-none d-sm-table-cell text-right">
                                                $325,00
                                            </td>
                                            <td className="text-center">
                                                <a data-toggle="tooltip" data-placement="left" title="Manage">
                                                    <i className="fa fa-fw fa-pencil-alt"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
     );
}
 
export default DashboardContainer;