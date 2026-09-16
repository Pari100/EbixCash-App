import React from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
import review from '../assets/review.png'
import c1 from '../assets/c1.png'
import c2 from '../assets/c2.png'
import c3 from '../assets/c3.png'
import c4 from '../assets/c4.png'
import icon from '../assets/icon.png'
export const testimonialData = [
  {
    id: 1,
    image: c1,
    name: 'John Smith',
    designation: 'CEO',
    company: 'Tech Solutions Inc.',
    review: 'EbixCash made our payment process faster and more reliable. The support team was excellent throughout.'
  },
  {
    id: 2,
    image: c2,
    name: 'Sarah Johnson',
    designation: 'Product Manager',
    company: 'Digital Innovations Ltd.',
    review: 'The platform is smooth, secure, and easy to use. It helped us improve customer experience greatly.'
  },
  {
    id: 3,
    image: c3,
    name: 'Michael Chen',
    designation: 'Operations Director',
    company: 'Global Enterprise Corp.',
    review: 'A great solution for business operations. We saw better efficiency and transparency from day one.'
  },
  {
    id: 4,
    image: c4,
    name: 'Emily Rodriguez',
    designation: 'Finance Head',
    company: 'Capital Growth Partners',
    review: 'Highly professional service with a user-friendly experience. It has become an important part of our workflow.'
  },
  {
    id: 1,
    image: c1,
    name: 'John Smith',
    designation: 'CEO',
    company: 'Tech Solutions Inc.',
    review: 'EbixCash made our payment process faster and more reliable. The support team was excellent throughout.'
  },
  {
    id: 2,
    image: c2,
    name: 'Sarah Johnson',
    designation: 'Product Manager',
    company: 'Digital Innovations Ltd.',
    review: 'The platform is smooth, secure, and easy to use. It helped us improve customer experience greatly.'
  },
]



function Testimonial() {
  return (
    <div className="relative  w-full w-[25rem] md:w-[80rem] flex justify-center mx-auto marquee">
      <div className="absolute inset-y-0 left-0 w-4 bg-gradient-to-r from-white to-transparent pointer-events-none z-20" />
      <div className="absolute inset-y-0 right-0 w-4 bg-gradient-to-l from-white to-transparent pointer-events-none z-20" />
      <div className="relative flex flex-row testimonial-track h-[30rem] gap-10 justify-center items-center mt-[-40px] ml-2 ">
   
      {testimonialData.map((data, index) => (
      
        <div key={`${data.id}-${index}`} className=" flex flex-col justify-center items-center w-[25rem] h-[14rem] rounded-2xl bg-gradient-to-t from-blue-900 via-blue-700 to-blue-900">

            <div className="absolute rounded-full bg-white w-[100px] h-[100px] mt-[-250px]"><img className="rounded-full w-[80px] h-[80px] mx-auto mt-3 object-cover" src={data.image} alt="customer"/></div>
            <RiDoubleQuotesL width={100} className='bg-blue-100 rounded-full w-10 h-10 p-2 ml-[-250px] mt-[-120px] text-blue-900 absolute'/>
            <div className="flex flex-col  text-center mt-10"> 
            <p className="text-[16px] font-bold text-white">{data.name}</p>
             
            <div className=" mx-auto text-white gap-1 text-[11px]" style={{fontFamily: "DM Sans"}}> 
            <p> {data.designation}</p>
            <p>{data.company}</p> 
            </div>

           
            <p className="italic font-semibold text-white text-[13px] ml-6 mr-6 mt-2" >{data.review}</p>
            </div>
             
            <div className="mt-[-20px]"><img src={review} width="80px"/></div>
        </div>
      ))}
    </div>
    </div>
    
  )
}

export default Testimonial