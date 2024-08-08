import React from "react"
import subscribe_banner from '../../../assets/images/newsAndReviews/subscribe_banner.png'


const SubscribeBanner = () => {
    return (
        <div className='col-11'>
            <div className='box-clerifix'>
                <div className='col-12'>
                    <img src={subscribe_banner} alt="Baner" className='imgactive' />
                </div>
                <div className='col-12'>
                    <div className='subs'>
                        <p>Stay Updated. Subscribe to Cardekho News</p>
                        <form action="" className='formdata'>
                            <div className='inputfield'>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Enter Your Email Address"
                                    className="email-input"
                                />
                            </div>
                            <div className='subs'>
                                <button type='submit' name='submitbtn' className='btnsubmit'>
                                    <div>Subscribe Now</div>
                                </button>
                            </div>
                            <div className='updates'>We'll give you relevant updates</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default SubscribeBanner;