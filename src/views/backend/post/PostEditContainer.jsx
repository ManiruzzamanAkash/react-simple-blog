import React from 'react';
import MainLayout from '../../../components/backend/layouts/base-content/MainLayout';
import PostEdit from '../../../components/backend/post/edit/PostEdit';

const PostEditContainer = () => {
    return ( 
        <MainLayout>
            <PostEdit />
        </MainLayout>
    );
}
 
export default PostEditContainer;