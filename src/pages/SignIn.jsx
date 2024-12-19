import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Lottie from 'lottie-react';
import loginlottie from '../assets/login.json';
import { toast } from 'react-toastify';
import Social from '../components/Social';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {

    const { loginUser, setUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()
    const form = location?.state || '/';

    const handelsignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        loginUser(email, password)
        .then(result => {
            setUser(result.user)
            const data = { email: email }
                console.log(result.user);
                toast.success('user login success')
                axios.post('http://localhost:5000/jwt', data ,{
                    withCredentials : true
                })
                    .then(res => console.log(res.data))
                    .catch(error => console.log(error))
                navigate(form)


            }).catch(error => {
                console.log(error);
                toast.error(`${error.code}`)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-full max-w-md lg:text-left">
                    <Lottie animationData={loginlottie}></Lottie>
                </div>
                <div className="card bg-base-100 w-full max-w-md p-6 shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                    <form onSubmit={handelsignin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default SignIn;