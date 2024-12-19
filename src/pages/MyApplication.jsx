import React, { useEffect, useState } from 'react';
import UseAuth from '../hooks/UseAuth';
import axios from 'axios';


const MyApplication = () => {
    const { user } = UseAuth();
    const [jobs, setJobs] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        // fetch(`http://localhost:5000/job-application?email=${user.email}`)
        //     .then(res => res.json())
        //     .then(data => {

        //         setJobs(data);
        //         setLoader(false)
        //     }).catch(() => {
        //         setLoader(false)
        //     })

        axios.get(`http://localhost:5000/job-application?email=${user.email}`, {
            withCredentials : true,
        })
            .then(res => {
                setJobs(res.data);
                setLoader(false)
            }).catch(() => {
                setLoader(false)
            })
    }, [])


    if (loader) {
        return <div className='flex items-center justify-center min-h-[calc(80vh-232px)]'><span className="loading loading-spinner loading-lg"></span></div>

    }
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {jobs && jobs.length < 1 ? <div className='flex items-center justify-center py-5 my-4'> <p className='text-center text-xl md:text-3xl font-medium'>No data Added</p></div> :
                        jobs.map(job => <tr key={job._id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={job.company_logo}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{job.title}</div>
                                        <div className="text-sm opacity-50">{job.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {job.category}
                                <br />
                                <span className="badge badge-ghost badge-sm">{job.company}</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>)
                    }

                </tbody>

            </table>
        </div>
    );
};

export default MyApplication;