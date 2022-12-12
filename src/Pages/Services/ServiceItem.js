import React from 'react';
import { HiArrowSmRight } from "react-icons/hi";
const ServiceItem = ({ service }) => {
    const { title, img, price } = service;
    return (
        <section>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    <div className="card-actions justify-between text-orange-600 font-semibold">
                        <p>price : $ {price}</p>
                        <button className="text-2xl"> <HiArrowSmRight></HiArrowSmRight></button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ServiceItem;