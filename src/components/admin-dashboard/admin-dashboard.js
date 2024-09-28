import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import AdminPortor from './popularhunt'; // Import the Popular Hunt component
import NewHunt from './newhunt'; // Import the New Hunt component
import TopOffer from './topoffer'; // Import the Top Offer component

const drawerWidth = 240;

const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState(null); // To track the clicked item

  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            mt: 8,  // Add margin to avoid overlap from AppBar
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {['Popular Hunt', 'New Hunt', 'Top Offer', 'Users'].map((text) => (
            <ListItem button key={text} onClick={() => handleMenuClick(text)}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        {/* Top Bar */}
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              ADMIN
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Content */}
        <Toolbar />
        <Box>
          {activeComponent === 'Popular Hunt' && <AdminPortor />}  {/* Show AdminPortor if "Popular Hunt" is clicked */}
          {activeComponent === 'New Hunt' && <NewHunt />}            {/* Show NewHunt if "New Hunt" is clicked */}
          {activeComponent === 'Top Offer' && <TopOffer />}         {/* Show TopOffer if "Top Offer" is clicked */}
          {activeComponent === null && (
            <Typography paragraph>
              Welcome to the dashboard! Here you can display your main content like charts, tables, or analytics.
            </Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
