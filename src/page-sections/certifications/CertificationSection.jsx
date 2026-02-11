import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SectionTitle from '@/components/section-title';
import { StyledRoot } from './styles';

const certifications = [
  {
    title: "OpenCV for Python Developers",
    issuer: "LinkedIn Learning",
    date: "Feb 2026",
    credentialId: "63e124d39a1121384a44ce650f4c4a94fc66bd1d3ad3fc71a4364ce190c7009e",
    credentialUrl: "https://www.linkedin.com/learning/certificates/63e124d39a1121384a44ce650f4c4a94fc66bd1d3ad3fc71a4364ce190c7009e/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWlDUDQlPSc2SxdjJxj1zHw%3D%3D",
    skills: ["Computer Vision", "OpenCV"],
    image: "/static/certifications/openCvForPythonDev.png"
  },
  {
    title: "Skill Up with Python: Hands-On Data Science and Machine Learning Projects",
    issuer: "LinkedIn Learning",
    date: "Feb 2026",
    credentialId: "213e662e42c115a25aa315543a84f2d51f3d24cf10d460b994802d31d22ee2dc",
    credentialUrl: "https://www.linkedin.com/learning/certificates/213e662e42c115a25aa315543a84f2d51f3d24cf10d460b994802d31d22ee2dc/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BWlDUDQlPSc2SxdjJxj1zHw%3D%3D",
    skills: ["Artificial Intelligence (AI)", "Machine Learning" ,"Python (Programming Language)", "Data Science"],
    image: "/static/certifications/skillUpWithPython.png"
  },
  {
    title: "Computer Vision Fundamentals with Google Cloud",
    issuer: "Google Cloud",
    date: "Feb 2026",
    credentialId: "22082864",
    credentialUrl: "https://www.skills.google/public_profiles/ba3e48f6-c85f-465a-9bab-51c9fa0a7007/badges/22082864?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
    skills: ["Computer Vision", "Google Cloud"],
    image: "/static/certifications/Computer Vision Fundamentals with Google Cloud.png"
  }
];

const courses = [
  {
    title: "Advanced Machine Learning Engineering",
    provider: "Coursera",
    instructor: "Andrew Ng",
    duration: "12 weeks",
    completionDate: "2024",
    topics: ["Deep Learning", "Neural Networks", "TensorFlow", "Production ML"]
  },
  {
    title: "Full Stack Web Development Bootcamp",
    provider: "Udemy",
    instructor: "Angela Yu",
    duration: "8 weeks",
    completionDate: "2023",
    topics: ["React", "Node.js", "MongoDB", "Express"]
  },
  {
    title: "Google Machine Learning Crash Course",
    provider: "Google Developers",
    instructor: "Google AI Experts",
    duration: "Self-paced",
    completionDate: "2023",
    courseUrl: "https://developers.google.com/machine-learning/crash-course",
    topics: ["Machine Learning Fundamentals", "Neural Networks", "TensorFlow", "ML Engineering", "Data Preparation", "Model Evaluation"]
  },
  {
    title: "DevOps and CI/CD Pipeline",
    provider: "Pluralsight",
    instructor: "Multiple Instructors",
    duration: "6 weeks",
    completionDate: "2023",
    topics: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"]
  },
  {
    title: "Python for Data Science",
    provider: "edX",
    instructor: "MIT",
    duration: "10 weeks",
    completionDate: "2022",
    topics: ["Python", "Pandas", "NumPy", "Data Visualization"]
  },
  {
    title: "Chai aur JavaScript Backend | Hindi",
    provider: "YouTube",
    instructor: "Hitesh Choudhary",
    duration: "Self-paced",
    completionDate: "2022",
    courseUrl: "https://youtube.com/playlist?list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW&si=dZJs7xVkbB8ocekp",
    topics: ["Node.js", "Express.js", "MongoDB", "JWT Authentication", "File Upload", "Data Modeling", "Production Deployment"]
  },
  {
    title: "Chai aur React | with Projects",
    provider: "YouTube",
    instructor: "Hitesh Choudhary",
    duration: "Self-paced",
    completionDate: "2021",
    courseUrl: "https://youtube.com/playlist?list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige&si=hfNXmo_X3CSDwPC4",
    topics: ["React", "React Router", "Redux Toolkit", "Context API", "Appwrite", "Custom Hooks", "Production Deployment"]
  },
  {
    title: "Complete React v9",
    provider: "Frontend Masters",
    instructor: "Brian Holt",
    duration: "Self-paced",
    completionDate: "2021",
    courseUrl: "https://frontendmasters.com/courses/complete-react-v9/?utm_source=fm&utm_medium=homepage&utm_campaign=complete-react-v9",
    topics: ["React", "Components", "State Management", "Hooks", "Modern React"]
  },
  {
    title: "React 101",
    provider: "Codecademy",
    instructor: "Codecademy Instructors",
    duration: "Self-paced",
    completionDate: "2021",
    courseUrl: "https://www.codecademy.com/enrolled/courses/react-101",
    topics: ["React", "Components", "State Management", "Hooks", "JSX"]
  }
];

