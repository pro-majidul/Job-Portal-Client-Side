import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import { div } from 'motion/react-client';

const MyJobs = () => {
    const { user } = UseAuth();
    const [jobs, setJobs] = useState([]);
    const [loader, setLoader] = useState(true);


    useEffect(() => {
        fetch(`http://localhost:5000/jobs?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoader(false)
            })
            .catch(() => {
                setLoader(false)
            })
    }, [user.email])

    if (loader) {
        return <div className='flex items-center justify-center'> <span className='loading-spinner '></span></div>
    }
    return (
        <div>
            <p className='text-3xl'>My post Jobs here {jobs.length}</p>
        </div>
    );
};

export default MyJobs;