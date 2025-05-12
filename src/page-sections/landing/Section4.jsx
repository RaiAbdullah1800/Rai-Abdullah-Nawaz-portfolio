import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { H2, H6, Paragraph } from '@/components/typography';

// BACKEND FEATURE LISTS
const LIST_1 = [
  {
    id: 1,
    image: '/static/landing/icons/express.svg',
    title: 'Express.js Development',
    description: 'Proficient in building RESTful APIs with routing, middleware, JWTs, Mongoose ODM, and express-validator.'
  },
  {
    id: 2,
    image: '/static/landing/icons/fastapi.svg',
    title: 'FastAPI for Scalable APIs or for Model Integrations',
    description: 'Build high-performance APIs using FastAPI, Pydantic for data validation, and async endpoints for concurrency.'
  },
  {
    id: 3,
    image: '/static/landing/icons/db.svg',
    title: 'Database Integration',
    description: 'Integrate and manage databases like MongoDB and PostgreSQL, using ORMs and connection pooling for performance.'
  }
];

const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/auth.svg',
    title: 'Authentication & Authorization',
    description: 'Secure login flows with JWT, OAuth2, session-based authentication, and role-based access control.'
  },
  {
    id: 2,
    image: '/static/landing/icons/socket.svg',
    title: 'WebSocket Communication',
    description: 'Implement real-time features such as live chats, dashboards, and notifications using Socket.IO or FastAPI WebSockets.'
  },
  {
    id: 3,
    image: '/static/landing/icons/error.svg',
    title: 'Error Handling & Scalability',
    description: 'Centralized error handling, logging, rate limiting, and structured architecture for scalable backend systems.'
  }
];

export default function Section4() {
  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 12, xs: 6 } }}>
      <Grid container spacing={2}>
        
        

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

        {/* LEFT SIDE: Heading and Description */}
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>🔧 Backend Development (Express.js & FastAPI)</H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              I build secure, scalable, and efficient backend services using Express.js and FastAPI. From RESTful API design and robust database management to real-time communication and strong authentication systems, I ensure server-side reliability and performance across every layer of the application. I also implement chatbot logic and workflows in FastAPI to support intelligent, AI-driven user interactions.
            </Paragraph>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

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
