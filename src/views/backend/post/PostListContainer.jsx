import React from 'react';
import MainLayout from '../../../components/backend/layouts/base-content/MainLayout';
import PostList from '../../../components/backend/post/list/PostList';

const PostListContainer = () => {
    return ( 
    <MainLayout>
        <PostList />
    </MainLayout>
    );
}
 
export default PostListContainer;