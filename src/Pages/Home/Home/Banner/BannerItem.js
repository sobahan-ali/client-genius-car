import React from 'react';


const BannerItem = ({ slide }) => {
    const { image, id, prv, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'> <img src={image} className="w-full object-fill rounded-md" alt="" /></div>

            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='font-bold text-7xl text-white'>Affordable <br /> Price For Car <br /> Servicing</h1>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/2">
                <p className='text-xl text-white'>There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form</p>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-active btn-secondary mr-5">Discover more</button>
                <button className="btn btn-outline btn-warning">Latest Project</button>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-1">
                <a href={`#slide${prv}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;