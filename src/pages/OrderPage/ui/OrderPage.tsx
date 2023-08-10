import { CardContent } from '@mui/material'
import CardContainer from 'shared/ui/Card/Card'
import CollapsibleTable from 'shared/ui/CollapsibleTable/CollapsibleTable'
import Typography from '@mui/material/Typography';

export const desserts = [
  {
    name: 'АРТЕМ',
    calories: 111,
    fat: 222,
    carbs: 33,
    protein: 444,
    price: 1,
    history: [
      {
        date: 'тут дата',
        customerId: 'айди',
        amount: 33,
      },
      {
        date: 'еще дата',
        customerId: 'еще айди',
        amount: 222,
      },
    ],
  },
  {
    name: 'Frozen yoghurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    price: 3.99,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  },
];
const OrderPage = () => {
  return (
    <CardContainer sx={{ mt: 2, p: 2 }}>
      <CardContent>
        <Typography variant="h4">Заказы</Typography>
        <CollapsibleTable data={desserts} />
      </CardContent>
    </CardContainer>
  )
}

export default OrderPage


