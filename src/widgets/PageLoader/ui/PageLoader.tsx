import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const PageLoader = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  )
}

export default PageLoader