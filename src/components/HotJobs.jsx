import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';

const HotJobs = () => {

    const [jobs, setJobs] = useState([]);
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data)
                setLoader(false);
            })
    }, [])
   
    if (loader) {
        return <div className='flex items-center justify-center min-h-[calc(80vh-232px)]'><span className="loading loading-spinner loading-lg"></span></div>
    }
    return (
        <div className='max-w-7xl mx-auto  my-5 py-5'>
            <div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default HotJobs;