export default function CertificationSection({ heroOnly = false }) {
  if (heroOnly) {
    return (
      <StyledRoot>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid size={{ lg: 7, md: 7, xs: 12 }}>
              <h1 className="title">
                Professional <span className="fancy-text">Certifications</span> &{' '}
                <span className="fancy-text">Courses</span>
              </h1>
            </Grid>
            <Grid size={{ lg: 5, md: 5, xs: 12 }}>
              <p className="description">
                Explore my professional certifications and completed courses that showcase my commitment to continuous learning and expertise in modern technologies. From cloud computing to machine learning, these credentials demonstrate my dedication to staying current with industry best practices.
              </p>
            </Grid>
          </Grid>
        </Container>
      </StyledRoot>
    );
  }

  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        {/* Certifications Section */}
        <Box sx={{ mb: 8 }}>
          <SectionTitle title="Professional Certifications" />
          <Grid container spacing={3}>
            {certifications.map((cert, index) => (
              <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <img 
                        src={cert.image} 
                        alt={cert.issuer}
                        style={{ 
                          width: 48, 
                          height: 48, 
                          objectFit: 'contain',
                          marginRight: 12
                        }}
                      />
                      <Box>
                        <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {cert.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {cert.issuer}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                      <Chip 
                        label={cert.date} 
                        size="small" 
                        color="primary" 
                        variant="outlined"
                      />
                      <Typography 
                        variant="body2" 
                        color="primary" 
                        sx={{ 
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          '&:hover': { textDecoration: 'none' },
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 0.5
                        }}
                        onClick={() => window.open(cert.credentialUrl, '_blank')}
                      >
                        <strong>View Credential</strong> ↗
                      </Typography>
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {cert.skills.map((skill, skillIndex) => (
                        <Chip 
                          key={skillIndex}
                          label={skill} 
                          size="small" 
                          variant="filled"
                          sx={{ fontSize: '0.75rem', backgroundColor: 'primary.light', color: 'primary.contrastText' }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Courses Section */}
        <Box>
          <SectionTitle title="Professional Development Courses" />
          <Grid container spacing={3}>
            {courses.map((course, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4
                    }
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 600, mb: 1 }}>
                      {course.title}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        <strong>Provider:</strong> {course.provider}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        <strong>Instructor:</strong> {course.instructor}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        <strong>Duration:</strong> {course.duration}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                        <strong>Completed:</strong> {course.completionDate}
                      </Typography>
                      {course.courseUrl && (
                        <Typography 
                          variant="body2" 
                          color="primary" 
                          sx={{ 
                            cursor: 'pointer',
                            textDecoration: 'underline',
                            '&:hover': { textDecoration: 'none' },
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.5
                          }}
                          onClick={() => window.open(course.courseUrl, '_blank')}
                        >
                          <strong>View Course</strong> ↗
                        </Typography>
                      )}
                    </Box>
                    
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {course.topics.map((topic, topicIndex) => (
                        <Chip 
                          key={topicIndex}
                          label={topic} 
                          size="small" 
                          variant="outlined"
                          sx={{ fontSize: '0.75rem' }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
