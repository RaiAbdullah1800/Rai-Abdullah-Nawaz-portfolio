import styled from '@mui/material/styles/styled';
import { isDark } from '@/utils/constants'; // STYLED COMPONENT

export const StyledRoot = styled('div')(({ theme }) => ({
  paddingBlock: '5rem',
  backgroundColor: theme.palette.grey[isDark(theme) ? 800 : 50],

  // Title section styling
  '& .title-wrapper': {
    marginBottom: '2rem',
    textAlign: 'center',
    '& h1': {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
      },
    },
    '& .fancy-text': {
      color: theme.palette.primary.main, // Assuming you're using the theme's primary color for accents
      fontStyle: 'italic',
    },
  },

  // Iframe container styling
  '& .iframe-container': {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
    backgroundColor: 'white',
    borderRadius: theme.spacing(2),
    boxShadow: theme.shadows[3],
  },

  // Adjust iframe size for responsiveness
  '& iframe': {
    width: '100%',
    height: '500px',
    border: 'none',
    borderRadius: theme.spacing(1),
  },

  // Responsive adjustments
  [theme.breakpoints.down('sm')]: {
    marginTop: '3rem',
    paddingBlock: '3rem',
  },
}));
