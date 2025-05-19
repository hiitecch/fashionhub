import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div className='bg-gray-50 px-4 sm:px-10 py-10'>
      <div className='text-3xl text-center pt-8 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16 items-center'>
        <img className='w-full md:max-w-[450px] rounded-lg shadow-md' src={assets.about_img} alt='' />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700 text-lg'>
          <p>
            Fashionhub was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
          </p>
          <b className='text-gray-900 text-xl'>Our Mission</b>
          <p>
            Our mission at Fashionhub is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className='text-2xl py-4 text-center'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-base mb-20 gap-8'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg'>
          <b className='text-xl text-gray-900'>Quality Assurance:</b>
          <p className='text-gray-700'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg'>
          <b className='text-xl text-gray-900'>Convenience:</b>
          <p className='text-gray-700'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 bg-white rounded-lg shadow-lg'>
          <b className='text-xl text-gray-900'>Exceptional Customer Service:</b>
          <p className='text-gray-700'>Our team of dedicated professionals is here to assist you every step of the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;