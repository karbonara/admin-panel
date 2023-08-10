import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { TextArea } from 'shared/ui/TextArea/TextArea';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export const EditBasicGood = () => {
  return (
    <>
      <div>
        <TextField
          id="standard-textarea"
          label="ID"
          placeholder="ID"
          multiline
          variant="standard"
          type="number"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="CS GO"
          placeholder="CS GO"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="Цена"
          type="number"
          placeholder="269"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="Старая цена"
          type="number"
          placeholder="1269"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="Скидка"
          type="number"
          placeholder="69"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="08.02.2018"
          placeholder="08.02.2018"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="Инди, Онлайн"
          placeholder="Инди, Онлайн"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>

      <br />
      <TextArea
        value={''}
        onChange={() => { }}
        onKeyDown={() => { }}
        placeholder="Описание товара"
        sx={{ width: '100%' }}
      />
      <div>
        <TextField
          id="standard-textarea"
          label="description"
          placeholder="description"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="keywords"
          placeholder="keywords"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="metaOgTitle"
          placeholder="metaOgTitle"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="metaOgDescription"
          placeholder="metaOgDescription"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="metaOgUrl"
          placeholder="metaOgUrl"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="canonical"
          placeholder="canonical"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <TextField
          id="standard-textarea"
          label="link (Оплата)"
          placeholder="link (Оплата)"
          multiline
          variant="standard"
          sx={{ width: { xs: '100%', sm: 483 } }}
        />
      </div>
      <div>
        <FormControlLabel
          value="Снижение цен"
          control={<Checkbox />}
          label="Снижение цен"
          labelPlacement="start"
        />
      </div>
      <div>
        <FormControlLabel
          value="Лидеры продаж"
          control={<Checkbox />}
          label="Лидеры продаж"
          labelPlacement="start"
        />
      </div>
      <div>
        <FormControlLabel
          value="Новинки"
          control={<Checkbox />}
          label="Новинки"
          labelPlacement="start"
        />
      </div>
      <div>
        <FormControlLabel
          value="Хиты продаж (макс 5 шт)"
          control={<Checkbox />}
          label="Хиты продаж (макс 5 шт)"
          labelPlacement="start"
        />
      </div>
      <br />
      <br />
      <Button variant="contained">Сохранить</Button>
    </>
  )
}