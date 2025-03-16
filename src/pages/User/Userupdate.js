import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserUpdate() {
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState('');
  const [photos, setPhotos] = useState('');
  const [updated, setUpdated] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const loadUserData = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUserData(user);
      setUserId(user._id);
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const formData = new FormData();
    formData.append('images', file);

    try {
      const uploadResponse = await axios.post(`https://stayback1.onrender.com/uploads`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setPhotos(uploadResponse.data.images[0]);

      const updatedUser = { ...userData, photos: uploadResponse.data.images[0].url };
      console.log("updated data is ", updatedUser)

      const updateResponse = await axios.put(`https://stayback1.onrender.com/api/users/${userId}`, updatedUser);

      console.log('User profile updated:', updateResponse.data);
      setUpdated(updateResponse.data.images);
      toast.success("Profile Updated Success...")

      navigate ('/profile')
    } catch (err) {
      console.error('Error updating profile picture:', err);
      toast.error('Error updating profile picture. Please try again...');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <div className='container m-5'>

    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fileInput">Select Profile Picture:</label>
        <input
          id="fileInput"
          type="file" multiple
          onChange={handleFileChange}
          aria-label="Profile picture upload"
        />
      </div>
      <button type="submit" className='cabutoon ' disabled={loading}>
        {loading ? 'Uploading...' : 'Upload'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
    </div>
  );
}

export default UserUpdate;
