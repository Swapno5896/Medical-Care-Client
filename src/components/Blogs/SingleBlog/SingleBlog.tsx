import React from 'react';
import BlogComments from '../BlogComments/BlogComments';
import DetailBlog from '../DetainBlog/DetainBlog'
import SideBlogs from '../SideBlogs/SideBlogs';
const SingleBlog = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <DetailBlog />
                    <BlogComments></BlogComments>
                </div>
                <div className="col-md-4">
                    <SideBlogs></SideBlogs>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;