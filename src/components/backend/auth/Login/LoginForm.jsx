import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginSubmitAction } from '../../../../redux/backend/auth/AuthAction';

const LoginForm = withRouter(({ history, props }) => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const loginMessage = useSelector((state) => state.auth.loginMessage);

    useEffect(() => {
        if (typeof loginMessage === 'undefined' || loginMessage === null) {
            toast.error("Something Went Wrong", {
                autoClose: 2000,
                className: "dangerColor",
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } else {
            if (isLoggedIn && loginMessage.length > 0) {
                toast.success(loginMessage, {
                    autoClose: 2000,
                    className: "primaryColor",
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                history.push("/dashboard");
            }
            if (!isLoggedIn && loginMessage.length > 0) {
                toast.error(loginMessage, {
                    autoClose: 2000,
                    className: "dangerColor",
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        }
    }, [isLoggedIn, loginMessage, history]);

    const submitHandler = (data) => {
        dispatch(loginSubmitAction(data));
    }

    return ( 
        <>
            <form className="js-validation-signin" onSubmit={handleSubmit(submitHandler)} method="POST">
                <div className="py-3">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control form-control-alt form-control-lg" 
                            id="email" 
                            name="email" 
                            placeholder="Username or Email"
                            ref={register({
                                required: 'Please give your username or email address',
                                maxLength: 30
                            })}
                            autoComplete="email"
                        />
                        {
                            errors.email && 
                            <div className="text-danger text-sm">{errors.email.message}</div>
                        }
                    </div>
                    <div className="form-group">
                        <input type="password" 
                            className="form-control form-control-alt form-control-lg" 
                            id="password" 
                            name="password"
                            placeholder="Password" 
                            ref={register({
                                required: 'Please give your password',
                                minLength: 6
                            })}
                            autoComplete="current-password"
                        />
                        {
                            errors.password && 
                            <div className="text-danger text-sm">{errors.password.message}</div>
                        }
                    </div>
                    <div className="form-group">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="login-remember" name="login-remember" />
                            <label className="custom-control-label font-w400" htmlFor="login-remember">Remember Me</label>
                        </div>
                    </div>
                </div>
                <div className="form-group row">
                    <div className="col-md-8 col-xl-8">
                        {
                            isLoading && 
                            <button type="submit" className="btn btn-block btn-primary">
                                <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Signing in...
                            </button>
                        }
                        {
                            !isLoading && 
                            <button type="submit" className="btn btn-block btn-primary" onSubmit={() => submitHandler()}>
                                <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Sign In
                            </button>
                        }
                        
                    </div>
                </div>
            </form>
        </>
     );
})
 
export default LoginForm;