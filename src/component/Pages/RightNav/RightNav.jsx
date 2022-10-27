import React from 'react';
import RightNavData from './RightNavData';

const RightNav = ({courseAllData}) => {
    return (
        <div className=''>
            {
                courseAllData.map((signleData,idx)=><RightNavData signleData={signleData} idx={idx+1} key={signleData.key}></RightNavData>)
            }
        </div>
    );
};

export default RightNav;