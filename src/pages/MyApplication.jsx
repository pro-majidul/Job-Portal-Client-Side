import React, { useEffect } from 'react';
import UseAuth from '../hooks/UseAuth';

const MyApplication = () => {
    const {user}=UseAuth();
   

    useEffect(() =>{
        fetch(`http://localhost:5000/job-application?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    },[])
    return (
        <div>
            My Applications here
        </div>
    );
};

export default MyApplication;