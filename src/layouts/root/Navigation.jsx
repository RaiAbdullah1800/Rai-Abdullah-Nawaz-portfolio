import { Fragment, useEffect, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DashboardHeaderRoot } from '@/layouts/layout-1/styles';
// MUI
import {
  Box,
  List,
  Button,
  Drawer,
  Collapse,
  ListItem,
  IconButton,
  useMediaQuery,
  ListItemButton,
  AppBar,
  Toolbar
} from '@mui/material';
import { styled } from '@mui/material/styles';

// ICONS
import MenuIcon from '@mui/icons-material/Menu';
import ThemeIcon from '@/icons/ThemeIcon';
import ChevronDown from '@/icons/ChevronDown';

// CONTEXT
import { SettingsContext } from '@/contexts/settingsContext';

// COMPONENTS
import Link from '@/components/link';
import Scrollbar from '@/components/scrollbar';
import MegaMenu from './menu/MegaMenu';
import MegaMenuList from './menu/MegaMenuList';

// NAVIGATION DATA
import { PAGES_MENUS } from './menu/navigation';

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

      <MegaMenu isDark={isComponentsRoute} />

      <StyledNavItem href="/components" isDark={isComponentsRoute} isActive={isActive('/components')}>
        Components
      </StyledNavItem>

      <Button href="/maintenance">Submit Ticket</Button>
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

            <ListItem disablePadding sx={{ flexDirection: 'column', alignItems: 'start' }}>
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
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton LinkComponent={Link} href="/components">
                Components
              </ListItemButton>
            </ListItem>

            

            <ListItem sx={{ mt: 1 }}>
              <Button fullWidth href="/maintenance">
              Submit Ticket 
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






// import { Fragment, useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom'; // MUI

// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import Collapse from '@mui/material/Collapse';
// import ListItem from '@mui/material/ListItem';
// import IconButton from '@mui/material/IconButton';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import ListItemButton from '@mui/material/ListItemButton';
// import styled from '@mui/material/styles/styled'; // MUI ICON COMPONENT

// import Menu from '@mui/icons-material/Menu'; // CUSTOM COMPONENTS

// import Link from '@/components/link';
// import Scrollbar from '@/components/scrollbar';
// import MegaMenu from './menu/MegaMenu';
// import MegaMenuList from './menu/MegaMenuList'; // CUSTOM ICON COMPONENT

// import ChevronDown from '@/icons/ChevronDown'; // NAVIGATION LIST

// import { PAGES_MENUS } from './menu/navigation'; // STYLED COMPONENT

// const StyledRoot = styled('header')(({
//   theme
// }) => ({
//   paddingBlock: theme.spacing(2),
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'space-between'
// }));
// const StyledNav = styled('nav')(({
//   theme
// }) => ({
//   display: 'flex',
//   fontSize: 14,
//   fontWeight: 500,
//   listStyle: 'none',
//   alignItems: 'center',
//   gap: theme.spacing(5)
// }));
// const StyledNavItem = styled(Link, {
//   shouldForwardProp: prop => prop !== 'isDark' && prop !== 'isActive'
// })(({
//   theme,
//   isDark,
//   isActive
// }) => ({
//   color: 'white',
//   transition: 'color 300ms',
//   ':hover': {
//     color: theme.palette.primary.main
//   },
//   ...(isDark && {
//     color: theme.palette.text.primary
//   }),
//   ...(isActive && {
//     color: theme.palette.primary.main
//   })
// }));
// export default function Navigation() {
//   const {
//     pathname
//   } = useLocation();
//   const [open, setOpen] = useState(false);
//   const [collapsed, setCollapsed] = useState(false);
//   const isMedium = useMediaQuery(theme => theme.breakpoints.up('md'));

//   const isActive = path => pathname === path;

//   const isComponentsRoute = pathname.startsWith('/components');
//   useEffect(() => {
//     if (isMedium) setOpen(false);
//   }, [isMedium]); // FOR LARGE SCREEN DEVICE

//   const LARGE_DEVICE_CONTENT = <StyledNav>
//       <StyledNavItem href="/" isActive={isActive('/')} isDark={isComponentsRoute}>
//         Home
//       </StyledNavItem>

//       {
//       /* PAGES MEGA MENU */
//     }
//       <MegaMenu isDark={isComponentsRoute} />

//       <StyledNavItem href="/components" isDark={isComponentsRoute} isActive={isActive('/components')}>
//         Components
//       </StyledNavItem>



//       <Button href="https://ui8.net/ui-lib/products/essence---ui-kit">Buy Now</Button>
//     </StyledNav>; // FOR SMALL AND MEDIUM SCREEN DEVICE

//   const SMALL_DEVICE_CONTENT = <Fragment>
//       <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
//         <Scrollbar>
//           <List disablePadding sx={{
//           minWidth: 260,
//           height: '100%'
//         }}>
//             <ListItem sx={{
//             mb: 1
//           }}>
//               <img src="/static/logo/logo-svg.svg" alt="logo" width={40} height={40} />
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton LinkComponent={Link} href="/">
//                 Home
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding sx={{
//             flexDirection: 'column',
//             alignItems: 'start'
//           }}>
//               <ListItemButton onClick={() => setCollapsed(!collapsed)} sx={{
//               width: '100%',
//               justifyContent: 'space-between'
//             }}>
//                 Pages{' '}
//                 <ChevronDown sx={{
//                 rotate: collapsed ? '180deg' : 0,
//                 transition: 'rotate 300ms'
//               }} />
//               </ListItemButton>

//               <Collapse in={collapsed}>
//                 <Box px={2} py={1.5}>
//                   {PAGES_MENUS.map(({
//                   child,
//                   id,
//                   title
//                 }) => <Box key={id} pl={1} py={id === 2 ? 3 : 0}>
//                       <MegaMenuList title={title} child={child} />
//                     </Box>)}
//                 </Box>
//               </Collapse>
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton LinkComponent={Link} href="/components">
//                 Components
//               </ListItemButton>
//             </ListItem>

//             <ListItem disablePadding>
//               <ListItemButton LinkComponent="a" href="http://essence-doc.vercel.app/">
//                 Documentation
//               </ListItemButton>
//             </ListItem>

//             <ListItem sx={{
//             mt: 1
//           }}>
//               <Button fullWidth href="https://ui8.net/ui-lib/products/essence---ui-kit">
//                 Buy Now
//               </Button>
//             </ListItem>
//           </List>
//         </Scrollbar>
//       </Drawer>

//       <IconButton color="primary" onClick={() => setOpen(true)} sx={{
//       flexShrink: 0
//     }}>
//         <Menu />
//       </IconButton>
//     </Fragment>;
//   return <StyledRoot>
//       {
//       /* ESSENCE LOGO */
//     }
//       <Link href="/">
//         <img src="/static/logo/logo-svg.svg" alt="logo" width={35} height={35} />
//       </Link>

//       {isMedium ? LARGE_DEVICE_CONTENT : SMALL_DEVICE_CONTENT}
//     </StyledRoot>;
// }



