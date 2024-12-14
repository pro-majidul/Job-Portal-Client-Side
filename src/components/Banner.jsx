import React from 'react';
import { motion } from "motion/react"
import { easeInOut } from 'motion';
import team1 from '../assets/team1.jpg'
import team2 from '../assets/team,2.jpg'


const Banner = () => {
    return (
        <div className="hero bg-bgBanner -mt-20  min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='flex-1 '>
                    <motion.img
                        animate={{ y: [-40, 100, -40], }}
                        transition={{ duration: 4, repeat: Infinity }}
                        src={team1}
                        className="max-w-sm md:w-72 w-48 rounded-t-3xl rounded-br-3xl border-l-8 border-b-8 border-green-400 shadow-2xl" />
                    <motion.img
                        animate={{ x: [40, 100, 40]}}
                        transition={{ duration: 4, repeat: Infinity }}
                        src={team2}
                        className="max-w-sm border-l-8 border-blue-500 border-b-8 rounded-t-3xl rounded-br-3xl w-48 md:w-72  shadow-2xl" />

                </div>
                <div className='flex-1'>
                    <motion.h1
                        animate={{ x: [0, 50, 0], color: 'green' }}
                        transition={{ duration: 2, delay: 0.9, ease: easeInOut, repeat: Infinity }}
                        className="text-5xl font-bold">Latest Jobs for you!</motion.h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;