import React, { useEffect } from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
import BlogComments from './../BlogComments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';
import DetailBlog from '../DetailBlog/DetailBlog'
import { connect } from 'react-redux';
import { Deposit, Withdraw,LoadBlog,LoadBlogAsync } from '../../../redux/action-creators/action-creators'
const mapStateToProps = (state: any) => {
    return {
        money: state.money,
        blog:state.blog
    }
}
const mapDispatchToProps = {
    Deposit, Withdraw,LoadBlogAsync
}
const MainBlog = (props: any) => {
    console.log('props from blog', props);
   
    useEffect(()=>{
props.LoadBlogAsync()
    },[])

    const fakeBlog = [
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
    ]
    const fakeSideBlog = [
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
        { name: 'fdslkfld', age: 12 },
    ]
    if(props.blog?.isLoading == true){
        return(
            <div
            style={{ height: "700px" }}
            className="d-flex justify-content-center align-items-center"
          >
            <div
              style={{ width: "3rem", height: "3rem" }}
              className="spinner-border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
    return (
        <div style={{ marginTop: '50px' }}>
   <h2>We have {props.money?.money} Tk</h2>  
            <button onClick={() => props.Deposit(1)}>Increment</button>
            <button onClick={() => props.Withdraw(1)}>Decrement</button>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    {
                        fakeBlog.map(dt => <BlogCarrd />)
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                <div className="row w-75">
                    <div className="col-md-8">
                        <DetailBlog />
                        <BlogComments></BlogComments>
                    </div>
                    <div className="col-md-4">
                        {
                            fakeSideBlog.map(dt => <SideBlogs></SideBlogs>)
                        }

                    </div>
                </div>   </div>
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBlog);