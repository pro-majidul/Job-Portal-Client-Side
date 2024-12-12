import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import jobImg from '../assets/favicons.png'

const Navbar = () => {
    const { user, setUser, logoutUser } = useContext(AuthContext);

    const handelLogout = () => {
        logoutUser()
            .then(res => {
                console.log(res);
                setUser(res)
                toast.success('user logout')
            })
            .catch(error => {
                toast.error(`${error.message}`)
            })
    }

    const Links = (< >

        <NavLink to='/' className={({ isActive }) => isActive ? 'btn bg-green-300' : 'btn'}>Home</NavLink>
        <NavLink to='/about' className={({ isActive }) => isActive ? 'btn bg-green-300' : 'btn'}>About</NavLink>
        <NavLink to='/product' className={({ isActive }) => isActive ? 'btn bg-green-300' : 'btn'}>Products</NavLink>
    </>)
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            user && user ? <>
                                <div className='w-full flex items-center justify-center'>
                                    <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                </div>
                            </> : <>

                                <NavLink to='/register'><button className='btn w-full'>Register</button></NavLink>
                            </>
                        }
                        {Links}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl">
                    <img className='w-10' src={jobImg} alt="" />
                    <h3 className='md:text-3xl'>Jobs Portal</h3>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-10">

                    {Links}

                </ul>
            </div>
            <div className="navbar-end gap-2">
                {
                    user && user ? <>

                        <img className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />

                        <button onClick={handelLogout} className="btn">Log Out</button>
                    </> : <>
                        <Link to='/login'><button className='btn md:btn-md  btn-sm'>Login</button></Link>
                        <Link to='/register'><button className='btn md:btn-md hidden md:block btn-sm'>Register</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;