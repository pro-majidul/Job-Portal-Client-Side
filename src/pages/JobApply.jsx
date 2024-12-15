import React from 'react';
import { useParams } from 'react-router-dom';
import UseAuth from '../hooks/UseAuth';
import Swal from 'sweetalert2'

const JobApply = () => {
    const { id } = useParams();
    const { user } = UseAuth()
    const handelJobApply = e => {
        e.preventDefault();
        const form = e.target;
        const github = form.github.value;
        const linkedIn = form.linkedIn.value;
        const resume = form.resume.value;


        console.log(github, linkedIn, resume);
        const jobinfo = {
            job_id: id,
            applicant_email: user.email,
            github, linkedIn, resume,
        }

        fetch('http://localhost:5000/job-applications', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(jobinfo)
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if(data. insertedId){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your work has been saved",
                        showConfirmButton: false,
                        timer: 1500
                      });  
                }
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">


                </div>
                <div className="card bg-base-100 w-full max-w-2xl p-6 shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold">Apply Job For Good Luck!</h1>
                    <form onSubmit={handelJobApply} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">LinkedIn URL</span>
                            </label>
                            <input name='linkedIn' type="url" placeholder="LinkedIn URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github URL</span>
                            </label>
                            <input name='github' type="url" placeholder="Github URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Resume URL</span>
                            </label>
                            <input name='resume' type="url" placeholder="Resume URL" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JobApply;