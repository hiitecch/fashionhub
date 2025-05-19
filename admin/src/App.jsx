import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import Add from './pages/Add';
import List from './pages/List';
import Orders from './pages/Orders';
import Login from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = '$';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    localStorage.setItem('token', token);
  }, [token]);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <ToastContainer />
      {token === '' ? (
        <div className="flex items-center justify-center h-screen">
          <Login setToken={setToken} />
        </div>
      ) : (
        <>
          <Navbar setToken={setToken} />
          <div className="flex flex-col md:flex-row w-full p-4 md:p-6 lg:p-8 gap-6">
            <Sidebar />
            <main className="flex-1">
              <div className="bg-white rounded-2xl shadow-md border-2 border-gray-300 hover:border-gray-400 transition-all duration-300 p-6 md:p-8">
                <Routes>
                  <Route path="/" element={<Add token={token} />} />
                  <Route path="/add" element={<Add token={token} />} />
                  <Route path="/list" element={<List token={token} />} />
                  <Route path="/orders" element={<Orders token={token} />} />
                </Routes>
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
