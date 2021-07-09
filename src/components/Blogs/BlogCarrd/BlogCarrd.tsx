import React from 'react';
import img1 from '../../../images/c-1.jpg'
import { Iblog } from '../MainBlog/MainBlog'
interface Iprops {
    dt: Iblog
}
const BlogCarrd: React.FC<Iprops> = (props) => {
    const { date, discription, img, title } = props.dt
    return (
        <div className="col-md-4">
            <div className="card" style={{ width: '22rem' }}>
                <img style={{ height: '200px' }} src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <button>Read More</button>
                </ul>
                {/* <div className="card-body">
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                </div> */}

            </div>

        </div>

    );
};

export default BlogCarrd;