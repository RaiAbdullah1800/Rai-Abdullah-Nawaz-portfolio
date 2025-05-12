import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// CUSTOM COMPONENTS
import { H2, H6, Paragraph } from '@/components/typography';

// // CUSTOMIZED DATA
// const LIST_1 = [
//   {
//     id: 1,
//     image: '/static/landing/icons/jsxicon.png',
//     title: 'JSX & Components',
//     description: 'Clean, modular components using JSX, built for reusability and maintainability across the codebase.'
//   },
//   {
//     id: 2,
//     image: '/static/landing/icons/statemanagement.png',
//     title: 'State & Props Management',
//     description: 'Advanced state management using props, Context API, and Zustand for scalable and complex apps.'
//   },
//   {
//     id: 3,
//     image: '/static/landing/icons/hooks.png',
//     title: 'Hooks & Lifecycle',
//     description: 'Skilled in useState, useEffect, useMemo, and custom hooks to optimize behavior and performance.'
//   }
// ];

const LIST_1 = [
  {
    id: 1,
    image: '/static/landing/icons/jsxicon.png',
    title: 'JSX & Components',
    description: 'Clean, modular components using JSX, built for reusability and maintainability across the codebase.'
  },
  {
    id: 2,
    image: '/static/landing/icons/statemanagement.png',
    title: 'State & Props Management',
    description: 'Advanced state management using props, Context API, and Zustand for scalable and complex apps.'
  },
  {
    id: 3,
    image: '/static/landing/icons/hooks.png',
    title: 'Hooks & Lifecycle',
    description: 'Skilled in useState, useEffect, useMemo, and custom hooks to optimize behavior and performance.'
  },
  {
    id: 4,
    image: '/static/landing/icons/uiux.png',
    title: 'Dynamic UIs',
    description: 'Responsive interfaces using event handling, conditional rendering, and intuitive UX logic.'
  },
  {
    id: 5,
    image: '/static/landing/icons/api.png',
    title: 'API & WebSockets',
    description: 'Proficient in REST API integration and real-time updates with WebSocket communication.'
  },
  {
    id: 6,
    image: '/static/landing/icons/Mui.png',
    title: 'Modern Styling',
    description: 'Styling with Tailwind, Bootstrap, and MUI/MUI X for fast, scalable, and accessible UIs.'
  }
];
const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/streamlit.png',
    title: 'Model Testing UI',
    description: 'Create interactive dashboards to visualize, test, and validate ML model outputs in real time.'
  },
  {
    id: 2,
    image: '/static/landing/icons/chatai.png',
    title: 'AI Chatbot GUIs',
    description: 'Build intuitive chat interfaces for LLM agents and AI-driven workflows using Streamlit.'
  },
  {
    id: 3,
    image: '/static/landing/icons/feedback.png',
    title: 'Live Feedback & Iteration',
    description: 'Enable rapid experimentation with dynamic user input, data updates, and Python backend logic.'
  },
  {
    id: 4,
    image: '/static/landing/icons/serverapi.png',
    title: 'Backend Integration',
    description: 'Connect Streamlit apps to APIs, databases, or FastAPI backends for full-stack functionality.'
  },
  {
    id: 5,
    image: '/static/landing/icons/fastdeployment.png',
    title: 'Lightweight Deployment',
    description: 'Deploy Streamlit apps quickly with minimal setup for demos, MVPs, or stakeholder feedback.'
  },
  {
    id: 6,
    image: '/static/landing/icons/widgets.png',
    title: 'Interactive Widgets for UX',
    description: 'Use Streamlit’s built-in components like sliders, inputs, and charts to create engaging UIs fast.'
  }
];


export default function Section2() {
  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 12, xs: 6 } }}>
      <Grid container spacing={2}>
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>Frontend Development</H2>
            <H2 fontSize={28}>(React.js Specialist) </H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              I build fully responsive, scalable React applications using modern tools, best practices, and clean,
              component-driven code.
            </Paragraph>
            <H2 fontSize={28}>(Rapid Prototyping with Streamlit) </H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
               I build fast, production-ready chatbot apps using Streamlit for rapid development and deployment.
            </Paragraph>
          </Box>
        </Grid>

        <Grid container spacing={4} size={{ lg: 7, xs: 12 }}>
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
      <Box component="img" src={props.image} alt={props.title} py={6} maxWidth={70} />
      <H6 fontSize={18}>{props.title}</H6>
      <Paragraph fontSize={16} color="grey.500" mt={2}>
        {props.description}
      </Paragraph>
    </Card>
  );
}
