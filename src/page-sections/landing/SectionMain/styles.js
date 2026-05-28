import styled from '@mui/material/styles/styled'; // CUSTOM UTILS METHOD
import { Paragraph} from '@/components/typography';
import { isDark } from '@/utils/constants';
import {  keyframes } from '@mui/material/styles'; // CUSTOM COMPONENT
const float = keyframes`
  0% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-12px) rotate(1.5deg);
  }
  100% {
    transform: translateY(0px) rotate(0deg);
  }
`;

export const HeaderTop = styled('div')(({
  theme
}) => ({
  backgroundColor: '#9C916e',
  '.MuiContainer-root': {
    position: 'relative'
  },
  '.buy-btn': {
    backgroundColor: 'white',
    color: theme.palette.grey[900],
    ':hover': {
      backgroundColor: '#eee'
    }
  },
  '.preview-btn': {
    borderColor: 'white',
    color: 'white'
  },
  '.illustration': {
    right: 0,
    bottom: 0,
    position: 'absolute',
    animation: `${float} 5s ease-in-out infinite`,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));
export const TicketWrapper = styled('div')(({
  theme
}) => ({
  zIndex: 1,
  marginTop: '-5rem',
  textAlign: 'center',
  position: 'relative',
  borderRadius: '1rem',
  padding: '2.5rem 2rem',
  boxShadow: theme.shadows[2],
  backgroundColor: isDark(theme) ? theme.palette.grey[800] : 'white'
}));

const shine = keyframes`
0% {
  background-position: 0% 50%;
}
100% {
  background-position: 100% 50%;
}
`;

export const MainTitle = styled(Paragraph)(() => ({
  display:'inline',
  background: `linear-gradient(300deg, #6950E8 0%,#FB6186 25%, #6950E8 50%, #FB6186 75%,#6950E8 100%)`,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  textFillColor: 'transparent',
  backgroundSize: '150% auto',
  fontWeight: 'bold',
  animation: `${shine} 6s ease-in-out infinite alternate`
}));