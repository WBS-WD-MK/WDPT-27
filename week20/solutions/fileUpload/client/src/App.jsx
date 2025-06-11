import { useState } from 'react';

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile) {
      alert('Please upload a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    console.log('THE FILE:', selectedFile);
    console.log('FORM DATA:', formData);
    try {
      const response = await fetch('http://localhost:3000/file-upload', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      setImageUrl(data.location);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input type='file' onChange={handleFileChange} accept='image/*' />
        <button type='submit'>Upload</button>
      </form>
      {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt='Uploaded' style={{ width: '300px' }} />
        </div>
      )}
    </div>
  );
}

export default App;
