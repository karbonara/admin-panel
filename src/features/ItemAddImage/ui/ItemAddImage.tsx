import { Card } from '@mui/material'
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { useState } from 'react';

export const ItemAddImage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const handleFileChange = (event: any) => {
    const files = Array.from(event.target.files);
    setSelectedFile(files[0]);
    setUploadedFiles((prevFiles) => [...prevFiles, files[0]]);
  };
  const handleRemoveFile = (index: any) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <h3>Загруженные изображения:</h3>
      {uploadedFiles.map((file, index) => (
        <Card key={index} sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={URL.createObjectURL(file)}
            alt="Paella dish"
          />
          <Button onClick={() => handleRemoveFile(index)} size="small">Удалить</Button>
        </Card>
      ))}
    </div>
  )
}