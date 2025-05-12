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
import './i18n';
import { useState } from 'react';
// Import the ChatbotBox component
import ChatbotBox from '@/page-sections/chatBot/page-view';

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

            {/* Use the ChatbotBox component here */}
            <ChatbotBox isOpen={isOpen} toggleChat={toggleChat} theme={theme} />
          </RTL>
        </AuthProvider>
      </ThemeProvider>
    </LocalizationProvider>
  );
}
