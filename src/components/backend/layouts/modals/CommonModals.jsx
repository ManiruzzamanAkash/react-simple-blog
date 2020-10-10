import React from 'react'

const CommonModals = () => {
    return ( 
        <>
         <div className="modal fade" id="one-modal-apps" tabIndex="-1" role="dialog" aria-labelledby="one-modal-apps" aria-hidden="true">
                <div className="modal-dialog modal-dialog-top modal-sm" role="document">
                    <div className="modal-content">
                        <div className="block block-themed block-transparent mb-0">
                            <div className="block-header bg-primary-dark">
                                <h3 className="block-title">Apps</h3>
                                <div className="block-options">
                                    <button type="button" className="btn-block-option" data-dismiss="modal" aria-label="Close">
                                        <i className="si si-close"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="block-content block-content-full">
                                <div className="row gutters-tiny">
                                    <div className="col-6">
                                        <a className="block block-rounded block-themed bg-default">
                                            <div className="block-content text-center">
                                                <i className="si si-speedometer fa-2x text-white-75"></i>
                                                <p className="font-w600 font-size-sm text-white mt-2 mb-3">
                                                    CRM
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a className="block block-rounded block-themed bg-danger">
                                            <div className="block-content text-center">
                                                <i className="si si-rocket fa-2x text-white-75"></i>
                                                <p className="font-w600 font-size-sm text-white mt-2 mb-3">
                                                    Products
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a className="block block-rounded block-themed bg-success mb-0">
                                            <div className="block-content text-center">
                                                <i className="si si-plane fa-2x text-white-75"></i>
                                                <p className="font-w600 font-size-sm text-white mt-2 mb-3">
                                                    Sales
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-6">
                                        <a className="block block-rounded block-themed bg-warning mb-0">
                                            <div className="block-content text-center">
                                                <i className="si si-wallet fa-2x text-white-75"></i>
                                                <p className="font-w600 font-size-sm text-white mt-2 mb-3">
                                                    Payments
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default CommonModals;