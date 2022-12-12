import React from 'react';
import parts from '../../../assets/images/about_us/parts.jpg'
import person from '../../../assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative'>
                    <img src={person} alt='' className="rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} alt='' className="rounded-lg shadow-2xl absolute w-1/2 top-1/2 right-16 border-l" />
                </div>
                <div className='w-1/2'>
                    <p className='text-xl text-orange-600 font-bold'>About</p>
                    <h2 className="py-6 text-5xl">We are qualified <br /> & of experience <br />
                        in this field</h2>
                    <p className=''>There are many variations of passages of Lorem Ipsum
                        available, but the
                        majority have suffered alteration in some form, by injected humour, or
                        randomised words which don't look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected
                        humour, or randomised words which don't look even slightly
                        believable. </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;