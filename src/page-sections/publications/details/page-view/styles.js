import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled';
export const Space = styled('div')(({
  theme
}) => ({
  [theme.breakpoints.down('sm')]: {
    height: 170
  },
  [theme.breakpoints.down(425)]: {
    height: 130
  }
}));
export const StyledContainer = styled(Container)({
  zIndex: 1,
  marginTop: '-6rem',
  position: 'relative',
  paddingBottom: '5rem'
});

export const ImageWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'right',  // horizontal center
  alignItems: 'right',      // vertical center
  width: '100%',
  height: 'auto',
  // paddingTop: '2rem',        // optional: space above the image
  // paddingBottom: '1rem',     // optional: space below the image

  '& img': {
    maxWidth: '100%',
    height: 'auto',
    objectFit: 'contain',
  },
}));
