import { Button, Card, Rating } from 'flowbite-react';
import React, { useRef } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { jsPDF } from "jspdf";
import { Link } from 'react-router-dom';
import PDF from '../../../pdf/PDF';

const CourseCard = ({singlecard}) => {

    const{title,short_dis,img,rating,price,author,updatedAt,description} = singlecard
   
    const handleDownload = ()=>{
      const doc = new jsPDF();

doc.text(`${title}`, 10, 10);
doc.text(`${description}`, 10, 20);
doc.save(`${title}.pdf`);
    }
  
    return (
        <div className=''>
            <div className="mb-10 w-full  ">
            
              {/* pdf */}
              <div>
              <PDFDownloadLink document={<PDF singlecard={singlecard}/>} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <button>Download</button> )}
      </PDFDownloadLink>
              </div>
  <Link to="/" className=''>
  <Card
  className="shadow-md"
    
  imgSrc={img}
>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}
  </h5>
  <p className="text-base font-semibold text-gray-700 dark:text-gray-400 ">
    {short_dis}
  </p>
  <p className='text-sm italic'>By {author}</p>
  <p className='text-sm'>Updated <span className='font-bold'>{updatedAt}</span></p>
  <div className='flex'>
  <p className='text-sm'>Ratings: {rating} </p>
  <Rating>
<Rating.Star />
<Rating.Star />
<Rating.Star />
<Rating.Star />
<Rating.Star filled={false} />
</Rating>
  </div>
  <h3 className='font-bold mt-10'>Price:{price}</h3>
</Card>
  </Link>
</div>
        </div>
    );
};

export default CourseCard;