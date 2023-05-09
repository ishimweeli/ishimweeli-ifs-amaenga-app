
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Container, Grid, Paper } from '@material-ui/core';
import { Menu as MenuIcon, ExitToApp as LogoutIcon, Announcement as AnnouncementIcon, Person as PersonIcon, CloudUpload as UploadIcon } from '@material-ui/icons';
import PublicationPage from './AnnouncementPage';
import AmarengaPage from './EventPage';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  toolbar: theme.mixins.toolbar,
}));

function Dashboard() {
  const classes = useStyles();
  const [ open, setOpen ] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={ classes.root }>
      <AppBar position="fixed" className={ classes.appBar }>
        <Toolbar>
          <IconButton edge="start" className={ classes.menuButton } color="inherit" aria-label="menu" onClick={ handleDrawerOpen }>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={ classes.drawer }
        variant="temporary"
        anchor="left"
        open={ open }
        onClose={ handleDrawerClose }
        classes={ {
          paper: classes.drawerPaper,
        } }
      >
        <div className={ classes.toolbar } />
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><UploadIcon /></ListItemIcon>
            <ListItemText primary="Upload" />
          </ListItem>
          <ListItem button >
            <ListItemIcon><AnnouncementIcon /></ListItemIcon>
            <ListItemText primary="Announcement" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><LogoutIcon /></ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>
      <main className={ classes.content }>
        <div className={ classes.toolbar } />
        <Container maxWidth="lg">
          <Grid container spacing={ 3 }>



            <Grid item xs={ 12 } md={ 6 }>
              <Paper><PublicationPage /></Paper>
            </Grid>
            <Grid item xs={ 12 } md={ 6 }>
              <Paper><AmarengaPage /></Paper>
            </Grid>



          </Grid>
        </Container>

      </main>

    </div>
  );
}

export default Dashboard;
