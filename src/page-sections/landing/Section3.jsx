import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS

import { H2, H6, Paragraph } from '@/components/typography';

// CUSTOM DATA
const LIST_1 = [
  {
    id: 1,
    image: '/static/landing/icons/streamlit.png',
    title: 'Model Testing UI',
    description: 'Design Streamlit apps to test and visualize ML model outputs interactively.'
  },
  {
    id: 2,
    image: '/static/landing/icons/chatai.png',
    title: 'Chat Interface for AI Agents',
    description: 'Rapidly create GUI-based AI assistants to showcase LLM workflows or backend integrations.'
  },
  {
    id: 3,
    image: '/static/landing/icons/feedback.png',
    title: 'Real-time Feedback Loop',
    description: 'Leverage Python logic to make quick iterations with real-time data visualizations and user input.'
  },
  {
    id: 4,
    image: '/static/landing/icons/fastdeployment.png',
    title: 'Lightweight Deployment',
    description: 'Deploy Streamlit apps with minimal overhead for demos or stakeholder feedback.'
  },
  {
    id: 5,
    image: '/static/landing/icons/rapidprototype.png',
    title: 'Rapid Prototyping',
    description: 'Quickly test ML ideas with Streamlit’s intuitive layout system and interactive widgets.'
  },
  {
    id: 6,
    image: '/static/landing/icons/chatbot.svg',
    title: 'Chatbot Demo',
    description: 'Use Streamlit to rapidly prototype and showcase LLM-powered chatbot workflows in an interactive UI.'
  }
];

const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/fastdeployment.png',
    title: 'Lightweight Deployment',
    description: 'Deploy Streamlit apps with minimal overhead for demos or stakeholder feedback.'
  },
  {
    id: 2,
    image: '/static/landing/icons/rapidprototype.png',
    title: 'Rapid Prototyping',
    description: 'Quickly test ML ideas with Streamlit’s intuitive layout system and interactive widgets.'
  },
  {
    id: 3,
    image: '/static/landing/icons/chatbot.svg',
    title: 'Chatbot Demo',
    description: 'Use Streamlit to rapidly prototype and showcase LLM-powered chatbot workflows in an interactive UI.'
  }

];

export default function Section3() {
  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 12, xs: 6 } }}>
      <Grid container spacing={2}>
        {/* LEFT SIDE: Feature Cards */}
        <Grid size={{ lg: 7, xs: 12 }}>
          <Grid container spacing={4}>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Stack
                mt={{ lg: 12, xs: 6 }}
                spacing={{ md: 4, xs: 3 }}
                direction={{ lg: 'column', md: 'row', xs: 'column' }}
              >
                {LIST_1.map((item) => (
                  <FeatureCard {...item} key={item.id} />
                ))}
              </Stack>
            </Grid>
            <Grid size={{ lg: 6, xs: 12 }}>
              <Stack spacing={{ md: 4, xs: 3 }} direction={{ lg: 'column', md: 'row', xs: 'column' }}>
                {LIST_2.map((item) => (
                  <FeatureCard {...item} key={item.id} />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Grid>

        {/* RIGHT SIDE: Heading & Description */}
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>⚡ Rapid Prototyping with Streamlit</H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              I leverage Streamlit to quickly test and deploy ML models or build AI-driven communication GUIs. It's my
              go-to tool for internal tooling, quick demos, or agent-based testing environments with intuitive frontend
              layouts.
            </Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

// Feature Card Component
function FeatureCard(props) {
  return (
    <Card
      sx={{
        textAlign: 'center',
        padding: {
          xl: 6,
          lg: 5,
          md: 4,
          xs: 6
        }
      }}
    >
      <Box component="img" src={props.image} alt={props.title} py={6} maxWidth={70} />
      <H6 fontSize={18}>{props.title}</H6>
      <Paragraph fontSize={16} color="grey.500" mt={2}>
        {props.description}
      </Paragraph>
    </Card>
  );
}
