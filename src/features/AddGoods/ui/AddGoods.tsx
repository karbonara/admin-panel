import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { TextArea } from 'shared/ui/TextArea/TextArea';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  maxWidth: 400,
}));

export const AddGoods = () => {

  const [inputValue, setInputValue] = useState('');
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const storedProductList = localStorage.getItem('productList');
    if (storedProductList) {
      setProductList(JSON.parse(storedProductList));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('productList', JSON.stringify(productList));
  }, [productList]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const handleAddProduct = () => {
    const products = inputValue
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line !== '');

    if (products.length > 0) {
      setProductList((prevList) => [...prevList, ...products]);
      setInputValue('');
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleAddProduct();
    }
  };

  const handleRemoveProduct = (index: any) => {
    setProductList((prevList) => prevList.filter((_, i) => i !== index));
  };

  return (
    <>
      <div>
        <TextArea
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Введите товары (каждая новая строка - новый товар)"
        />
        <br />
        <Button onClick={handleAddProduct} size="small">Добавить</Button>
      </div>
      <div>
        <h3>Добавленные товары:</h3>
        <div>
          {productList.map((product, index) => (
            <Box sx={{ flexGrow: 1, overflow: 'hidden' }} key={index}>
              <Item sx={{ my: 1, p: 2 }} >
                <Stack direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={1}
                >
                  <Stack sx={{ minWidth: 0 }}>
                    <Typography noWrap>{product}</Typography>
                  </Stack>
                  <Button onClick={() => handleRemoveProduct(index)} size="small">Удалить</Button>
                </Stack>
              </Item>
            </Box>
          ))}
        </div>
      </div>
    </>
  )
}