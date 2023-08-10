import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ItemAddImage } from 'features/ItemAddImage';
import { AddGoods } from 'features/AddGoods';
import { EditBasicGood } from 'features/EditBasicGood';
import React from 'react';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const GoodsInside = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', maxWidth: { xs: 320, sm: 483 } }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Основное" {...a11yProps(0)} />
          <Tab label="Галерея" {...a11yProps(1)} />
          <Tab label="Содержимое" {...a11yProps(2)} />
          <Tab label="Параметры" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <EditBasicGood />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ItemAddImage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AddGoods />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        Параметры
      </CustomTabPanel>
    </>
  )
}

export default GoodsInside