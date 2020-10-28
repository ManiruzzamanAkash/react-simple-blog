import React, { useEffect }  from 'react';
import { withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { getPostAction } from '../../../../redux/backend/post/PostAction';

const PostList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.post.isLoading);
    const postList = useSelector((state) => state.post.postList);

    useEffect(() => {
        dispatch(getPostAction());
    }, []);

    return ( 
        <>
        {
            isLoading &&
            <div>
                <i className="fa fa-spinner"></i>
            </div>
        }
        {
            !isLoading &&
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Sl</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        postList.map((post, index) => (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{post.title}</td>
                                <td>{post.body}</td>
                                <td>
                                    <button className="btn btn-sanger">
                                        <i className="fa fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        }
        </>
     );
}
 
export default PostList;