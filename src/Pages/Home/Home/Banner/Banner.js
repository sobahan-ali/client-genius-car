import React from 'react';
import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'
import img5 from '../../../../assets/images/banner/5.jpg'
import img6 from '../../../../assets/images/banner/6.jpg'
import BannerItem from './BannerItem';
import './Banner.css';

const Banner = () => {

    const slides = [
        {
            prv: 6,
            id: 1,
            next: 2,
            image: img1,
        },
        {
            prv: 1,
            id: 2,
            next: 3,
            image: img2,
        },
        {
            prv: 2,
            id: 3,
            next: 4,
            image: img3,
        },
        {
            prv: 3,
            id: 4,
            next: 5,
            image: img4,
        },
        {
            prv: 4,
            id: 5,
            next: 6,
            image: img5,
        },
        {
            prv: 5,
            id: 6,
            next: 1,
            image: img6,
        },
    ]
    return (
        <div className="carousel w-full py-10">
            {
                slides.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;