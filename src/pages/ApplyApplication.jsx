import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ApplyApplication = () => {
    const jobloaderData = useLoaderData();


    const handelStatusUpdate = (e, id) => {
        const data = {
            status: e.target.value
        }

        fetch(`http://localhost:5000/job-applications/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(res => res.json())
            .then(data => {

                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: ` Successfully ${e.target.value} `,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

            })
    }
    return (
        <div className='my-5 py-5 min-h-[calc(80vh-123px)]'>
            <h3 className="md:text-3xl">Total Apply for this job {jobloaderData.length}</h3>


            <div className="overflow-x-auto ">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            jobloaderData.map((data, idx) => <tr key={idx}>
                                <th>{idx + 1}</th>
                                <td>{data.applicant_email}</td>
                                <td>Quality Control Specialist</td>
                                <td>
                                    <select
                                        onChange={(e) => handelStatusUpdate(e, data._id)}
                                        defaultValue={data.status || 'Change Status'}
                                        className="select select-none w-full max-w-xs">
                                        <option disabled  >Change Status</option>
                                        <option>Under Review</option>
                                        <option>Set Interview</option>
                                        <option>Hired</option>
                                        <option>Rejected</option>
                                    </select>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>



        </div>
    );
};

export default ApplyApplication;