import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

// CUSTOM COMPONENTS
import { H2, H6, Paragraph } from '@/components/typography';



const LIST_1 = [
  {
    id: 1,
    image: 'public/static/landing/icons/react.png',
    title: 'React.js',
    description: 'Build component-driven, interactive UIs with React.js, using hooks, JSX, and modern state management libraries.'
  },
  {
    id: 2,
    image: '/static/landing/icons/js.png',
    title: 'Express.js',
    description: 'Create robust RESTful APIs using Express.js with routing, middleware, JWT authentication, and error handling.'
  },
  {
    id: 3,
    image: '/static/landing/icons/mongodb.png',
    title: 'MongoDB',
    description: 'Work with MongoDB for flexible NoSQL storage, schema design, aggregation, and performance optimization.'
  }
];
const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/streamlit.png',
    title: 'Streamlit',
    description: 'Build data-driven, interactive Python dashboards and prototypes for ML models using Streamlit.'
  },
  {
    id: 2,
    image: '/static/landing/icons/fastapi.png',
    title: 'FastAPI',
    description: 'Develop fast, asynchronous backend APIs with Python using FastAPI and Pydantic for validation.'
  },
  {
    id: 3,
    image: '/static/landing/icons/firebase.png',
    title: 'Firebase',
    description: 'Leverage Firebase for real-time databases, authentication, cloud functions, and scalable hosting.'
  }
];


export default function Section1() {
  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 12, xs: 6 } }}>
      <Grid container spacing={2}>
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36} >Full stack Development</H2>
            
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              (MERN Stack Specialist – 2 years of industrial experience)<br/>(FastAPI Developer – 7 months of experience) <br/><br/> I build fully responsive, scalable MERN STACK applications using modern tools, best practices, and clean,
              component-driven code.
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
  <img src={props.image} alt={props.title} width='70px' height='auto' />
      <H6 fontSize={18}>{props.title}</H6>
      <Paragraph fontSize={16} color="grey.500" mt={2}>
        {props.description}
      </Paragraph>
    </Card>
  );
}
