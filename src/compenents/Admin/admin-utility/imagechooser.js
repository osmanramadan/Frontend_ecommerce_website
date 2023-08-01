import React, { useRef, useState } from 'react';
import avater from '../../../images/avatar.png';

const FileChooser = () => {
  const fileInputRef = useRef(null);
  const [filename, setFilename] = useState('choose image');

  const handleChooseImage = () => {
    fileInputRef.current.click();
    console.log(fileInputRef);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFilename('select');
    if (file) {
      // You can perform actions with the selected file here
      console.log('Selected file:', file['size']);
    }
  };

  return (
    <div>
      <button
        style={{ border: 'none', backgroundColor: 'unset' }}
        onClick={handleChooseImage}
      >
        <img style={{ height: '110px', width: '120px' }} src={avater} />{' '}
      </button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        accept="image/*"
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default FileChooser;
