import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CardItem from '../CardItem/CardItem';
import RightNav from '../RightNav/RightNav';

const Courses = () => {
    const courseAllData = useLoaderData()

    return (
        <div className='grid lg:grid-cols-3 w-11/12 mt-20 mx-auto relative'>
            <div className='col-span-1'>
                <RightNav courseAllData= {courseAllData}></RightNav>
            </div>
            <div className='col-span-2 '>
                <CardItem courseAllData={courseAllData}></CardItem>
            </div>
            
        </div>
    );
};

export default Courses;