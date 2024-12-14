import React from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { IoMdTime } from 'react-icons/io';
import { TiShoppingBag } from 'react-icons/ti';

const JobCard = ({ job }) => {
    const { title, location, jobType, category, applicationDeadline, salaryRange, Object, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = job
    return (
        <div>
            <div className="card group transition hover:-translate-y-3 h-[400px] card-compact hover:bg-white bg-[#F8FAFF]  border">
                <div className='flex m-2 gap-2'>
                    <figure>
                        <img className='w-16'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h3 className="md:text-2xl hover:text-blue-500 text-[#05264E] tex-xl">{company}</h3>
                        <p className='flex items-center hover:text-blue-500 gap-1'><CiLocationOn /> {location}</p>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title text-[#05264E] hover:text-blue-500">{title}!</h2>
                    <div className='flex items-center justify-between'>
                        <p className='flex items-center gap-1 text-md text-gray-400 font-normal'> <TiShoppingBag />{jobType}</p>
                        <p className='flex items-center gap-1 text-md text-gray-400 font-normal'> <IoMdTime /> {applicationDeadline}</p>
                    </div>
                    <p className='font-medium text-gray-400'>{description}</p>
                    <div className='gap-2'>
                        {
                            requirements.map((skill, idx) => <button className='btn md:btn-sm bg-white border hover:text-primary ' key={idx}>{skill}</button>)
                        }

                    </div>
                    <div className="card-actions flex-nowrap items-center justify-between">
                        <div >
                            <p className='font-bold'> <span className='text-xl text-[#3C65F5] '>{salaryRange.currency} {salaryRange.min}</span>/ <span className='text-xs'>hour</span> </p>
                        </div>
                        <button className="btn group-hover:btn-primary ">Apply Now</button>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default JobCard;