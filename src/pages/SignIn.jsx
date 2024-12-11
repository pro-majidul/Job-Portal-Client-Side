import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Lottie from 'lottie-react';
import loginlottie from '../assets/login.json';
import { toast } from 'react-toastify';

const SignIn = () => {

    const { loginUser, setUser } = useContext(AuthContext);

    const handelsignin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                setUser(result.user)
                console.log(result.user);
                toast.success('user login success')

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
                </div>
            </div>
        </div>
    );
};

export default SignIn;