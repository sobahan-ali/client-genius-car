import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Signup = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;


        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                user?.uid && navigate('/');
            })
            .catch(err => console.error(err));
    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handleSignup} className="card-body">
                        <h1 className="text-5xl font-bold">Signup</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account Please <Link className='text-orange-600' to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Signup;