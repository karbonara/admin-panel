import React, { useState, useEffect, memo } from 'react';
import { CardContent, Typography } from '@mui/material';
import CardContainer from 'shared/ui/Card/Card';
import axios from 'axios';
import BasicTable from 'shared/ui/BasicTable/BasicTable';

const OrderPage = memo(() => {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    // Здесь делаем запрос к серверу для получения данных об играх
    axios.get('http://localhost:5000/api/games')
      .then(response => {
        setGameData(response.data);
      })
      .catch(error => {
        console.error('Error fetching game data:', error);
      });
  }, []);

  const tableColumns = [
    { key: 'name', label: 'Название' },
    { key: 'price', label: 'Цена' },
    { key: 'sale', label: 'Размер скидки' },
    { key: 'oldPrice', label: 'Старая цена' },
  ];

  return (
    <CardContainer sx={{ mt: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h4">Заказы</Typography>
        <BasicTable rows={gameData} columns={tableColumns} />
      </CardContent>
    </CardContainer>
  )
})

export default OrderPage;
