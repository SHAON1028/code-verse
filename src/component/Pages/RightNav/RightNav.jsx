import React from 'react';
import RightNavData from './RightNavData';

const RightNav = ({courseAllData}) => {
    return (
        <div className='border-2 p-2 '>
            <h2 className='text-center text-2xl font-bold dark:text-orange-400'>List of Courses</h2>
            {
                courseAllData.map((signleData,idx)=><RightNavData signleData={signleData} idx={idx+1} key={signleData.key}></RightNavData>)
            }
        </div>
    );
};

export default RightNav;