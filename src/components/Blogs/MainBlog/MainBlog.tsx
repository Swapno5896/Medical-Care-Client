import React, { useEffect } from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
import BlogComments from './../BlogComments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';
import DetailBlog from '../DetailBlog/DetailBlog'
import { connect } from 'react-redux';
import { Deposit, Withdraw, LoadBlog, LoadBlogAsync } from '../../../redux/action-creators/action-creators'
const mapStateToProps = (state: any) => {
    return {
        money: state.money,
        blog: state.blog
    }
}
const mapDispatchToProps = {
    Deposit, Withdraw, LoadBlogAsync
}
const MainBlog = (props: any) => {
    console.log('props from blog', props);

    useEffect(() => {
        props.LoadBlogAsync()
    }, [])

    // we can get blog from api by : http://localhost:9000/getBlog
    const fakeBlogs = [
        {
            img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post15.jpg
          `, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
        },
        {
            img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-12.jpg
          `, title: 'Customer Connections', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
        },
        {
            img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-17-800x600.jpg
          `, title: 'One Call Does It All', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
        },
        {
            img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-7-800x600.jpg
          `, title: 'Make Moving Easy', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
        },
        {
            img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-8.jpg
          `, title: 'Refresh Tired Walls', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
        },
        {
            img: `https://servicemaster.qodeinteractive.com/wp-content/uploads/2017/03/blog-post-6.jpg
          `, title: 'Outdoor Space', date: ' March 22, 2017', discription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad ipsam facere optio laboriosam excepturi ipsum,'
        },
    ]

    const uploadBlog = () => {
        fetch('http://localhost:9000/addBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(fakeBlogs),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
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
    if (props.blog?.isLoading == true) {
        return (
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
            <button onClick={uploadBlog}>upload blog</button>

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