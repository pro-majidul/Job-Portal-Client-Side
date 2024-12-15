import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import { div } from 'motion/react-client';
import Category from './../components/Category';

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
        <div className='my-5 py-5 min-h-[calc(80vh-232px)]'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>Application Count</th>
                            <th>Application Deadline</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        { jobs && jobs.length < 1 ? <div className='my-5 py-5 '><p className='text-center text-3xl font-medium'>No Job Added</p></div> :
                            jobs.map((job, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{job.title}</td>
                                <td>{job.company}</td>
                                <td>{job.applicationCount}</td>
                                <td>{job.applicationDeadline}</td>
                                <td><button className="btn btn-sm hover:btn-primary btn-neutral">X</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyJobs;