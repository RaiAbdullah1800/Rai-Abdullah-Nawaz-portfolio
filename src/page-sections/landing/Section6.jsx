import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { H2, H6, Paragraph } from '@/components/typography';

// MACHINE LEARNING & AI FEATURE LISTS
const LIST_1 = [
  {
    id: 1,
    image: '/static/landing/icons/rag.svg',
    title: 'RAG-Based Chatbots',
    description: 'Architect retrieval-augmented generation bots that pull from knowledge bases to generate accurate responses.'
  },
  {
    id: 2,
    image: '/static/landing/icons/agent.svg',
    title: 'AI Agent Design & Orchestration',
    description: 'Build multi-agent frameworks with LangChain or custom orchestration pipelines for task-based automation.'
  },
  {
    id: 3,
    image: '/static/landing/icons/training.svg',
    title: 'Model Training & Deployment',
    description: 'Train NLP/CV models using TensorFlow or PyTorch, deploy via Docker, Kubernetes, or serverless platforms.'
  }
];

const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/mlops.svg',
    title: 'MLOps & Monitoring',
    description: 'Automate ML CI/CD, detect data drift, and monitor production models using GitHub Actions, Jenkins, or cloud tools.'
  },
  {
    id: 2,
    image: '/static/landing/icons/etl.svg',
    title: 'Data Engineering & Feature Store',
    description: 'Build ETL pipelines, validate data, and manage feature stores like Feast for model input consistency.'
  },
  {
    id: 3,
    image: '/static/landing/icons/ai.svg',
    title: 'Scalable AI Infrastructure',
    description: 'Design intelligent systems that learn, adapt, and scale reliably under real-world workloads.'
  }
];

export default function Section6() {
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
