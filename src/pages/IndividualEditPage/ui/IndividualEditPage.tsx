import { CardContent } from '@mui/material'
import CardContainer from 'shared/ui/Card/Card'
import { GoodsInside } from 'widgets/GoodsInside'

const IndividualEditPage = () => {
  return (
    <CardContainer sx={{ mt: 2, p: 2 }}>
      <CardContent>
        <GoodsInside />
      </CardContent>
    </CardContainer>
  )
}

export default IndividualEditPage


