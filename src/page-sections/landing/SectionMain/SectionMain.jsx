import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import FlexBox from '@/components/flexbox/FlexBox';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENTS

import { HeaderTop, MainTitle, TicketWrapper } from './styles';
import Link from '@/components/link/Link';
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
              Hey there, I’m {" "}  
              <MainTitle fontSize={{sm:36, sx:27}} >
                Abdullah Nawaz
              </MainTitle> 
              <br />
                ML Engineerat
              <Box
                component="sup"
                fontSize={20}
              >
                {' '}
                <Box
                component='a'
                href="https://smartzoneleaders.com/"
                target="_blank"
                sx={{
                  textDecoration: 'underline',
                }}
                
                >
                  @ SZL
                </Box>
                
              </Box>{" "}
              × Full-Stack Dev.
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
            <Button  LinkComponent={Link}
              href="/contact-us#schedule-meeting"
              >
              Schedule a Meeting
            </Button>

            <Button
              LinkComponent={Link}
              href="/contact-us#drop-message"
              variant="outlined"
            >
              Drop a Message
            </Button>

          </FlexBox>
        </TicketWrapper>
      </Container>

      
    </footer>;
}