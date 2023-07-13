import CardContainer from 'shared/ui/Card/Card';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box, CardContent } from '@mui/material';

const PromoCodePage = () => {
  return (
    <CardContainer sx={{ mt: 2 }}>
      <CardContent>
        <form action="">
          <Box sx={{
            '& > :not(style)': { my: 1, mr: 2, width: '100%' },
          }}
          >
            <TextField size="medium" id="standard-basic" label="Название промо-кода" variant="standard" />
            <TextField type='number' size="medium" id="standard-basic" label="Размер скидки" variant="standard" />
          </Box>
          <Button variant="contained">Создать</Button>
        </form>
      </CardContent>
    </CardContainer>
  )
}

export default PromoCodePage