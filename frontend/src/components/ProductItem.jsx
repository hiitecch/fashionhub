import React, { useContext } from 'react'; 
import { ShopContext } from '../context/ShopContext'; 
import { Link } from 'react-router-dom';  

const ProductItem = ({ id, image, name, price }) => {   
  const { currency } = useContext(ShopContext);    

  return (     
    <Link       
      onClick={() => scrollTo(0, 0)}       
      className='block border border-gray-300 rounded-lg overflow-hidden hover:border-gray-500 transition text-gray-700 cursor-pointer relative'       
      to={`/product/${id}`}     
    >       
      <div className='overflow-hidden'>         
        <img           
          className='w-full transition ease-in-out hover:scale-110'           
          src={image[0]}           
          alt={name}         
        />       
      </div>       
      <div className='p-3 pb-10'>         
        <p className='pb-1 text-base font-semibold text-gray-800'>{name}</p>         
      </div>     
      <p className='text-lg font-bold px-3 py-1 rounded-md absolute bottom-2 left-2'>
        {currency}{price}
      </p>       
    </Link>   
  ); 
};  

export default ProductItem;