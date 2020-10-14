import React from 'react';

const PostCreate = () => {
    return ( 
        <>
            {/* <!-- Page Header --> */}
                <div className="content bg-gray-lighter">
                    <div className="row items-push">
                        <div className="col-sm-8">
                            <h1 className="page-heading">
                                Create Post
                            </h1>
                        </div>
                        <div className="col-sm-4 text-right hidden-xs">
                            <ol className="breadcrumb push-10-t">
                                <li><a href="http://laravel07-starter.herokuapp.com/administrator/posts">Posts</a></li>
                                <li className="link-effect">Create Post</li>
                            </ol>
                        </div>
                    </div>
                </div>
                {/* <!-- END Page Header --> */}

                {/* <!-- Page Content --> */}
                <div className="content content-narrow">
                    <div className="row">
                        <div className="col-md-12">
                            {/* <!-- Static Labels --> */}
                            <div className="block">
                                <div className="block-content block-content-narrow">
                                    <form className="form-horizontal push-10-t add-post-form" action="" method="post" noValidate="novalidate">
                                        {/* <input type="hidden" name="_token" value="c8ASC4EeZ1OISPDK9JBxaz85ZfzDrVpnbWtyW9DB" /> */}

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <input className="form-control" type="text" id="post-title" name="title" placeholder="Post Title" value="" required="" aria-required="true" />
                                                    <label htmlFor="post-title">Title</label>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="col-sm-12">
                                                <div className="form-material form-material-primary">
                                                    <textarea className="form-control" type="text" id="post-body" name="body" placeholder="Post Description" required="" aria-required="true"></textarea>
                                                    <label htmlFor="post-body">Description</label>
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
                            {/* <!-- END Static Labels --> */}
                        </div>
                    </div>
                </div>
                {/* <!-- END Page Content --> */}
        </>
     );
}
 
export default PostCreate;