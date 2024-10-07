import React from 'react'
import Details from './Details'
import ContactImg from '../../assets/log-bg.jpg';
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="bg-gray-900 pt-[150px]">
        <Details />
        <div className="flex min-h-screen p-[50px] bg-gray-950">
            {/* Left Image Section */}
            <div className="hidden md:block w-1/2 bg-black">
              <img
                src={ContactImg} 
                alt="Left Image"
                className="object-cover w-full h-[700px]"
              />
            </div>
            <ContactForm />
        </div>
      
    </div>
  )
}

export default Contact
