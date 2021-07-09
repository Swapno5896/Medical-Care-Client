import React, { useEffect } from 'react';
import DetailBlog from '../DetailBlog/DetailBlog'
import BlogComments from '../BlogComments/BlogComments'
import SideBlogs from '../SideBlogs/SideBlogs'
import { connect } from 'react-redux';
import { Iblog } from '../MainBlog/MainBlog'

interface Iprops {
 blog: Iblog[]
}
const mapStateToProps = (state: any) => {
 return {

  blog: state.blog.blog
 }
}
const MainDetailBlog: React.FC<Iprops> = (props) => {
 return (
  <div className='d-flex justify-content-center'>
   <div className="row w-75">
    <div className="col-md-8">
     <DetailBlog />
     <BlogComments />
    </div>
    <div className="col-md-4">
     {
      props.blog?.map(dt => <SideBlogs></SideBlogs>)
     }

    </div>
   </div>   </div>
 )
}


export default connect(mapStateToProps)(MainDetailBlog);