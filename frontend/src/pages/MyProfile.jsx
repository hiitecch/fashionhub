import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { ShopContext } from '../context/ShopContext';

const MyProfile = () => {
    const { token } = useContext(ShopContext);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get("http://localhost:4000/api/user/profile", {
                    headers: {
                      Authorization: `Bearer ${token}`
                    }
                  });
                setUser(res.data);
            } catch (err) {
                console.error('Failed to fetch profile', err);
            }
        };

        fetchProfile();
    }, [token]);

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-2xl shadow-md bg-white">
  <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center border-b pb-4">My Profile</h1>

  {user ? (
    <div className="space-y-4 text-gray-700">
      <div className="flex items-center justify-between">
        <span className="font-medium text-lg">Name:</span>
        <span>{user.name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-lg">Email:</span>
        <span>{user.email}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-medium text-lg">Phone:</span>
        <span>{user.phone}</span>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Loading profile...</p>
  )}
</div>

    );
};

export default MyProfile;
