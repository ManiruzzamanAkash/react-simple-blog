import React from 'react';
import LoginForm from '../../../components/backend/auth/Login/LoginForm';

const LoginContainer = () => {
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
                                            <div className="block-header">
                                                <h3 className="block-title">Sign In</h3>
                                                <div className="block-options">
                                                    <a className="btn-block-option font-size-sm" href="op_auth_reminder.html">Forgot Password?</a>
                                                    <a className="btn-block-option" href="op_auth_signup.html" data-toggle="tooltip" data-placement="left" title="New Account">
                                                        <i className="fa fa-user-plus"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="block-content">
                                                <div className="p-sm-3 px-lg-4 py-lg-5">
                                                    <h1 className="mb-2">OneUI</h1>
                                                    <p>Welcome, please login.</p>
                                                    <LoginForm />
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
 
export default LoginContainer;