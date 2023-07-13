import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import CardContainer from 'shared/ui/Card/Card'
import { memo } from 'react';

export const CardStatistics = memo(() => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <CardContainer sx={{
          mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center',
        }} >
          <div>
            <Typography variant="subtitle2" gutterBottom>
              Продажи за сегодня
            </Typography>
            <Typography variant="body2" gutterBottom>
              4,42,236
            </Typography>
          </div>
          <PollOutlinedIcon sx={{ fontSize: '32px' }} />
        </CardContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardContainer sx={{
          mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center',
        }} >
          <div>
            <Typography variant="subtitle2" gutterBottom>
              Продажи за сегодня
            </Typography>
            <Typography variant="body2" gutterBottom>
              4,42,236
            </Typography>
          </div>
          <PollOutlinedIcon sx={{ fontSize: '32px' }} />
        </CardContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardContainer sx={{
          mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center',
        }} >
          <div>
            <Typography variant="subtitle2" gutterBottom>
              Продажи за сегодня
            </Typography>
            <Typography variant="body2" gutterBottom>
              4,42,236
            </Typography>
          </div>
          <PollOutlinedIcon sx={{ fontSize: '32px' }} />
        </CardContainer>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <CardContainer sx={{
          mt: 2, p: 2, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center',
        }} >
          <div>
            <Typography variant="subtitle2" gutterBottom>
              Продажи за сегодня
            </Typography>
            <Typography variant="body2" gutterBottom>
              4,42,236
            </Typography>
          </div>
          <PollOutlinedIcon sx={{ fontSize: '32px' }} />
        </CardContainer>
      </Grid>
    </Grid>
  )
})