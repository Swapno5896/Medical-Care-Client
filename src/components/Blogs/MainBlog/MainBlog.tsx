import React, { useEffect } from 'react';
import BlogCarrd from './../BlogCarrd/BlogCarrd';
import BlogComments from './../BlogComments/BlogComments';
import SideBlogs from './../SideBlogs/SideBlogs';
import DetailBlog from '../DetailBlog/DetailBlog'
import { connect } from 'react-redux';
import { Deposit, Withdraw, LoadBlog, LoadBlogAsync } from '../../../redux/action-creators/action-creators'
import ShowLoading from '../../ShowLoading/ShowLoading';
const mapStateToProps = (state: any) => {
    return {
        money: state.money,
        blog: state.blog.blog,
        isLoading: state.blog.isLoading
    }
}
const mapDispatchToProps = {
    Deposit, Withdraw, LoadBlogAsync
}
export interface Iblog {
    _id: string;
    date: string;
    discription: string;
    img: string;
    title: string;
}
interface money {
    money: number
}
interface Iprops {
    Deposit: (n: number) => {};
    LoadBlogAsync: () => {};
    Withdraw: (n: number) => {};
    blog: Iblog[];
    money: money;
    isLoading: any;
}
const MainBlog: React.FC<Iprops> = (props) => {
    console.log('props from blog', props);

    useEffect(() => {
        props.LoadBlogAsync()
    }, [])


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

    return (
        <div style={{ marginTop: '78px' }}>
            {/* <h2>We have {props.money?.money} Tk</h2>
            <button onClick={() => props.Deposit(1)}>Increment</button>
            <button onClick={() => props.Withdraw(1)}>Decrement</button> */}
            {/* <button onClick={uploadBlog}>upload blog</button> */}
            {
                props.isLoading ? <ShowLoading /> : null
            }
            <div className='d-flex justify-content-center'>
                <div className="row w-75">

                    {
                        props.blog?.map(dt => <BlogCarrd dt={dt} key={dt._id} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBlog);