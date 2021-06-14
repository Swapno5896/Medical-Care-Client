import React from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';

const MainBlog = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <BlogCarrd />
            </div>
        </div>
    );
};

export default MainBlog;