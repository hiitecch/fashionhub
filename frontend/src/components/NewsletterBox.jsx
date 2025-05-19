import React, { useState } from 'react';
import { db } from '../firebase/firebase'; // adjust path if different
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const NewsletterBox = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (!email) return;

      await addDoc(collection(db, 'newsletter_subscribers'), {
        email: email,
        subscribedAt: serverTimestamp(),
      });

      setMessage('🎉 Successfully subscribed!');
      setEmail('');
    } catch (error) {
      console.error('Firebase error:', error);
      setMessage('❌ Subscription failed. Please try again.');
    }
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>
          SUBSCRIBE
        </button>
      </form>
      {message && <p className='text-sm font-medium text-green-600'>{message}</p>}
    </div>
  );
};

export default NewsletterBox;
