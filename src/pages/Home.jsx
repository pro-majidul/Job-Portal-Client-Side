import React from 'react';
import Banner from '../components/Banner';
import Category from '../components/Category';
import HotJobs from '../components/HotJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <HotJobs></HotJobs>
        </div>
    );
};

export default Home;