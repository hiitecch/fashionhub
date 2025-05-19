import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        localStorage.removeItem('token');
        setToken('');
        setCartItems({});
        navigate('/login');
    };

    return (
        <nav className='flex items-center justify-between py-6 px-8 bg-white shadow-md font-medium text-lg sticky top-0 z-50'>
            {/* Logo */}
            <Link to='/'>
                <img src={assets.logo} className='w-40' alt='Fashion Hub Logo' />
            </Link>

            {/* Desktop Navigation */}
            <ul className='hidden sm:flex gap-8 text-gray-700'>
                {['/', '/collection', '/about', '/contact'].map((path, index) => (
                    <NavLink 
                        key={index} 
                        to={path} 
                        className='relative flex flex-col items-center gap-1 hover:text-black transition-colors duration-300'
                    >
                        <p className='tracking-wide'>{path.toUpperCase().replace('/', '') || 'HOME'}</p>
                        <span className='absolute bottom-[-5px] w-0 h-[2px] bg-gray-700 transition-all duration-300 group-hover:w-3/4'></span>
                    </NavLink>
                ))}
            </ul>

            {/* Icons */}
            <div className='flex items-center gap-6'>
                <img 
                    onClick={() => { setShowSearch(true); navigate('/collection'); }} 
                    src={assets.search_icon} 
                    className='w-6 cursor-pointer hover:opacity-70 transition-opacity duration-300' 
                    alt='Search' 
                />

                <div className='relative group'>
                    <img 
                        onClick={() => !token && navigate('/login')} 
                        className='w-6 cursor-pointer hover:opacity-70 transition-opacity duration-300' 
                        src={assets.profile_icon} 
                        alt='Profile' 
                    />
                    {token && (
                        <div className='absolute right-0 hidden group-hover:block bg-white text-gray-600 rounded-lg shadow-lg py-4 px-6 w-40 text-base border'>
                            <p onClick={() => navigate('/myprofile')} className='cursor-pointer hover:text-black transition-colors duration-300'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black transition-colors duration-300'>Orders</p>
                            <p onClick={logout} className='cursor-pointer hover:text-black transition-colors duration-300'>Logout</p>
                        </div>
                    )}
                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-6 hover:opacity-70 transition-opacity duration-300' alt='Cart' />
                    <p className='absolute right-[-6px] bottom-[-6px] w-5 text-center leading-5 bg-black text-white aspect-square rounded-full text-[10px]'>
                        {getCartCount()}
                    </p>
                </Link>

                {/* Mobile Menu Toggle */}
                <img 
                    onClick={() => setVisible(true)} 
                    src={assets.menu_icon} 
                    className='w-6 cursor-pointer sm:hidden hover:opacity-70 transition-opacity duration-300' 
                    alt='Menu' 
                />
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${visible ? 'w-72' : 'w-0 overflow-hidden'}`}>
                <div className='flex flex-col text-gray-600 text-lg'>
                    <div 
                        onClick={() => setVisible(false)} 
                        className='flex items-center gap-4 p-4 cursor-pointer hover:bg-gray-200 transition-colors duration-300'
                    >
                        <img className='h-5 rotate-180' src={assets.dropdown_icon} alt='Back' />
                        <p>Back</p>
                    </div>
                    {['/', '/collection', '/about', '/contact'].map((path, index) => (
                        <NavLink 
                            key={index} 
                            onClick={() => setVisible(false)} 
                            className='py-4 pl-8 border hover:bg-gray-100 transition-colors duration-300' 
                            to={path}
                        >
                            {path.toUpperCase().replace('/', '') || 'HOME'}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
