import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner '>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://everydaypower.com/wp-content/uploads/2020/02/Smile-Quotes-to-Elevate-Your-Mood-1000x600.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='banner-title'>We Can Give You Vision So Clearly, You'll Smile</h3>
                        <p className='w-75 mx-auto'>“My whole life, people have told me that I have beautiful eyes. I promised myself that I would donate them to Wills Eye when the time came. Now, I’m the one benefitting from a donor. My eyesight is a beautiful gift.” - Story of a satisfied patient</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://vissioneyes.com/storage/wink/images/v7Z4TdCjM02GZVtYu9LR1ThRmc4WoafP8u89hnwS.jpeg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'>Best Ophthalmology Hospital in the U.S.</h3>
                        <p className='w-75 mx-auto'>Firmly established by a deeply rooted history and strong leadership, Wills Eye is focused on providing world-class eye care to patients around the globe, driven by the need to protect sight and further our ever-growing efforts to advance eye research.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image img-fluid"
                        src="https://www.templehealth.org/sites/default/files/2021-05/top-doctors-2021.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='banner-title'> 2021 Philadelphia Magazine Top Doctors list</h3>
                        <p className='w-75 mx-auto'>Philadelphia, PA. - Fifty-six Wills Eye ophthalmologists have been named on the new 2021 Philadelphia Magazine Top Doctors list. Physicians are nominated by their peers and the magazine publishes the names after a nationwide online physician poll by Castle Connolly.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;