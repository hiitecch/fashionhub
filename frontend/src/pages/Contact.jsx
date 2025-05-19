import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const Contact = () => {
  return (
    <div className='bg-gray-50 px-4 sm:px-10 py-10'>
      <div className='text-center text-3xl pt-10 border-t border-gray-300'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-16 items-center mb-28'>
        <img className='w-full md:max-w-[480px] rounded-lg shadow-md' src={assets.contact_img} alt='' />
        <div className='flex flex-col justify-center items-start gap-6 bg-white p-8 rounded-lg shadow-lg'>
          <p className='font-bold text-2xl text-gray-700'>Our Store</p>
          <p className='text-lg text-gray-600'>734010 <br /> Sukna, Siliguri, West Bengal</p>
          <p className='text-lg text-gray-600'>Tel: (415) 555-0132 <br /> Email: admin@Fashionhub.com</p>
          <p className='font-bold text-2xl text-gray-700'>Careers at Fashionhub</p>
          <p className='text-lg text-gray-600'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-6 py-3 text-base font-semibold hover:bg-black hover:text-white transition-all duration-300 rounded-md'>
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default Contact;