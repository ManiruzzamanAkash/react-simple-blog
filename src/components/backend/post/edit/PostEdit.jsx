import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { Link, useParams, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { storePostAction } from '../../../../redux/backend/post/PostAction';

const PostEdit = withRouter(({ history, props }) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, getValues, reset } = useForm();
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.post.isLoading);
    const postAddMessage = useSelector((state) => state.post.postAddMessage);
    const postAddStatus = useSelector((state) => state.post.postAddStatus);

    const submitHandler = (data) => {
        dispatch(storePostAction(data));
    }

    useEffect(() => {
        if (typeof postAddMessage !== 'undefined' || postAddMessage !== null) {
            if (postAddStatus && postAddMessage.length > 0) {
                // history.push("/posts"); 
                // We can push to list OR, make feilds empty.
                reset({
                    title: "",
                    body: ""
                });
            }
        }
    }, [postAddStatus, postAddMessage, history]);

    return ( 
        <>
                <div className="content bg-gray-lighter">
                    <div className="row items-push">
                        <div className="col-sm-8">
                            <h1 className="page-heading">
                                Edit Post
                            </h1>
                        </div>
                        <div className="col-sm-4 text-right hidden-xs">
                            <ol className="breadcrumb push-10-t">
                                <li>
                                    <Link to="/posts">Posts</Link>
                                </li>
                                <li className="link-effect">Edit Post</li>
                            </ol>
                        </div>
                    </div>
                </div>

                <div className="content content-narrow">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <div className="block-content block-content-narrow">
                                    <form className="form-horizontal push-10-t add-post-form" onSubmit={handleSubmit(submitHandler)} method="POST">
                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="post-title">Title</label>
                                                    <input className="form-control" 
                                                        type="text" id="post-title" 
                                                        name="title" 
                                                        placeholder="Post Title"
                                                        required="" 
                                                        aria-required="true" 
                                                        ref={register({
                                                            required: 'Please give post title'
                                                        })}
                                                        autoComplete="name"
                                                    />
                                                    {
                                                        errors.title && 
                                                        <div className="text-danger text-sm">{errors.title.message}</div>
                                                    }
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <label htmlFor="post-body">Description</label>
                                                    <textarea 
                                                        className="form-control" 
                                                        type="text" 
                                                        id="post-body" 
                                                        name="body" 
                                                        placeholder="Post Description" 
                                                        required="" 
                                                        aria-required="true" 
                                                        ref={register({
                                                            required: 'Please give post description'
                                                        })}
                                                    ></textarea>
                                                    {
                                                        errors.body && 
                                                        <div className="text-danger text-sm">{errors.body.message}</div>
                                                    }
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-9">
                                                <button className="btn btn-sm btn-primary" type="submit">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
     );
})
 
export default PostEdit;