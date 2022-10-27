import { Button, Card, Rating } from 'flowbite-react';
import React, { useRef } from 'react';
import { PDFDownloadLink } from "@react-pdf/renderer";
import { jsPDF } from "jspdf";
import { Link } from 'react-router-dom';
import PDF from '../../../pdf/PDF';
import { TfiCrown } from 'react-icons/tfi'

const CourseCard = ({singlecard}) => {

    const{title,short_dis,img,rating,price,author,updatedAt,description,id} = singlecard
   
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
 
  <div  className=''>
  <Card
  className="shadow-md"
    
  imgSrc={img}
>
  <div className='flex justify-between'>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    {title}     
    
  </h5>
 <Link to={`/checkout/${id}`}>
 <Button gradientDuoTone="pinkToOrange">
  <TfiCrown className="mr-1"/> Get Premium Access
    </Button>
 </Link>
  </div>
  <p className="text-base font-semibold text-gray-700 dark:text-gray-400 ">
    {short_dis}
  </p>
  <p className='text-sm italic dark:text-gray-400'>By {author}</p>
  <p className='text-sm dark:text-gray-400'>Updated <span className='font-bold'>{updatedAt}</span></p>
  <div className='flex'>
  <p className='text-sm dark:text-gray-400'>Ratings: {rating} </p>
  <Rating>
<Rating.Star />
<Rating.Star />
<Rating.Star />
<Rating.Star />
<Rating.Star filled={false} />
</Rating>
  </div>
  <h3 className='font-bold mt-10 dark:text-gray-400'>Price:{price}</h3>
  <div className='flex'>
              <PDFDownloadLink document={<PDF singlecard={singlecard}/>} filename="FORM">
      {({loading}) => (loading ? <button>Loading Document...</button> : <Button>Download</Button> )}
      </PDFDownloadLink>
      <Link to={`/course/${id}`} className='ml-5'><Button>Details</Button> </Link>
              </div>
     
</Card>
  </div>
</div>
        </div>
    );
};

export default CourseCard;