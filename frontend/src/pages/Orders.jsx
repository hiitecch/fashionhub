import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setorderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + '/api/order/userorders',
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];
        response.data.orders.map((order) => {
          order.items.map((item) => {
            item['status'] = order.status;
            item['payment'] = order.payment;
            item['paymentMethod'] = order.paymentMethod;
            item['date'] = order.date;
            allOrdersItem.push(item);
          });
        });
        setorderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen pt-16 px-4">
      <div className="w-full max-w-6xl">
        <div className="text-2xl text-center mb-8">
          <Title text1={'MY'} text2={'ORDERS'} />
        </div>

        <div className="flex flex-col gap-6">
          {orderData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-xl p-4 sm:p-6 shadow-sm flex flex-col md:flex-row md:justify-between gap-6"
            >
              {/* Left Side - Product Details */}
              <div className="flex gap-4 sm:gap-6">
                <img className="w-20 h-20 rounded-lg object-cover" src={item.image[0]} alt={item.name} />
                <div>
                  <p className="text-base font-semibold">{item.name}</p>
                  <div className="flex flex-wrap gap-4 mt-2 text-sm sm:text-base text-gray-700">
                    <p>
                      <span className="font-medium">Price:</span> {currency}
                      {item.price}
                    </p>
                    <p>
                      <span className="font-medium">Qty:</span> {item.quantity}
                    </p>
                    <p>
                      <span className="font-medium">Size:</span> {item.size}
                    </p>
                  </div>
                  <div className="mt-2 text-sm text-gray-500">
                    <p>Date: {new Date(item.date).toDateString()}</p>
                    <p>Payment: {item.paymentMethod}</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Status & Action */}
              <div className="flex flex-col justify-between md:items-end gap-4 md:text-right">
                <div className="flex items-center gap-2 text-sm md:text-base">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <span className="text-gray-700">{item.status}</span>
                </div>
                <button
                  onClick={loadOrderData}
                  className="border border-black text-sm font-medium px-5 py-2 rounded-lg hover:bg-gray-100 transition"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
