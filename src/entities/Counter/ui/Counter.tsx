import { Button } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { counterActions } from "../model/slice/counterSlice"
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue"

export const Counter = () => {
  const dispatch = useDispatch()

  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment()) // Вызовите функцию increment()
  }

  const decrement = () => {
    dispatch(counterActions.decrement()) // Вызовите функцию decrement()
  }

  return (
    <>
      {counterValue}
      <Button onClick={increment}>
        increment
      </Button>
      <Button onClick={decrement}>
        decrement
      </Button>
    </>
  )
}