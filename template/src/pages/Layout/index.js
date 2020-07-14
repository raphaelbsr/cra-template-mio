import React, { useState } from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  AppBar,
  Toolbar,
  List,
  Typography,
  Box,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
} from '@material-ui/core';
import KeyIcon from '@material-ui/icons/VpnKey';
import ExitIcon from '@material-ui/icons/ExitToApp';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import LeftMenu from './LeftMenu';
import { getData, logout, AlterarSenha } from 'mio-library-autenticacao';
import TopLogo from '~/assets/images/logoTopo.svg';
import { NotificationContainer } from 'react-notifications';

const drawerWidth = 120;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    paddingTop: 56,
    minHeight: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64,
    },
    backgroundColor: theme.palette.background.default,
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: theme.palette.primary.dark,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    marginRight: 22,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    overflow: 'hidden',
    flexShrink: 0,
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    height: '100%',
    width: '100%',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.background,
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
  },
  slide: {
    width: drawerWidth,
    // flexShrink: 0,
    // position: "relative",
    // whiteSpace: "nowrap"
  },
  fixedHeight: {
    height: 240,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  box: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  list: {
    paddingTop: 0,
    margin: 0,
  },
  divider: {
    heigth: 20,
    backgroundColor: 'black',
  },
}));

const Layout = (props) => {
  const { children, topBar } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showChangePass, setShowChangePass] = useState(false);
  const menuOpen = Boolean(anchorEl);
  const { name, email } = getData();

  const initials = `${name.charAt(0).toUpperCase()}${name
    .charAt(1)
    .toUpperCase()
    .toUpperCase()}`;

  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  function handleLogout() {
    logout();
    window.location.href = '/';
  }

  function handleAlterarSenha() {
    setShowChangePass(!showChangePass);
  }

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}
    >
      <NotificationContainer />
      <AlterarSenha
        isOpen={showChangePass}
        onClose={handleAlterarSenha}
        email={email}
      />
      <AppBar position="fixed" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Box className={classes.box}>
            <img src={TopLogo} alt="MIO" height="52" />
            <Box className={classes.box1}>
              <Typography
                // component="h1"
                variant="subtitle1"
                color="inherit"
                noWrap
                className={classes.title}
              >
                {name}
              </Typography>
              <IconButton
                aria-label="more"
                aria-controls="settings-menu"
                aria-haspopup="true"
                color="inherit"
                onClick={handleClick}
              >
                {/* <SettingsIcon /> */}
                <Avatar className={classes.avatar}>
                  <Typography variant="h6" color="primary">
                    {initials}
                  </Typography>
                </Avatar>
              </IconButton>
              <Menu
                id="settings-menu"
                anchorEl={anchorEl}
                keepMounted
                open={menuOpen}
                onClose={handleClose}
                PaperProps={{
                  style: {
                    width: 200,
                  },
                }}
              >
                <MenuItem onClick={handleAlterarSenha}>
                  <Grid container justify="space-between" alignItems="center">
                    Alterar Senha
                    <KeyIcon />
                  </Grid>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Grid container justify="space-between" alignItems="center">
                    Sair
                    <ExitIcon />
                  </Grid>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <List>
          <LeftMenu />
        </List>
      </Drawer>
      <main className={classes.content}>
        {topBar !== undefined && topBar(props)}
        <Box className={classes.container}>{children}</Box>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(Layout);
