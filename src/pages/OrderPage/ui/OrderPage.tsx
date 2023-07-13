import { CardContent } from '@mui/material'
import React from 'react'
import CardContainer from 'shared/ui/Card/Card'
import CollapsibleTable from 'shared/ui/CollapsibleTable/CollapsibleTable'

const OrderPage = () => {
  return (
    <CardContainer sx={{ mt: 2, p: 2 }}>
      <CardContent>
        <h1>OrderPage</h1>
        <CollapsibleTable />
      </CardContent>
    </CardContainer>
  )
}

export default OrderPage


