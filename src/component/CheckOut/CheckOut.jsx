
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2'
const CheckOut = () => {

    const checkoutCourse = useLoaderData()
    const navigate = useNavigate()
    const showToast = ()=>{
        Swal.fire({
          title: '',
          text: 'Successfully Enrolled',
          icon: 'success',
          
        })
        navigate('/')
      }
    const{title,id,img,price} = checkoutCourse
    return (
        <div className='w-50 mx auto'>
            <section className="flex flex-col justify-center antialiased bg-gray-200 text-gray-600 min-h-screen p-4">
    <div className="h-full">

        <div className="max-w-[360px] mx-auto">
            <div className="bg-white shadow-lg rounded-lg mt-9">
    
                <header className="text-center px-5 pb-5">
        
                    <img className="inline-flex -mt-9 w-[72px] h-[72px] fill-current rounded-full border-4 border-white box-content shadow mb-3" src={img} alt="" />
      
                    <h3 className="text-md font-bold text-gray-900 mb-1">{title}</h3>
                    <div className="text-sm font-medium text-blue-500">ID: {id}</div>
                </header>
   
                <div className="bg-gray-100 text-center px-5 py-6">
                    <div className="text-sm mb-6"><strong className="font-semibold">Price: {price}</strong></div>
           
                        <div className="flex shadow-sm rounded">
                            <div className="flex-grow">

                            </div>

                            
                        </div>
                        <button onClick={showToast}  className="font-semibold text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Confirm now</button>
                    
                </div>
            </div>
        </div>
    </div>
</section>


<div x-show="open" className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60" x-data="{ open: true }">

</div>
        </div>
    );
};

export default CheckOut;