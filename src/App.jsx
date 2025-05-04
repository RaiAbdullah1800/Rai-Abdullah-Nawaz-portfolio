import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // MUI
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFnsV3';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'; // AUTH CONTEXT FILE
import { AuthProvider } from '@/contexts/firebaseContext'; // RIGHT-TO-LEFT SUPPORT COMPONENT
import RTL from '@/components/rtl'; // ROUTES METHOD
import { routes } from './routes'; // MUI THEME CREATION METHOD
import { createCustomTheme } from './theme'; // SITE SETTINGS CUSTOM DEFINED HOOK
import useSettings from '@/hooks/useSettings'; // I18N FILE
import { Box, IconButton, Fade } from '@mui/material'
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Conversation from '@/page-sections/chatBot/Conversation';
import './i18n';

// Import DotLottieReact for chatbot animation
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function App() {
  const { settings } = useSettings();
  const theme = createCustomTheme(settings);
  const router = createBrowserRouter(routes());
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <RTL>
            <CssBaseline />
            <RouterProvider router={router} />

            {/* Chatbot Animation — visible on every page */}
            
            <Box
              onClick={toggleChat}
              style={{
                position: 'fixed',
                bottom: 10,
                right: 10,
                width: 76,
                height: 76,
                zIndex: 1000,
                cursor: 'pointer',
              }}
            >
              {/* Show Lottie when closed, nothing when open */}
              {isOpen ? null : (
                <DotLottieReact
                  src="https://lottie.host/3b4f0967-2211-45e5-bc76-0b21c06d5ef3/QumKJyCNMl.lottie"
                  loop
                  autoplay
                />
              )}
            </Box>

            <IconButton
              onClick={toggleChat}
              sx={{
                position: 'fixed',
                bottom: 20,
                right: 20,
                bgcolor: theme.palette.primary.main,
                color: 'white',
                width: 56,
                height: 56,
                borderRadius: '50%',
                boxShadow: 3,
                zIndex: 999,
                '&:hover': {
                  bgcolor: '#115293',
                },
              }}
            >
              {/* Show CloseIcon when open, nothing when closed */}
              {isOpen ? <CloseIcon /> : null}
            </IconButton>

            {/* Chatbot Box */}
            <Fade in={isOpen}>
              <Box
                sx={{
                  position: 'fixed',
                  bottom: 80,
                  right: 20,
                  width: {
                    xs: '70%',
                    sm: 300,
                    md: 350,
                    lg: 400,
                  },
                  height: {
                    xs: '60%',
                    sm: 350,
                    md: 400,
                    lg: 450,
                  },
                  
                  boxShadow: 3,
                  borderRadius: 2,
                  p: 2,
                  zIndex: 1000,
                  overflow: 'auto',
                }}
              >
                <Conversation/>
              </Box>
            </Fade>

          </RTL>
        </AuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
