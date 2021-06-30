import React from 'react';
import img1 from '../../../images/c-2.png'
import ArticalCard from '../ArticalCard/ArticalCard';
const Articles = () => {

    const fakeArtical = [
        { img: img1, title: '6 Tips To Protect Your Mental Health When You’re Sick', description: 'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...' },
        { img: img1, title: 'Unsure About Wearing A Face Mask? Here’s How And Why', description: 'That means that you should still be following any shelter-in-place orders in your community. But when you’re venturing out to the grocery store, pharmacy or hospital..' },
        { img: img1, title: 'Tips For Eating Healthy When You’re Working From Home', description: 'It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a condition that’s certainly true if you test positive for COVID-19, or are presumed to be positive...' },

    ]
    return (
        <div>
            <h3 className='text-center'>Recent Articles</h3>

            <div className='d-flex justify-content-center'>
                <div className='w-75'>
                    <div className="card-group">

                        {
                            fakeArtical.map(ar => <ArticalCard ar={ar}></ArticalCard>)
                        }

                    </div>
                </div>     </div>

        </div>
    );
};

export default Articles;