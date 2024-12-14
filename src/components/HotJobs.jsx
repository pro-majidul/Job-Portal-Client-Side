import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {

    const [ jobs , setJobs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobs')
        .then(res=>res.json())
        .then(data => setJobs(data))
    },[])
    console.log(jobs);
    return (
        <div className='max-w-7xl mx-auto  my-5 py-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    jobs.map(job =><JobCard key={job.id} job ={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;