import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import { FiSearch, FiHeart, FiShoppingCart, FiUser, FiChevronDown, FiMenu } from 'react-icons/fi';
import Drawer from '@mui/material/Drawer';
import '../../styles/Navigation.css';

const Navigation = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentMenu, setCurrentMenu] = useState('');

  useEffect(() => {
    const storedCount = localStorage.getItem('visitorCount');
    const currentCount = storedCount ? parseInt(storedCount) : 2500000;
    
    if (!sessionStorage.getItem('visited')) {
      const newCount = currentCount + 1;
      localStorage.setItem('visitorCount', newCount.toString());
      sessionStorage.setItem('visited', 'true');
      setVisitorCount(newCount);
    } else {
      setVisitorCount(currentCount);
    }
  }, []);

  const menuItems = {
    'Our Collection': [
      { name: 'Vintage Timepieces', section: 'product-section' },
      { name: 'Luxury Watches', section: 'product-section' },
      { name: 'Smart Watches', section: 'product-section' }
    ],
    'Support': [
      { name: 'Service Centers', section: 'footer' },
      { name: 'Warranty', section: 'footer' },
      { name: 'FAQs', section: 'footer' },
      { name: 'Contact', section: 'footer' }
    ]
  };

  const handleClick = (event, menu) => {
    setAnchorEl(event.currentTarget);
    setCurrentMenu(menu);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setCurrentMenu('');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      handleClose();
    }
  };

  const formatVisitorCount = (count) => {
    return (count / 1000000).toFixed(1) + 'M+';
  };

  const handleIconClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Add this state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="header">
      <AppBar position="static" className="top-nav">
        <Toolbar>
          <IconButton
            color="inherit"
            className="hamburger-menu"
            onClick={() => setMobileMenuOpen(true)}
          >
            <FiMenu />
          </IconButton>
          <Typography variant="body2" className="store-text">
            Shop Online & Collect in Store
          </Typography>
          
          <div className="right-icons">
            <IconButton 
              color="inherit"
              onClick={() => handleIconClick('product-section')}
              aria-label="Search products"
            >
              <FiSearch />
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => handleIconClick('wishlist-section')}
              aria-label="View wishlist"
            >
              <FiHeart />
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => handleIconClick('cart-section')}
              aria-label="View shopping cart"
            >
              <FiShoppingCart />
            </IconButton>
            <IconButton 
              color="inherit"
              onClick={() => handleIconClick('footer')}
              aria-label="User account"
            >
              <FiUser />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="mobile-menu"
      >
        <div className="mobile-nav-items">
          <div className="mobile-logo-section">
            <img 
              src="/assets/images/logo.png" 
              alt="Alberto Clocks Logo" 
              className="logo-image"
            />
            <Typography variant="h6" className="logo-text">
              Alberto Clocks
            </Typography>
          </div>
          
          <a 
            href="#about-section" 
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about-section');
              setMobileMenuOpen(false);
            }}
          >
            About
          </a>
          
          {Object.entries(menuItems).map(([menu, items]) => (
            <div key={menu} className="mobile-menu-item">
              <div className="mobile-dropdown-button">
                {menu}
                <FiChevronDown className="dropdown-icon" />
              </div>
              <div className="mobile-submenu">
                {items.map((item) => (
                  <a
                    key={item.name}
                    href={`#${item.section}`}
                    className="mobile-nav-link"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.section);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
          
          <a 
            href="#technology-section" 
            className="mobile-nav-link"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('technology-section');
              setMobileMenuOpen(false);
            }}
          >
            Technology
          </a>
        </div>
      </Drawer>

      <AppBar position="static" className="main-nav">
        <Toolbar className="main-toolbar">
          <div className="nav-wrapper">
            <div className="logo-section">
              <img 
                src="/assets/images/logo.png" 
                alt="Alberto Clocks Logo" 
                className="logo-image"
              />
              <Typography variant="h6" className="logo-text">
                Alberto Clocks
              </Typography>
              <Box className="visitor-counter">
                <FiUser className="profile-icon" />
                <Typography variant="body2" component="sup" className="counter-number">
                  {formatVisitorCount(visitorCount)}
                </Typography>
              </Box>
            </div>

            <div className="nav-items">
              <a 
                href="#about-section" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('about-section');
                }}
              >
                About
              </a>
              
              {Object.entries(menuItems).map(([menu, items]) => (
                <div key={menu} className="menu-item">
                  <a
                    href={`#${items[0].section}`}
                    className="nav-link dropdown-button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(e, menu);
                    }}
                  >
                    {menu}
                    <FiChevronDown className="dropdown-icon" />
                  </a>
                  <Menu
                    anchorEl={anchorEl}
                    open={currentMenu === menu && Boolean(anchorEl)}
                    onClose={handleClose}
                    className="nav-menu"
                  >
                    {items.map((item) => (
                      <MenuItem 
                        key={item.name} 
                        onClick={() => scrollToSection(item.section)}
                        className="nav-item"
                      >
                        {item.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ))}
              
              <a 
                href="#technology-section" 
                className="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('technology-section');
                }}
              >
                Technology
              </a>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navigation;