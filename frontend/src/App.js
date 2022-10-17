import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AllInclusiveTwoToneIcon from '@mui/icons-material/AllInclusiveTwoTone';
import AddIcon from '@mui/icons-material/Add';
import PreviewIcon from '@mui/icons-material/Preview';

import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function App() {
  const [open, setOpen] = React.useState(true);
  const [page, setPage] = React.useState('allPost')
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };

  // sidebar button handler
  const buttonHandler = (page) =>{
    setPage(page)
    if(page === 'allPost') navigate("/")
    if(page === 'addNew') navigate("/add-post")
    if(page === 'preview') navigate("/preview")
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Rio Richard's Article CMS
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Main Menu
            </ListSubheader>
          }
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <ArticleOutlinedIcon />
            </ListItemIcon>
            <ListItemText primary="Posts" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
              disableRipple
              onClick={() => buttonHandler('allPost')} 
              sx={{ pl: 4 ,backgroundColor: page === 'allPost' ? '#5cabe1' : ''}}>
                <ListItemIcon>
                  <AllInclusiveTwoToneIcon />
                </ListItemIcon>
                <ListItemText primary="All Posts" />
              </ListItemButton>
              <ListItemButton 
              onClick={() => buttonHandler('addNew')}
              sx={{ pl: 4 ,backgroundColor: page === 'addNew' ? '#5cabe1' : ''}}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add New" />
              </ListItemButton>
              <ListItemButton
              onClick={() => buttonHandler('preview')} 
              sx={{ pl: 4 ,backgroundColor: page === 'preview' ? '#5cabe1' : ''}}>
                <ListItemIcon>
                  <PreviewIcon />
                </ListItemIcon>
                <ListItemText primary="Preview" />
              </ListItemButton>
            </List>
          </Collapse>
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
