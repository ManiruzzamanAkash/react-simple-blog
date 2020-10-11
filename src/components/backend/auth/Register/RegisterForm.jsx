import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registerSubmitAction } from '../../../../redux/backend/auth/AuthAction';

const RegisterForm = withRouter(({ history, props }) => {
    const { register, handleSubmit, errors, getValues } = useForm();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.isLoading);
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const registerMessage = useSelector((state) => state.auth.registerMessage);

    useEffect(() => {
        if (typeof registerMessage === 'undefined' || registerMessage === null) {
            toast.error("Something Went Wrong", {
                autoClose: 2000,
                className: "dangerColor",
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } else {
            if (isLoggedIn && registerMessage.length > 0) {
                toast.success(registerMessage, {
                    autoClose: 2000,
                    className: "primaryColor",
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
                history.push("/dashboard");
            }
            if (!isLoggedIn && registerMessage.length > 0) {
                toast.error(registerMessage, {
                    autoClose: 2000,
                    className: "dangerColor",
                    position: toast.POSITION.BOTTOM_RIGHT,
                });
            }
        }
    }, [isLoggedIn, registerMessage, history]);

    const submitHandler = (data) => {
        dispatch(registerSubmitAction(data));
    }

    return ( 
        <>
            <form className="js-validation-signin" onSubmit={handleSubmit(submitHandler)} method="POST">
                <div className="py-3">
                    <div className="form-group">
                        <input 
                            type="text" 
                            className="form-control form-control-alt form-control-lg" 
                            id="name" 
                            name="name" 
                            placeholder="Name"
                            ref={register({
                                required: 'Please give your name',
                                maxLength: 30
                            })}
                            autoComplete="name"
                        />
                        {
                            errors.name && 
                            <div className="text-danger text-sm">{errors.name.message}</div>
                        }
                    </div>
                    <div className="form-group">
                        <input 
                            type="email" 
                            className="form-control form-control-alt form-control-lg" 
                            id="email" 
                            name="email" 
                            placeholder="Email"
                            ref={register({
                                required: 'Please give your email address',
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
                        <input type="password" 
                            className="form-control form-control-alt form-control-lg" 
                            id="confirm_password" 
                            name="confirm_password"
                            placeholder="Confirm Password" 
                            ref={register({
                                required: 'Please confirm your password',
                                minLength: 6,
                                validate: (value) => value === getValues('password') || "Passwords don't match."
                            })}
                            autoComplete="confirm-password"
                        />
                        {
                            errors.confirm_password && 
                            <div className="text-danger text-sm">{errors.confirm_password.message}</div>
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
                            <button type="submit" className="btn btn-block btn-success">
                                <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Signing Up...
                            </button>
                        }
                        {
                            !isLoading && 
                            <button type="submit" className="btn btn-block btn-success" onSubmit={() => submitHandler()}>
                                <i className="fa fa-fw fa-sign-in-alt mr-1"></i> Sign Up
                            </button>
                        }
                        
                    </div>
                </div>
            </form>
        </>
     );
})
 
export default RegisterForm;