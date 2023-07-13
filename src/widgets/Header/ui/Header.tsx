import * as React from 'react';
import { memo, useCallback } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import CardContainer from 'shared/ui/Card/Card';
import { pages, settings } from 'app/provider/data/data'
import { LoginModal } from 'features/AuthByUser/ui/LoginModal/LoginModal';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';

const Header = memo(() => {
  const authData = useSelector(getUserAuthData);
  const dispatch = useDispatch();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event: { currentTarget: any; }) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: { currentTarget: any; }) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const [isAuthModal, setIsAuthModal] = React.useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, [])

  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, [])

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch])

  if (!authData) {
    return (
      <CardContainer>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Button onClick={onOpenModal}>Авторизация</Button>
            <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
            <Button>Регистрация</Button>
          </Toolbar>
        </Container>
      </CardContainer>
    )
  }

  return (
    <CardContainer>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((item) => (
                <MenuItem key={item.page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={`/${item.route}`}>{item.page}</Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((item) => (
              <Button
                key={item.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link to={`/${item.route}`}>{item.page}</Link>
              </Button>
            ))}
          </Box>
          <Button onClick={onLogout}>Выйти</Button>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </CardContainer>
  );
})
export default Header;