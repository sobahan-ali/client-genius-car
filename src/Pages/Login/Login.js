import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg'

const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault();

    }
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className=" w-1/2">
                    <img className='w-3/4' src={login} alt="" />
                </div>
                <div className="card flex-shrink-0 w-1/2 shadow-2xl bg-base-100 py-10">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-5xl font-bold">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='text-center'>Are you New Please <Link className='text-orange-600' to='/signup'>Signup</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;