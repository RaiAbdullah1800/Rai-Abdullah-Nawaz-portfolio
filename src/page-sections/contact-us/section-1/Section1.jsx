import Grid from '@mui/material/Grid2';
import { Paragraph } from '@/components/typography';
import FancyText from '@/components/fancy-text';
import { StyledRoot } from './styles';

// MUI Icons
import ForumRounded from '@mui/icons-material/ForumRounded';
import MarkEmailUnreadRounded from '@mui/icons-material/MarkEmailUnreadRounded';
import HandshakeRounded from '@mui/icons-material/HandshakeRounded';

export default function Section1() {
  return (
    <StyledRoot>
      <img src="/static/map.png" alt="Illustration" className="map" />

      <div className="content">
        <h1 className="title">
          Got <FancyText>Questions</FancyText>? Let’s Talk.
        </h1>

        <Paragraph ml={2} mb={8} fontSize={18}>
          I'm here to help and would love to hear from you. Choose how you'd like to get in touch:
        </Paragraph>

        <Grid container spacing={5}>
          <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
            <div>
              <ForumRounded sx={{ fontSize: 45, color: '#6950E8', mb: 1 }} />
              <h3 style={{ marginLeft: '10px' }}>Schedule a Call</h3>
              <Paragraph ml={1}>
                Want to dive deep into your ideas? Schedule a call, and we can discuss everything in detail, from the initial concept to the final execution.
              </Paragraph>
            </div>
          </Grid>

          <Grid size={{ lg: 4, md: 4, sm: 6, xs: 12 }}>
            <div>
              <MarkEmailUnreadRounded sx={{ fontSize: 45, color: '#A02696', mb: 1 }} />
              <h3 style={{ marginLeft: '10px' }}>Send a Message</h3>
              <Paragraph ml={1}>
                Prefer to share a quick idea or ask a question? Drop me a message, and I'll reply as soon as possible. No commitment needed!
              </Paragraph>
            </div>
          </Grid>
        </Grid>
      </div>
    </StyledRoot>
  );
}
