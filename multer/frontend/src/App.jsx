// components/ImageUpload.js
import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState('');
  const [uploadedPath, setUploadedPath] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      setUploadedPath(res.data.filePath);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {preview && <img src={preview} alt="preview" width="200" />}
      <button onClick={handleUpload}>Upload</button>

      {uploadedPath && (
        <div>
          <p>Uploaded Image:</p>
          <img src={`http://localhost:5000/${uploadedPath}`} alt="uploaded" width="200" />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
