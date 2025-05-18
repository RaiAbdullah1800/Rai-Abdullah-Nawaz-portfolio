import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import styled from '@mui/material/styles/styled';
import { Paragraph } from '@/components/typography';
import { isDark } from '@/utils/constants';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter'; // Add or remove icons as needed
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'
const StyledRoot = styled('div')(({ theme }) => ({
  paddingTop: '2rem',
  textAlign: 'center',
  ...(isDark(theme) && {
    backgroundColor: theme.palette.grey[900], // Optional for dark mode
    color: theme.palette.grey[300],
  }),
  '& .divider': {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  gap: '1rem',
  marginBottom: '1rem',
  a: {
    color: theme.palette.text.secondary,
    transition: 'color 0.3s',
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
}));

export default function Footer() {
  return (
    <StyledRoot>

      {/* Social Media Links */}
      <SocialLinks>
        <a
          href="https://github.com/RaiAbdullah1800"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon sx={{fontSize: 45}} />
        </a>
        <a
          href="https://pk.linkedin.com/in/rai-abdullah-nawaz-552329203"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon sx={{fontSize: 45}} />
        </a>
        <a
          href="https://stackoverflow.com/users/16928979/abdullah-nawaz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stack Overflow"
        >
          <QuestionAnswerIcon sx={{ fontSize: 45 }} />
        </a>
      </SocialLinks>

      <Divider className="divider" />

      {/* Copyright */}
      <Paragraph fontSize={16} textAlign="center" py={4}>
        Copyright ©{' '}
        <Box
          component="a"
          href="mailto:nawazabdullah18@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rai Abdullah Nawaz
        </Box>
        . All rights reserved.
      </Paragraph>
    </StyledRoot>
  );
}
