import { memo } from "react"
import Input from '@mui/joy/Input';

interface BasicInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

export const BasicInput = memo((props: BasicInputProps) => {
  const { value, onChange } = props;

  const onChangeInput = (e: any) => {
    onChange && onChange(e.target.value);
  }

  return (
    <Input
      color="neutral"
      size="md"
      variant="outlined"
      value={value}
      onChange={onChangeInput}
    />
  )
})
