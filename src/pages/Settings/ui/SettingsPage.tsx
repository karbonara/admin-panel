import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardContainer from 'shared/ui/Card/Card';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

const SettingsPage = () => {
  return (
    <>
      <CardContainer sx={{ mt: 2 }}>
        <CardContent
          sx={{ gap: 2, p: 2, }}
        >
          <Typography variant="h4" gutterBottom>Artem Karbonara</Typography>
          <Typography variant="body1" gutterBottom>Должность: Администратор</Typography>
        </CardContent>
      </CardContainer>
      <CardContainer sx={{ mt: 2 }}>
        <CardContent sx={{ gap: 2, p: 2 }}>
          <Typography variant="h6" gutterBottom>Информация о аккаунте</Typography>
          <Box sx={{
            '& > :not(style)': { my: 1, mr: 2, width: '100%' },
          }}>
            <TextField size="medium" id="standard-basic" label="Имя Фамилия" variant="standard" />
            <TextField size="medium" id="standard-basic" label="Номер телефона" variant="standard" />
          </Box>
          <Box sx={{
            '& > :not(style)': { my: 1, mr: 2, width: '100%' },
          }}>
            <TextField size="medium" id="standard-basic" label="Почта" variant="standard" />
            <TextField size="medium" id="standard-basic" label="Пароль" variant="standard" />
          </Box>
          <Button variant="contained">Сохранить</Button>
        </CardContent>
      </CardContainer>
    </>
  )
}

export default SettingsPage