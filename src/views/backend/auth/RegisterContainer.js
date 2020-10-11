import React from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../../../components/backend/auth/Register/RegisterForm';

const RegisterContainer = () => {
    return ( 
        <>
            <div id="page-container">
                <main id="main-container">
                    <div className="bg-image">
                        <div className="hero-static bg-white-95">
                            <div className="content">
                                <div className="row justify-content-center">
                                    <div className="col-md-8 col-lg-6 col-xl-4">
                                        <div className="block block-themed block-fx-shadow mb-0">
                                            <div className="block-header bg-success">
                                                <h3 className="block-title">Create Account</h3>
                                                <div className="block-options">
                                                    {/* <a className="btn-block-option font-size-sm" href="op_auth_reminder.html">Forgot Password?</a> */}
                                                    <Link className="btn-block-option" to="/" data-toggle="tooltip" data-placement="left" title="Sign In"><i className="fa fa-sign-in-alt"></i></Link>
                                                </div>
                                            </div>
                                            <div className="block-content">
                                                <div className="p-sm-3 px-lg-4 py-lg-5">
                                                    <h1 className="mb-2">OneUI</h1>
                                                    <p>Please fill the following details to create a new account.</p>
                                                    <RegisterForm />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content content-full font-size-sm text-muted text-center">
                                <strong>OneUI 4.5</strong> &copy; <span data-toggle="year-copy"></span>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
     );
}
 
export default RegisterContainer;