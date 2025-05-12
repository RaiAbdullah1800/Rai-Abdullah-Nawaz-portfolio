import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import { H2, H6, Paragraph } from '@/components/typography';

// DATABASE FEATURE LISTS
const LIST_1 = [
  {
    id: 1,
    image: '/static/landing/icons/mongodb.png',
    title: 'MongoDB Mastery',
    description: 'Skilled in schema design, indexing, and aggregation pipelines. Use Mongoose for modeling and validation.'
  },
  {
    id: 2,
    image: '/static/landing/icons/firebase.png',
    title: 'Firebase Integration',
    description: 'Experience with Firestore, Realtime Database, Firebase Auth, Cloud Functions, and Storage APIs.'
  },
  {
    id: 3,
    image: '/static/landing/icons/realtimedatasync.png',
    title: 'Realtime Data Sync',
    description: 'Build apps with live updates using Firebase listeners or MongoDB Change Streams for responsive UX.'
  }
];

const LIST_2 = [
  {
    id: 1,
    image: '/static/landing/icons/databasesecurity.png',
    title: 'Security Best Practices',
    description: 'Implement Firebase Security Rules and Express middleware for access control and secure queries.'
  },
  {
    id: 2,
    image: '/static/landing/icons/structureddatabase.png',
    title: 'Structured & Unstructured Data',
    description: 'Comfortable designing for both document-style storage and hierarchical data models.'
  },
  {
    id: 3,
    image: '/static/landing/icons/weboptimization.png',
    title: 'Optimized for Scale',
    description: 'Design queries and indexes for performance at scale across distributed, real-time systems.'
  }
];

export default function Section5() {
  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 12, xs: 6 } }}>
      <Grid container spacing={2}>
        {/* RIGHT SIDE: Heading & Description */}
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}> Database Expertise (MongoDB & Firebase)</H2>
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              I work seamlessly with both NoSQL databases to power real-time and scalable applications. From designing
              schemas and data access patterns in MongoDB to integrating Firebase services for user auth and cloud
              functions, I ensure fast, secure, and efficient data management.
            </Paragraph>
          </Box>
        </Grid>
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
