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
            I'd love to talk about how I can help you.
        </Paragraph>

        <Grid container spacing={5}>
          <Grid size={{lg:4, md: 4, sm: 6, xs: 12 }}>
            <div>
              <ForumRounded sx={{ fontSize:  45, color: '#6950E8', mb: 1 }} />
              <h3 style={{marginLeft:'10px'}}>Let's Talk</h3>
              <Paragraph ml={1} >
                Have a project in mind? <br /> Reach out and let's bring <br /> it to life together.
              </Paragraph>
            </div>
          </Grid>

          <Grid size={{lg:4, md: 4, sm: 6, xs: 12 }}>
            <div>
              <MarkEmailUnreadRounded sx={{ fontSize:  45, color: '#A02696', mb: 1 }} />
              <h3 style={{marginLeft:'10px'}}>Drop a Message</h3>
              <Paragraph ml={1}>
                Whether it's a quick question <br /> or a detailed brief, I’d love to hear <br /> from you.
              </Paragraph>
            </div>
          </Grid>

          <Grid size={{lg:4, md: 4, sm: 6, xs: 12 }}>
            <div>
              <HandshakeRounded fontSize="large" color="#FA03AA"  sx={{ fontSize:  45, color: 'error.main', mb: 1 }} />
              <h3 style={{marginLeft:'10px'}}>Collaborate</h3>
              <Paragraph ml={1}>
                Looking to collaborate on a <br /> product, startup, or open-source <br /> work? Let’s connect.
              </Paragraph>
            </div>
          </Grid>
        </Grid>
      </div>
    </StyledRoot>
  );
}
