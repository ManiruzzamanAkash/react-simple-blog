import React from 'react';
import MainLayout from '../../../components/backend/layouts/base-content/MainLayout';
import PostCreate from '../../../components/backend/post/create/PostCreate';

const PostAddContainer = () => {
    return ( 
        <MainLayout>
            <PostCreate />
        </MainLayout>
    );
}
 
export default PostAddContainer;