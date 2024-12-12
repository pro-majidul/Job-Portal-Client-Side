import React, { useContext } from 'react';
import social from '../assets/social.png'
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Social = () => {
    const {googleLogin , setUser} = useContext(AuthContext);
    const handelGoogleLogin =()=>{
        googleLogin()
        .then(res =>{
            setUser(res.user);
            console.log(res.user);
            toast.success('Google User login successfully ')
        }).catch(error =>{
            console.log(error);
            toast.error(`${error.code}`)
        })
    }
    return (
        <div className='w-full'>
            <div className='divider'> or </div>
            <button onClick={handelGoogleLogin} className='btn w-full gap-4 hover:btn-success btn-primary'><img src={social} alt="" />Log in With Google</button>
        </div>
    );
};

export default Social;