import { Button } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PageError = () => {
  const reloadPage = () => {
    window.location.reload();
  }
  return (
    <Container maxWidth="xl" >
      <Box sx={{ width: 1, mt: 2, p: 2 }}>
        <Typography variant="h4">Произошла непредвиденная ошибка</Typography>
        <Button onClick={reloadPage}>Обновить страницу</Button>
      </Box>
    </Container>
  )
}

export default PageError;