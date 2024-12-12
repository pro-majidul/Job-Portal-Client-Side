import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import LottieRegister from '../assets/Animation - 1733940535407.json'
import { toast } from 'react-toastify';
import { AuthContext } from '../provider/AuthProvider';
import Social from '../components/Social';

const Register = () => {
const {createUser , setUser}= useContext(AuthContext)

    const handelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const info = {
            name, email, password, photo
        }

        const lowercaseRegex = /[a-z]/;
        const uppercaseRegex = /[A-Z]/;
        if (password.length < 6) {
            return toast.error('password must be 6 digits')
        }
        if (!password.match(uppercaseRegex)) {
            return toast.error('Password must be an Uppercase Letter')
        }
        if (!password.match(lowercaseRegex)) {
            return toast.error('Password must be an lowercase letter')
        }


        createUser(email , password)
        .then(result =>{
            console.log(result.user);
            setUser(result.user)
            toast.success('User Register SuccessFull')
        }).catch(error=>{
            console.log(error.code);
            toast.error(`${error.code}`)
        })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left w-full max-w-md ">
                    <Lottie animationData={LottieRegister}></Lottie>
                </div>
                <div className="card bg-base-100 w-full p-6 max-w-md shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Register now!</h1>

                    <form onSubmit={handelRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your Name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="text" placeholder="Enter Your Photo URL" name='photo' className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <Social></Social>
                </div>
            </div>
        </div>
    );
};

export default Register;