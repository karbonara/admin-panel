import { CardContent } from '@mui/material'
import { editBasicReducer } from 'features/EditBasicGood'
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import CardContainer from 'shared/ui/Card/Card'
import { GoodsInside } from 'widgets/GoodsInside'

const reducers: ReducersList = {
  editBasicGood: editBasicReducer
}

const IndividualEditPage = () => {

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <CardContainer sx={{ mt: 2, p: 2 }}>
        <CardContent>
          <GoodsInside />
        </CardContent>
      </CardContainer>
    </DynamicModuleLoader>
  )
}

export default IndividualEditPage
