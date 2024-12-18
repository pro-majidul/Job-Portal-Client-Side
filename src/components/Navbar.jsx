import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';
import jobImg from '../assets/favicons.png'
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Navbar = () => {
    const { user, setUser, logoutUser } = useContext(AuthContext);
    const [isScrolled, setIsScrolled] = useState(false);

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
        <NavLink to='/myApplication' className={({ isActive }) => isActive ? 'btn bg-green-300' : 'btn'}>My Application</NavLink>
        <NavLink to='/addjob' className={({ isActive }) => isActive ? 'btn bg-green-300' : 'btn'}>Add Jobs</NavLink>
        <NavLink to='/myPostJobs' className={({ isActive }) => isActive ? 'btn bg-green-300' : 'btn'}>My Post Jobs</NavLink>
    </>)



    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll); // Event listener scroll event detect korche.

        return () => {
            window.removeEventListener("scroll", handleScroll); // Cleanup event listener to avoid memory leaks.
        };
    }, []);

    return (
        // className="navbar bg-transparent transition-all top-0 sticky">
        <div
            className={`sticky top-0 navbar z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
                }`}
        >

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
                                    <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} referrerPolicy='no-referrer' className='w-10 h-10 rounded-full' src={user.photoURL} alt="" />
                                    <Tooltip id="my-tooltip" />
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

                        <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} referrerPolicy='no-referrer' className='w-10 h-10 rounded-full hidden md:block' src={user.photoURL} alt="" />
                        <Tooltip id="my-tooltip" />
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