// MUI
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled'; // CUSTOM COMPONENTS

import Navigation from './Navigation'; // STYLED COMPONENTS

const StyledRoot = styled('div')(() => ({
  backgroundColor: '#9C916e',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  '& .content-wrapper': {
    zIndex: 1,
    position: 'relative'
  }
}));
export default function HeaderEffect({
  children
}) {
  return (
    <>
  <Navigation />
  <StyledRoot>
    <Container maxWidth="lg">
      <div className="content-wrapper">{children}</div>
    </Container>
  </StyledRoot>  
    </>
  )
  
}