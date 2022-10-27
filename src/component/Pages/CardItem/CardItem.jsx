import { Card } from 'flowbite-react';
import React from 'react';
import CourseCard from './CourseCard';

const CardItem = ({courseAllData}) => {

    return (
        <div className='lg:ml-40'>
           {
            courseAllData.map(singlecard=><CourseCard singlecard={singlecard} key={singlecard.key}></CourseCard>)
           }
        </div>
    );
};

export default CardItem;