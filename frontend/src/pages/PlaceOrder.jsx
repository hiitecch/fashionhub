import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

    const { navigate, backendUrl, token, cartItems, setCartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        street: '',
        city: '',
        state: '',
        zipcode: '',
        country: '',
        phone: ''
    })

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFormData(data => ({ ...data, [name]: value }))
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        try {
            let orderItems = []

            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        const itemInfo = structuredClone(products.find(product => product._id === items))
                        if (itemInfo) {
                            itemInfo.size = item
                            itemInfo.quantity = cartItems[items][item]
                            orderItems.push(itemInfo)
                        }
                    }
                }
            }

            const orderData = {
                address: formData,
                items: orderItems,
                amount: getCartAmount() + delivery_fee
            }

            const response = await axios.post(backendUrl + '/api/order/place', orderData, { headers: { token } })
            if (response.data.success) {
                setCartItems({})
                navigate('/orders')
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-200 min-h-screen">
        <form 
          onSubmit={onSubmitHandler} 
          className='flex flex-col lg:flex-row justify-between gap-10 p-6 sm:p-12 bg-gray-100 text-lg border border-gray-300 rounded-2xl w-full max-w-7xl'
        >
          {/* Left Side - Delivery Info */}
          <div className='flex flex-col gap-6 w-full lg:max-w-[55%] bg-white p-8 rounded-2xl shadow-lg'>
            <Title text1='DELIVERY' text2='INFORMATION' />
            
            <div className='flex flex-col sm:flex-row gap-4'>
              <input required name='firstName' value={formData.firstName} onChange={onChangeHandler} 
                className='input-style border border-gray-300 rounded-lg p-3 w-full' type='text' placeholder='First name' />
              <input required name='lastName' value={formData.lastName} onChange={onChangeHandler} 
                className='input-style border border-gray-300 rounded-lg p-3 w-full' type='text' placeholder='Last name' />
            </div>
      
            <input required name='email' value={formData.email} onChange={onChangeHandler} 
              className='input-style border border-gray-300 rounded-lg p-3 w-full' type='email' placeholder='Email address' />
      
            <input required name='street' value={formData.street} onChange={onChangeHandler} 
              className='input-style border border-gray-300 rounded-lg p-3 w-full' type='text' placeholder='Street address' />
      
            <div className='flex flex-col sm:flex-row gap-4'>
              <input required name='city' value={formData.city} onChange={onChangeHandler} 
                className='input-style border border-gray-300 rounded-lg p-3 w-full' type='text' placeholder='City' />
              <input name='state' value={formData.state} onChange={onChangeHandler} 
                className='input-style border border-gray-300 rounded-lg p-3 w-full' type='text' placeholder='State' />
            </div>
      
            <div className='flex flex-col sm:flex-row gap-4'>
              <input required name='zipcode' value={formData.zipcode} onChange={onChangeHandler} 
                className='input-style border border-gray-300 rounded-lg p-3 w-full' type='number' placeholder='Zipcode' />
              <input required name='country' value={formData.country} onChange={onChangeHandler} 
                className='input-style border border-gray-300 rounded-lg p-3 w-full' type='text' placeholder='Country' />
            </div>
      
            <input required name='phone' value={formData.phone} onChange={onChangeHandler} 
              className='input-style border border-gray-300 rounded-lg p-3 w-full' type='number' placeholder='Phone number' />
          </div>
      
          {/* Right Side - Cart + Payment */}
          <div className='flex flex-col gap-6 w-full lg:max-w-[40%] bg-white p-8 rounded-2xl shadow-lg mt-10 lg:mt-0'>
            <CartTotal />
      
            <div className='mt-6'>
              <Title text1='PAYMENT' text2='METHOD' />
      
              <div className='flex items-center gap-3 border border-black p-4 rounded-xl bg-gray-100 mt-4'>
                <div className='w-4 h-4 border rounded-full bg-black'></div>
                <p className='text-base font-semibold text-gray-800'>Cash on Delivery</p>
              </div>
            </div>
      
            <div className='text-end mt-6'>
              <button type='submit' className='bg-black hover:bg-gray-900 transition text-white px-10 py-4 rounded-xl text-base font-semibold shadow-md hover:shadow-lg'>
                PLACE ORDER
              </button>
            </div>
          </div>
        </form>
      </div>
      
      
      

    )
}

export default PlaceOrder
