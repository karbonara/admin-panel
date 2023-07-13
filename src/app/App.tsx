import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { Header } from 'widgets/Header';
import Box from '@mui/material/Box';
import { SideMenu } from 'widgets/SideMenu';
import AppRouter from './provider/router/index';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './styles/reset.scss';
import { userActions } from 'entities/User';

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch])

  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ display: 'flex', position: 'relative' }}>
          <Box
            sx={{
              display: { xs: 'none', lg: 'block' },
              position: 'fixed',
              left: 0,
              top: 0,
              bottom: 0,
              width: '250px',
            }}
          >
            <SideMenu />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              marginLeft: { xs: 0, lg: '250px' },
              width: { xs: '100%', lg: 'calc(100% - 250px)' },
              padding: { xs: '0 0', lg: '0 12px' },
            }}
          >
            <Header />
            <AppRouter />
          </Box>
        </Box>
      </Container>
    </>
  )
}
export default App;
