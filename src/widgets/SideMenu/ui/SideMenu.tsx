import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import BarChartIcon from '@mui/icons-material/BarChart';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import Button from '@mui/material/Button';
import CardContainer from 'shared/ui/Card/Card';
import { Link } from 'react-router-dom';

function SideMenu() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <CardContainer sx={{ minWidth: 275 }}>
      <div>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
          classes={{
            root: 'accordion-root',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <SupervisedUserCircleIcon sx={{ width: '33%', flexShrink: 0 }} color='primary' />
            <Typography sx={{ color: 'text.secondary' }}>Мой профиль</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="text" size="large" fullWidth>
              <Link to="/settings" style={{ textDecoration: 'none' }}>Настройки</Link>
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}
          classes={{
            root: 'accordion-root',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel1bh-header"
          >
            <ShoppingBasketIcon sx={{ width: '33%', flexShrink: 0 }} color='primary' />
            <Typography sx={{ color: 'text.secondary' }}>Коммерция</Typography>
          </AccordionSummary>
          <AccordionDetails
            classes={{
              root: 'accordion-root',
            }}
          >
            <Button variant="text" size="large" fullWidth>
              <Link to="/order" style={{ textDecoration: 'none' }}>Заказы</Link>
            </Button>
            <Button variant="text" size="large" fullWidth>
              <Link to="/product" style={{ textDecoration: 'none' }}>Заявки</Link>
            </Button>
            <Button variant="text" size="large" fullWidth>
              <Link to="/product" style={{ textDecoration: 'none' }}>Пользователи</Link>
            </Button>
            <Button variant="text" size="large" fullWidth>
              <Link to="/promocode" style={{ textDecoration: 'none' }}>Промо-коды</Link>
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}
          classes={{
            root: 'accordion-root',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel1bh-header"
          >
            <ViewKanbanIcon sx={{ width: '33%', flexShrink: 0 }} color='primary' />
            <Typography sx={{ color: 'text.secondary' }}>Таски</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="text" size="large" fullWidth>Доска</Button>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}
          classes={{
            root: 'accordion-root',
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <BarChartIcon sx={{ width: '33%', flexShrink: 0 }} color='primary' />
            <Typography sx={{ color: 'text.secondary' }}>Графики</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Button variant="text" size="large" fullWidth>Графики</Button>
          </AccordionDetails>
        </Accordion>
      </div>

    </CardContainer>
  );
}

export default SideMenu