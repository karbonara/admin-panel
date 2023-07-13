import { Card } from '@mui/material';
import './Card.scss';

export const CardContainer = ({ children, sx }: any) => {
  return (
    <Card sx={sx} classes={{ root: 'card-container' }}>
      {children}
    </Card>
  );
};

export default CardContainer;
