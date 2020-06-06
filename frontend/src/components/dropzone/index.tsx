import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload } from 'react-icons/fi';

import './styles.css';

interface Props {
  onFileUploaded: (file: File) => void;
  // sempre qnd for funçao relacionadas a estado, nao tem retorno => void
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectFileUrl, setSelectFileUrl] = useState('');

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectFileUrl(fileUrl);
      onFileUploaded(file); // passa o state por props, preenchendo o state 'selectedFile'
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div className="dropzone" {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectFileUrl ? (
        <img src={selectFileUrl} alt="Upload" />
      ) : (
        <p>
          <FiUpload></FiUpload>
          Imagem do estabelecimento
        </p>
      )}
    </div>
  );
};

export default Dropzone;
