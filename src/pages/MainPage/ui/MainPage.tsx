import CardContainer from 'shared/ui/Card/Card'
import { Grid } from '@mui/material';
import { CardStatistics } from 'widgets/CardStatistics';
import { memo } from 'react';
import { Games } from 'entities/Games/ui/Games';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { gamesReducer } from 'entities/Games/model/slice/gamesSlice';

const reducers: ReducersList = {
  gamesData: gamesReducer
}

const MainPage = memo(() => {
  return (
    <>
      <DynamicModuleLoader reducers={reducers} removeAfterUnmount >
        <CardStatistics />
        <CardContainer sx={{ mt: 2, p: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Games />
            </Grid>
          </Grid>
        </CardContainer>
      </DynamicModuleLoader>
    </>
  )
})

export default MainPage