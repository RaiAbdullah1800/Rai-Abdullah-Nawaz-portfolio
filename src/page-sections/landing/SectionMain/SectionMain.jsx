import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { HeaderTop, TicketWrapper } from './styles';
export default function SectionMain() {
  return <footer>
      <HeaderTop>
        <Container maxWidth="xl">
          <Box pt={{
          sm: 12,
          xs: 8
        }} pb={{
          sm: 24,
          xs: 20
        }}>
            <H6 mb={4} color="white" fontWeight={700} lineHeight={1.4} fontSize={{
            sm: 36,
            xs: 27
          }}>
              Hey there, I’m Abdullah Nawaz <br/>
              Full-Stack Dev × ML Engineer.
            </H6>

            <Paragraph color="white" fontSize={{ sm: 20, xs: 16 }} maxWidth="600px">
            I specialize in building AI-powered, full-stack web applications. If that’s what you need — let’s talk.
            </Paragraph>
          </Box>

          <img alt="footer" src="/static/landing/illustration.svg" className="illustration" />
        </Container>
      </HeaderTop>

      <Container>
        <TicketWrapper>
          <Paragraph fontSize={{
          sm: 24,
          xs: 18
        }} fontWeight={600} mb={3}>
          Have questions about me or how I can help your project?
          </Paragraph>

          <FlexBox justifyContent="center" alignItems="center" gap={2}>
            <Button LinkComponent="a" href="https://support.ui-lib.com/" target="_blank">
              Submit Ticket
            </Button>

            <Button
                LinkComponent="a"
                variant="outlined"
                href="mailto:nawazabdullah18@gmail.com?subject=Portfolio Related Query"
              >
                Schedule a Meeting
              </Button>
          </FlexBox>
        </TicketWrapper>
      </Container>

      
    </footer>;
}