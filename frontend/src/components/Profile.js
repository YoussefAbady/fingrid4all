import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

useEffect(() => {
    const fetchProfile = async () => {
        try {
            const response = await axios.get('http://localhost:5000/profile', { params: { username: 'testuser' } });
            setUsername(response.data.username);
            setEmail(response.data.email);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };
    fetchProfile();
}, []);

  const handleUpdate = async () => {
    await axios.post('http://localhost:5000/profile', { username, email });
    alert('Profile updated');
  };

  return (
    <div>
      <h2>Profile</h2>
      <input type="text" placeholder="Username" value={username} readOnly />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Profile;