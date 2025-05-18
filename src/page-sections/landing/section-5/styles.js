import styled from '@mui/material/styles/styled';

export const StyledRoot = styled('div')(({ theme }) => ({
  paddingBlock: '5rem',
  [theme.breakpoints.down('sm')]: {
    paddingBlock: '3rem',
  },
  '& .title-wrapper': {
    marginBottom: '1rem',
    '& p': {
      fontSize: 18,
      textAlign: 'center',
      color: theme.palette.text.secondary,
      [theme.breakpoints.down('sm')]: {
        fontSize: 16,
      },
    },
  },
}));

export const TeamItem = styled('div')(({ theme }) => ({
  padding: '2rem 1rem',
  '& .member-card': {
    padding: '2rem',
    boxShadow: theme.shadows[3],
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 320, // consistent height
  },
  '& .member-img-wrapper': {
    width: '100%',
    height: 150, // set consistent height
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    '& img': {
      height: '100%',
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      display: 'block',
    },
  },
  '& .member-info': {
    textAlign: 'center',
  },
}));
