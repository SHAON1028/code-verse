import { Card, Rating } from 'flowbite-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { TiTick } from 'react-icons/ti'

const CourseDetails = () => {
    const courseAbout = useLoaderData()
    const{title,short_dis,img,rating,price,author,updatedAt,learn,description} = courseAbout
    console.log(courseAbout)
    return (
        <div className=''>
            <h1 className='text-blue-600 text-3xl text-center font-semibold mt-16 mb-5'> Details of the course</h1>
            <Card
  className="shadow-md flex ">
    <div className='lg:flex sm:p-6 bg-black'>
 
        <img className='lg:w-3/12 mr-5'  src={img} alt="" />
    
   <div>
   <h5 className="text-2xl font-bold tracking-tight text-white">
    {title}
  </h5>
  <p className="text-base font-semibold  text-gray-400 ">
    {short_dis}
  </p>
  <p className='text-sm italic  text-white'>By {author}</p>
  <p className='text-sm  text-white'>Updated <span className='font-bold'>{updatedAt}</span></p>
  <div className='flex  text-white'>
  <p className='text-sm'>Ratings: {rating} </p>
  <div>
  <Rating>
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star />
  <Rating.Star filled={false} />
</Rating>
  </div>
  </div>
  <h3 className='font-bold mt-10  text-white'>Price:{price}</h3>
   </div>
    </div>
</Card>

<div className='mx p-10 mt-10 '>

  <h5 className="text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">
    What You Will Learn
  </h5>
  <div className="p-3 flex items-center justify-center font-normal text-gray-700 dark:text-gray-400">
    <TiTick/> <span>{learn.tex1}</span>
  </div>
  <div className="p-3 flex items-center justify-center font-normal text-gray-700 dark:text-gray-400">
    <TiTick/> <span>{learn.text3}</span>
  </div>
  <div className="p-3 flex items-center justify-center font-normal text-gray-700 dark:text-gray-400">
    <TiTick/> <span>{learn.text2}</span>
  </div>

</div>

<div className='w-50 lg:ml-20 lg:mr-20 mb-20 p-3'>
    <h1 className='text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white'>Description</h1>
    <p className='text-md dark:text-gray-400'>{description}</p>
</div>
        </div>
    );
};

export default CourseDetails;