import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import styled from '@mui/material/styles/styled';
import Typography from '@mui/material/Typography'; // switched to MUI’s Typography
import { isDark } from '@/utils/constants';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const StyledRoot = styled('div')(({ theme }) => ({
  paddingTop: '2rem',
  textAlign: 'center',
  ...(isDark(theme) && {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.grey[300],
  }),
  '& .divider': {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',      // center icons vertically in their container
  justifyContent: 'center',
  gap: '1rem',
  // kill marginBottom so it doesn’t push icons down
  // marginBottom: '1rem',    ← removed
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
      <Divider className="divider" />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        py={4}
      >
        {/* Using Typography (or you can keep Paragraph if it’s line‐height friendly) */}
        <Typography
          variant="body1"
          component="span"
          sx={{ fontSize: 20, mr: 2, display: 'flex', alignItems: 'center' }}
        >
          Copyright ©{' '}
          <Box
            component="a"
            href="mailto:nawazabdullah18@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              ml: 0.5,
              textDecoration: 'none',
              
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            Rai Abdullah Nawaz
          </Box>
          . All rights reserved. |
        </Typography>

        <SocialLinks>
          <a
            href="https://github.com/RaiAbdullah1800"
            target="_blank"
            rel="noopener noreferrer"
            
            aria-label="GitHub"
          >
            <GitHubIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="https://pk.linkedin.com/in/rai-abdullah-nawaz-552329203"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon sx={{ fontSize: 30 }} />
          </a>
          <a
            href="https://stackoverflow.com/users/16928979/abdullah-nawaz"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack Overflow"
          >
            <QuestionAnswerIcon sx={{ fontSize: 30 }} />
          </a>
        </SocialLinks>
      </Box>
    </StyledRoot>
  );
}
