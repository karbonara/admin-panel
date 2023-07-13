import CardContainer from 'shared/ui/Card/Card'
import { Grid } from '@mui/material';
import BasicTable from 'shared/ui/BasicTable/BasicTable';
import { CardStatistics } from 'widgets/CardStatistics';
import { memo } from 'react';

const data = [
  { name: 'Артем', calories: 'test@gmail.com', fat: '89998781003', carbs: '22 июня', protein: 'сумма' },
];

const rows = [
  { name: 'Frozen yoghurt', calories: '159', fat: '2112', carbs: '12112' },
];

const MainPage = memo(() => {
  return (
    <>
      <CardStatistics />
      <CardContainer sx={{ mt: 2, p: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <BasicTable rows={data} call1="Имя" call2='Почта' call3={'Номер телефона'} call4={'Дата заявки'} call5={'Сумма'} />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <BasicTable rows={rows} call1="Имя" call2='Почта' call3={'call3'} call4={'тест'} />
          </Grid>
        </Grid>
      </CardContainer>
    </>
  )
})

export default MainPage