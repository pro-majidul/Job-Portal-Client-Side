import React from 'react';
import bgleft from '../assets/bg-left.svg'
import bgRight from '../assets/bg-right.svg'

const Category = () => {
    return (
        <div className='my-5  py-5'>
            <h3 className='text-xl md:text-3xl text-center my-4 font-semibold'>Browse By Category</h3>
            <p className='text-center w-8/12 mx-auto text-xl  text-gray-500'>Find the job that’s perfect for you. about 800+ new Jobs everyday</p>
            <div className='w-11/12 mx-auto my-5 py-5 flex gap-3 overflow-x-scroll bg-transparent'>

                <div className='border w-full max-w-sm transition hover:-translate-y-3 rounded-xl p-6'>
                    <img src="https://img.icons8.com/?size=48&id=0PTYqcrrBXka&format=png" alt="" />
                    <h3 className='text-xl hover:text-blue-500 font-medium'>Marketing and Sell</h3>
                    <p className='font-medium hover:text-blue-600'>1526 Jobs Available</p>
                </div>
                <div className='border w-full max-w-sm transition hover:-translate-y-3 rounded-xl p-6'>
                    <img src="https://img.icons8.com/?size=48&id=12216&format=png" alt="" />
                    <h3 className='text-xl hover:text-blue-500 font-medium'>Customer Help</h3>
                    <p className='font-medium hover:text-blue-600'>185 Jobs Available</p>
                </div>
                <div className='border w-full max-w-sm transition hover:-translate-y-3 rounded-xl p-6'>
                    <img src="https://img.icons8.com/?size=80&id=3vtBJwCeB5xn&format=png" alt="" />
                    <h3 className='text-xl hover:text-blue-500 font-medium'>Human Resources</h3>
                    <p className='font-medium hover:text-blue-600'>165 Jobs Available</p>
                </div>
                <div className='border max-w-sm w-full transition hover:-translate-y-3 rounded-xl p-6'>
                    <img src="https://img.icons8.com/?size=64&id=119664&format=png" alt="" />
                    <h3 className='text-xl hover:text-blue-500 font-medium'>Security Analyst</h3>
                    <p className='font-medium hover:text-blue-600'>254 Jobs Available</p>
                </div>
            </div>

            <div className="my-5 py-5 w-10/12  mx-auto border rounded-sm p-6" style={{
                backgroundImage: `url(${bgleft}) , url(${bgRight})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '250px 150px',
                backgroundPosition: 'bottom left, bottom right',


            }} >

                <div className='flex items-center w-7/12 mx-auto p-6 gap-5 justify-around'>
                    <h1 className='uppercase'><span className='text-gray-500'>We Are</span> <br /> <span className='text-4xl font-bold text-[#05264e]'>Hiring</span></h1>
                    <p className='w-24 font-medium'> <span className='text-gray-500'>Let’s</span>  Work <span className='text-gray-500'>Together
                    &</span> Explore <span className='text-gray-500'>Opportunities</span></p>
                    <button className='btn btn-primary'> <img className='w-8' src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/apply.ae2f83c4.svg" alt="" />Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Category;