import { Fragment, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardHeaderRoot } from '@/layouts/layout-1/styles';
// MUI
import {
  Box,
  List,
  Button,
  Drawer,
  ListItem,
  IconButton,
  useMediaQuery,
  ListItemButton,
  
  Toolbar
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ICONS
import MenuIcon from '@mui/icons-material/Menu';
import ThemeIcon from '@/icons/ThemeIcon';
// CONTEXT
import { SettingsContext } from '@/contexts/settingsContext';

// COMPONENTS
import Link from '@/components/link';
import Scrollbar from '@/components/scrollbar';

// STYLED COMPONENTS
const StyledNav = styled('nav')(({ theme }) => ({
  display: 'flex',
  fontSize: 14,
  fontWeight: 500,
  listStyle: 'none',
  alignItems: 'center',
  gap: theme.spacing(5)
}));

const StyledNavItem = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isDark' && prop !== 'isActive'
})(({ theme, isDark, isActive }) => ({
  color: theme.palette.text.primary,
  transition: 'color 300ms',
  ':hover': {
    color: theme.palette.primary.main
  },
  ...(isDark && {
    color: theme.palette.text.primary
  }),
  ...(isActive && {
    color: theme.palette.primary.main
  })
}));

export default function Navigation() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const isMedium = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const { settings, saveSettings } = useContext(SettingsContext);

  const isActive = (path) => pathname === path;
  const isComponentsRoute = pathname.startsWith('/components');

  useEffect(() => {
    if (isMedium) setOpen(false);
  }, [isMedium]);

  const handleChangeTheme = () => {
    saveSettings({
      ...settings,
      theme: settings.theme === 'light' ? 'dark' : 'light'
    });
  };

  const LARGE_DEVICE_CONTENT = (
    <StyledNav>
      <StyledNavItem href="/" isActive={isActive('/')} isDark={isComponentsRoute}>
        Home
      </StyledNavItem>

      <StyledNavItem href="/development" isActive={isActive('/development')} isDark={isComponentsRoute}>
        Development
      </StyledNavItem>

      {/* <MegaMenu isDark={isComponentsRoute} /> */}
      {/* <StyledNavItem href="/components" isDark={isComponentsRoute} isActive={isActive('/components')}>
        Components
      </StyledNavItem> */}


      <StyledNavItem href="/publication" isDark={isComponentsRoute} isActive={isActive('/publication')}>
        Research work
      </StyledNavItem>

      <Button href="/contact-us">Contact me</Button>
    </StyledNav>
  );

  const SMALL_DEVICE_CONTENT = (
    <Fragment>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Scrollbar>
          <List disablePadding sx={{ minWidth: 260, height: '100%' }}>
            <ListItem sx={{ mb: 1 }}>
            <img
              src={settings.theme === 'light' ? '/static/logo/log-white-png.png' : '/static/logo/logo-png.png'}
              alt="logo"
              width={35}
              height={35}
            />
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/">
                Home
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/development">
                Development
              </ListItemButton>
            </ListItem>

            {/* <ListItem disablePadding sx={{ flexDirection: 'column', alignItems: 'start' }}>
              <ListItemButton
                onClick={() => setCollapsed(!collapsed)}
                sx={{ width: '100%', justifyContent: 'space-between' }}
              >
                Pages{' '}
                <ChevronDown
                  sx={{
                    rotate: collapsed ? '180deg' : 0,
                    transition: 'rotate 300ms'
                  }}
                />
              </ListItemButton>

              <Collapse in={collapsed}>
                <Box px={2} py={1.5}>
                  {PAGES_MENUS.map(({ child, id, title }) => (
                    <Box key={id} pl={1} py={id === 2 ? 3 : 0}>
                      <MegaMenuList title={title} child={child} />
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </ListItem> */}
{/* 
            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/components">
                Components
              </ListItemButton>
            </ListItem> */}

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/publication">
                Research work
              </ListItemButton>
            </ListItem>

            

            <ListItem sx={{ mt: 1 }}>
              <Button fullWidth href="/contact-us">
              Contact me 
              </Button>
            </ListItem>
          </List>
        </Scrollbar>
      </Drawer>

      <IconButton color="primary" onClick={() => setOpen(true)} sx={{ flexShrink: 0 }}>
        <MenuIcon />
      </IconButton>
    </Fragment>
  );

  return (
    <DashboardHeaderRoot position="sticky"  >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center" gap={2}>
          <Link href="/">
          <img
            src={settings.theme === 'light' ? '/static/logo/log-white-png.png' : '/static/logo/logo-png.png'}
            alt="logo"
            width={35}
            // height={35}
            style={{
              transition: 'transform 0.3s ease, z-index 0.3s',
              position: 'relative',
              zIndex: 1,
              borderRadius:13
            }}
            onMouseEnter={(e) => {
              if (window.innerWidth >= 960) { // 960px is MUI's "md" breakpoint
                e.currentTarget.style.transform = 'scale(1.85)';
                e.currentTarget.style.zIndex = '10';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth >= 960) {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.zIndex = '1';
              }
            }}
          />

          </Link>
          <IconButton onClick={handleChangeTheme}>
            <ThemeIcon />
          </IconButton>
          
        </Box>

        <Box display="flex" alignItems="center" gap={2}>
        {isMedium ? LARGE_DEVICE_CONTENT: SMALL_DEVICE_CONTENT}
        </Box>
      </Toolbar>
    </DashboardHeaderRoot>
  );
}
