import { styled } from '@mui/material/styles';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { ChangeEvent, KeyboardEvent } from 'react';

interface TextAreaProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  sx?: any;
}

const StyledTextarea = styled(TextareaAutosize)(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(1),
  borderRadius: '12px 12px 0 12px',
  color: theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900],
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#fff',
  border: `1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]}`,
  boxShadow: `0px 2px 2px ${theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]}`,
  '&:hover': {
    borderColor: theme.palette.primary.main,
  },
}));

export const TextArea: React.FC<TextAreaProps> = ({ value, onChange, onKeyDown, placeholder, sx }) => {
  return (
    <StyledTextarea
      minRows={3}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      sx={sx}
    />
  )
}