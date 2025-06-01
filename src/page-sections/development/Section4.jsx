import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { H2, H6, Paragraph } from '@/components/typography';

// MACHINE LEARNING & AI FEATURE LISTS
// MACHINE LEARNING & AI FEATURE LISTS (Updated)
const LIST_1 = [
  {
    id: 1,
    image: '/static/landing/icons/nlu.svg',
    title: 'Natural Language Understanding (NLU)',
    description:
      'Develop systems that intelligently process human language using NLP techniques like sentiment analysis, entity recognition, and summarization.'
  },
  {
    id: 2,
    image: '/static/landing/icons/integration.svg',
    title: 'AI Integration in Web Apps',
    description:
      'Embed AI models directly into React or FastAPI-based web apps to enable smart user flows, recommendations, and automation.'
  },
  {
    id: 3,
    image: '/static/landing/icons/modeldev.svg',
    title: 'Custom AI Model Development',
    description:
      'Design and train AI models from scratch using supervised, unsupervised, and reinforcement learning to solve forecasting and optimization challenges.'
  }
];

const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/mlops.svg',
    title: 'MLOps & Monitoring',
    description:
      'Deploy ML pipelines with CI/CD, monitor production models, and track performance over time with tools like GitHub Actions and Prometheus.'
  },
  {
    id: 2,
    image: '/static/landing/icons/data.svg',
    title: 'Data Engineering & Feature Stores',
    description:
      'Build robust data pipelines and manage feature stores for consistent and reliable model inputs using tools like Feast or DVC.'
  },
  {
    id: 3,
    image: '/static/landing/icons/scraper.svg', // update icon path as needed
    title: 'Data Scraping & Automation',
    description:
      'Scrape and structure web data for training ML models. Automate data collection using tools like BeautifulSoup, Selenium, or Playwright.'
  }
];


export default function Section4() {
  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 12, xs: 6 } }}>
      <Grid container spacing={2}>
        {/* LEFT SIDE: Heading and Description */}
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>🤖 Machine Learning & AI Systems</H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              I design and deploy end‑to‑end ML and AI solutions that power intelligent applications and automated agents.
              From preprocessing to monitoring, I ensure robust, scalable intelligence across RAG chatbots, agent frameworks,
              and production-grade models using MLOps best practices.
            </Paragraph>
          </Box>
        </Grid>

        {/* RIGHT SIDE: Feature Cards */}
        <Grid container spacing={4} size={{ lg: 7, xs: 12 }}>
          <Grid size={{ lg: 6, xs: 12 }}>
            <Stack mt={{ lg: 12, xs: 6 }} spacing={{ md: 4, xs: 3 }} direction={{ lg: 'column', md: 'row', xs: 'column' }}>
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
    </Container>
  );
}

// Card Component
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
      {/* <Box component="img" src={props.image} alt={props.title} py={6} /> */}
      <H6 fontSize={18}>{props.title}</H6>
      <Paragraph fontSize={16} color="grey.500" mt={2}>
        {props.description}
      </Paragraph>
    </Card>
  );
}
