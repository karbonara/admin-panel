import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Portal from '../Portal/Portal';

interface BasicModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: '650px',
  minWidth: '300px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BasicModal = (props: BasicModalProps) => {
  const { children, open, onClose } = props;

  return (
    <Portal>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </Portal>
  )
}

export default BasicModal;