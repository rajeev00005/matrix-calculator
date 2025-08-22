// app/components/Navbar.tsx
'use client';

import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <AppBar position="sticky" color="default" sx={{ mb: 4 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* Logo / App Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', color: 'primary.main' }}
          >
            🧮 MatrixCalc
          </Typography>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.name}
                component={NextLink}
                href={item.href}
                sx={{ color: 'primary', mx: 1 , fontWeight: 'bold'}}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 240 } }}
      >
        <Box
          sx={{ width: 240 }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Box sx={{ textAlign: 'center', p: 2, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h6">Menu</Typography>
          </Box>
          {navItems.map((item) => (
            <Button
              key={item.name}
              component={NextLink}
              href={item.href}
              fullWidth
              sx={{ my: 1, mx: 2, color: 'text.primary' }}
            >
              {item.name}
            </Button>
          ))}
        </Box>
      </Drawer>
    </>
  );
}