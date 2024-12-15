import React from 'react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { GiSkills, GiVampireDracula } from 'react-icons/gi';
import { HiOutlineCurrencyDollar } from 'react-icons/hi';
import { IoMdTime } from 'react-icons/io';
import { MdLightbulbOutline } from 'react-icons/md';
import { SiKnowledgebase, SiLevelsdotfyi } from 'react-icons/si';
import { TiShoppingBag } from 'react-icons/ti';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const { title, location, _id, jobType, category, applicationDeadline, salaryRange, description, company, requirements, responsibilities, status, hr_email, hr_name, company_logo } = useLoaderData();

    return (
        <div className="  bg-white min-h-screen">
            <div className="text-center ">
                <div className="">
                    <img className='w-4/12 mx-auto' src={company_logo} alt="" />
                    <div className='md:flex justify-between  items-center'>
                        <div>
                            <h1 className="md:text-5xl text-2xl font-bold">{title} Creator Success {jobType}</h1>

                            <div className='flex items-center gap-5 ml-3 my-2 py-2'>
                                <p className='flex items-center gap-1 text-md text-gray-400 font-normal'> <TiShoppingBag />{jobType}</p>
                                <p className='flex items-center gap-1 text-md text-gray-400 font-normal'> <IoMdTime /> {applicationDeadline}</p>
                            </div>
                        </div>
                        <Link to={`/jobApply/:${_id}`}> <button className="btn  hover:btn-success transition hover:-translate-y-1 btn-primary"> <img className='w-8' src="https://jobbox-nextjs-v3.vercel.app/_next/static/media/apply.ae2f83c4.svg" alt="" />Apply Now</button></Link>
                    </div>
                    <div className="divider"></div>
                    <div className='md:flex gap-3'>
                        {/* left side */}
                        <div className='border p-6 md:w-8/12 rounded-xl'>
                            <p className='text-xl md:text-3xl text-start font-semibold'>Employment Information</p>
                            <div className="divider"></div>
                            <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
                                <div className='flex items-center  gap-3  md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <GiSkills size={24} />Requirements</p>
                                    <div className='text-xl font-semibold'>
                                        {
                                            requirements.map((skill, idx) => <p key={idx}>{skill}/</p>)
                                        }
                                    </div>
                                </div>
                                <div className='flex items-center gap-3 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <SiLevelsdotfyi size={24} />Job Level</p>
                                    <p className='text-xl font-semibold'>
                                        {category}
                                    </p>
                                </div>
                                <div className='flex items-center  gap-4 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <HiOutlineCurrencyDollar size={24} />Salary</p>
                                    <p className='text-xl font-semibold'>
                                        $ {salaryRange.min} - {salaryRange.max}
                                    </p>
                                </div>
                                <div className='flex items-center  gap-5 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <SiKnowledgebase size={24} />Experience</p>
                                    <p className='text-xl font-semibold'>
                                        1 - 2 Years
                                    </p>
                                </div>
                                <div className='flex items-center gap-5 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <SiKnowledgebase size={24} />Job Type</p>
                                    <p className='text-xl font-semibold'>
                                        {jobType}
                                    </p>
                                </div>
                                <div className='flex items-center gap-5 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <SiKnowledgebase size={24} />Deadline</p>
                                    <p className='text-xl font-semibold'>
                                        {applicationDeadline}
                                    </p>
                                </div>
                                <div className='flex items-center gap-4 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <SiKnowledgebase size={24} />Update</p>
                                    <p className='text-xl flex items-center font-semibold'>
                                        <MdLightbulbOutline size={24} color='green' />  {status}
                                    </p>
                                </div>
                                <div className='flex items-center gap-3 md:gap-10'>
                                    <p className='flex text-gray-500 gap-2 text-xl font-medium'> <SiKnowledgebase size={24} />Location</p>
                                    <p className='text-xl font-semibold'>
                                        {location}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className='border p-6 space-y-3 md:w-4/12 rounded-xl'>
                            <img src={company_logo} alt="" />
                            <ul className='list-disc ml-4'>
                                <li className='text-xl text-start  text-[#4F6169]'>{location}</li>
                                <li className='text-xl text-start text-[#4F6169]'>Phone :(123) 456-7890  </li>
                                <li className='text-xl  text-start text-[#4F6169]'>{hr_email}</li>
                                <li className='text-xl text-start text-[#4F6169]'>Name : {hr_name}</li>
                            </ul>
                            <div>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5940.460034101766!2d-87.62483100265503!3d41.887910073977714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601!5e0!3m2!1svi!2sus!4v1734207432840!5m2!1svi!2sus" className='border-0 w-full' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* left side */}

                        <div className='text-start md:w-8/12 my-5 space-y-4 py-5'>
                            <h3 className='text-start text-2xl text-[#4D5C62] md:text-4xl  font-medium'>Welcome to {company}</h3>
                            <p className='text-xl leading-[32px] text-[#4F6169]'>{description}
                                <br />

                                The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.</p>


                            <h3 className='text-start text-2xl text-[#4D5C62] md:text-4xl  font-medium'>Responsible</h3>

                            <ul className='list-disc ml-10'>
                                {
                                    responsibilities.map((res, idx) => <li className='text-xl leading-[32px] text-[#4F6169]' key={idx}>{res}</li>)
                                }
                            </ul>
                            <h3 className='text-start text-2xl text-[#4D5C62] md:text-4xl  font-medium'>Essential Knowledge, Skills, and Experience</h3>
                            <ul className='list-disc ml-10'>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >A portfolio demonstrating well thought through and polished end to end customer journeys</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >5+ years of industry experience in interactive design and / or visual design</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Excellent interpersonal skills</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Aware of trends inmobile, communications, and collaboration</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Ability to create highly polished design prototypes, mockups, and other communication artifacts</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >The ability to scope and estimate efforts accurately and prioritize tasks and goals independently</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >History of impacting shipping products with your work</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >A Bachelor's Degree in Design (or related field) or equivalent professional experience</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Proficiency in a variety of design tools such as Figma, Photoshop, Illustrator, and Sketch</li>
                            </ul>
                            <h3 className='text-start text-2xl text-[#4D5C62] md:text-4xl  font-medium'>Preferred Experience</h3>
                            <ul className='list-disc ml-10'>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Designing user experiences for enterprise software / services</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Creating and applying established design principles and interaction patterns</li>
                                <li className='text-xl leading-[32px] text-[#4F6169]' >Aligning or influencing design thinking with teams working in other geographies</li>
                            </ul>

                            <h3 className='text-start text-2xl text-[#4D5C62] md:text-4xl  font-medium'>Product Designer</h3>
                            <p><span className='text-xl font-semibold'>Product knowledge:</span> <span className='text-xl leading-[32px] text-[#4F6169]'> Deeply understand the technology and features of the product area to which you are assigned.</span></p>
                            <p><span className='text-xl font-semibold'>Research:</span> <span className='text-xl leading-[32px] text-[#4F6169]'>Provide human and business impact and insights for products.</span></p>
                            <p><span className='text-xl font-semibold'>Deliverables:</span> <span className='text-xl leading-[32px] text-[#4F6169]'> Create deliverables for your product area (for example competitive analyses, user flows, low fidelity wireframes, high fidelity mockups, prototypes, etc.) that solve real user problems through the user experience.</span></p>
                            <p><span className='text-xl font-semibold'>Communication:</span> <span className='text-xl leading-[32px] text-[#4F6169]'>  Communicate the results of UX activities within your product area to the design team department, cross-functional partners within your product area, and other interested Superformula team members using clear language that simplifies complexity.</span></p>



                            <div className="divider"></div>
                            <div className='py-5 md:flex space-y-4 justify-between items-center my-5'>
                                <div className='gap-3 mt-4 space-x-4'>
                                    <Link to={`/jobApply/:${_id}`}> <button className="btn text-xl hover:btn-success transition hover:-translate-y-1 btn-primary"> Apply Now</button></Link>
                                    <button className="btn text-xl hover:btn-neutral transition hover:-translate-y-1 btn-outline ">Save Job</button>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <h3 className='text-start text-xl text-[#4D5C62] md:text-2xl  font-medium'>Share this</h3>
                                    <div className='flex gap-1'>
                                        <div className='border rounded-full p-2 items-center bg-[#E7F1FD]'><FaFacebookF size={24} /></div>
                                        <div className='border rounded-full p-2 items-center bg-[#E7F1FD]'><FaTwitter  size={24}/> </div>
                                        <div className='border rounded-full p-2 items-center bg-red-300'><GiVampireDracula size={24} /></div>
                                        <div className='border rounded-full p-2 items-center bg-green-200'><FaWhatsapp size={24} /></div>
                                    </div>
                                </div>
                            </div>

                            {/* right side */}
                            <div className='md:w-4/12'>

                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </div >
    );
};

export default JobDetails;