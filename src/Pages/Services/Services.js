import React, { useEffect, useState } from 'react';
import ServiceItem from './ServiceItem';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className='text-center py-10'>
                <p className='font-bold text-orange-600'>Services</p>
                <h2 className='font-bold text-5xl'>Our Service Area</h2>
                pthe majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable.
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => <ServiceItem
                        key={service._id}
                        service={service}
                    ></ServiceItem>)
                }
            </div>
            <div className='text-center py-10 mb-5'>
                <button className='border-2 border-orange-600 font-semibold p-2 hover:border-indigo-600 hover:border-3'>More Services</button>
            </div>
        </section>
    );
};

export default Services;