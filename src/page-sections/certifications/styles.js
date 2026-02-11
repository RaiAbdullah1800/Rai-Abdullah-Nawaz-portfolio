import styled from '@mui/material/styles/styled';

export const StyledRoot = styled('div')(({
  theme
}) => ({
  paddingTop:'5rem',
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
    color: theme.palette.common.white
  },
  '& .fancy-text': {
    fontWeight: 500,
    fontStyle: 'italic'
  },
  [theme.breakpoints.down('md')]: {
    paddingBottom: '5rem'
  },
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '5rem',
    '& .description': {
      fontSize: 16
    }
  }
}));
