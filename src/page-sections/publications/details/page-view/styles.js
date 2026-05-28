import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled';

export const StyledRoot = styled('div')(({ theme }) => ({
  paddingTop: '5rem',
  paddingBottom: '5rem',
  '& .title': {
    fontSize: 48,
    fontWeight: 600,
    lineHeight: 1.2,
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: 36
    },
    [theme.breakpoints.down(425)]: {
      fontSize: 32
    }
  },
  '& .description': {
    fontSize: 18,
    height: '100%',
    display: 'flex',
    alignItems: 'end',
    color: theme.palette.common.white,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  '& .fancy-text': {
    fontWeight: 500,
    fontStyle: 'italic',
    color: theme.palette.primary.main
  }
}));

export const StyledContainer = styled(Container)({
  zIndex: 1,
  marginTop: '2rem',
  position: 'relative',
  paddingBottom: '5rem'
});
