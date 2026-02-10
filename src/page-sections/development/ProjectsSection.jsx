import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import SectionTitle from '@/components/section-title';
// CUSTOM COMPONENTS
import { H2, H6, Paragraph } from '@/components/typography';

const PROJECTS = [
  {
    id: 1,
    title: 'Readorama - Video Text Extraction Platform',
    description: 'Sophisticated full-stack web application using OCR technology to extract text from video frames. Built as final year project at University of Gujrat.',
    technologies: ['React.js', 'Python', 'OCR', 'Computer Vision'],
    image: '/static/projects/readorama.png',
    detailedDescription: 'Readorama is an advanced video text extraction platform that leverages Optical Character Recognition technology to extract readable text from video content. The system features secure user authentication, efficient video processing pipelines, and a responsive React-based interface with real-time processing feedback. Built as my final year project at University of Gujrat, this application is invaluable for educational content analysis, video documentation, and accessibility purposes. The platform demonstrates advanced capabilities in computer vision, video processing, and modern web development.',
    githubLink: 'https://github.com/example/readorama',
    liveLink: 'https://example-readorama.com'
  },
  {
    id: 2,
    title: 'Azure Warranty Claims Processing MVP - Garby',
    description: 'Comprehensive web application for intelligent document processing and warranty claims automation using Azure AI services.',
    technologies: ['Azure AI', 'React.js', 'FastAPI', 'RAG System'],
    image: '/static/projects/garby.png',
    detailedDescription: 'Developed a comprehensive warranty claims processing MVP that leverages Azure AI Document Intelligence for OCR and data extraction. Implemented a RAG system for natural language document queries, created responsive UI with modern design principles, and added comprehensive error handling. The application processes PDF documents, extracts structured data, enables AI-powered queries, and provides labor details lookup through an intuitive web interface. Features include real-time data management and complete API documentation.',
    githubLink: 'https://github.com/example/garby',
    liveLink: 'https://example-garby.com'
  },
  {
    id: 3,
    title: 'Chat with PDF - AI-Powered Document Intelligence',
    description: 'Revolutionary document interaction platform enabling natural language conversations with PDFs using advanced RAG technology.',
    technologies: ['React.js', 'FastAPI', 'RAG', 'OpenAI'],
    image: '/static/projects/chatpdf.png',
    detailedDescription: 'Built a sophisticated full-stack application that revolutionizes document interaction through AI-powered conversations. This innovative platform enables users to upload PDF documents and engage in natural language conversations, leveraging advanced RAG (Retrieval-Augmented Generation) technology for accurate, context-aware responses with source attribution. Developed for Smart Zone Leaders (pvt) ltd, this platform demonstrates expertise in AI integration and modern web development.',
    githubLink: 'https://github.com/example/chatpdf',
    liveLink: 'https://example-chatpdf.com'
  },
  {
    id: 4,
    title: 'MindMeta - AI-Powered Cognitive Care Assistant',
    description: 'Full-stack AI healthcare platform featuring real-time voice conversations between patients and empathetic AI assistants.',
    technologies: ['React.js', 'TypeScript', 'FastAPI', 'Hume AI', 'OpenAI'],
    image: '/static/projects/mindmeta.png',
    detailedDescription: 'Developed a comprehensive AI-powered healthcare platform with real-time voice conversations between patients and empathetic AI assistants. Built with React.js/TypeScript frontend and Python/FastAPI backend, integrating cutting-edge AI technologies including Hume AI for emotional intelligence, OpenAI GPT for medical summaries, and Deepgram for speech processing. Implemented WebSocket communication for real-time interactions, PostgreSQL for data management, and Redis for session handling. Deployed using Docker with AWS cloud integration.',
    githubLink: 'https://github.com/example/mindmeta',
    liveLink: 'https://example-mindmeta.com'
  },
  {
    id: 5,
    title: 'PrimeFlow POS - Complete Point of Sale System',
    description: 'Production-ready POS system for retail businesses with inventory management, sales tracking, and financial reporting.',
    technologies: ['React', 'FastAPI', 'MySQL', 'Material-UI'],
    image: '/static/projects/primeflow.png',
    detailedDescription: 'A comprehensive, production-ready Point of Sale system built for retail businesses. Features complete inventory management, sales tracking, customer relationship management, and financial reporting capabilities. Built RESTful API using FastAPI with SQLAlchemy ORM, created responsive React frontend with Material-UI components, implemented role-based access control, and designed real-time inventory management system. Includes advanced financial features like customer credit management, order returns processing, and automated receipt generation with analytics dashboard.',
    githubLink: 'https://github.com/example/primeflow',
    liveLink: 'https://example-primeflow.com'
  },
  {
    id: 6,
    title: 'Parchem AI Assistant - Chemical Distribution Platform',
    description: 'Intelligent AI chatbot using Streamlit and LangChain to automate customer inquiries and streamline chemical distribution.',
    technologies: ['Streamlit', 'LangChain', 'OpenAI', 'Firebase'],
    image: '/static/projects/parchem.png',
    detailedDescription: 'Built an intelligent AI chatbot using Streamlit, LangChain, and OpenAI GPT-4 to automate customer inquiries and provide chemical expertise for Parchem\'s international chemical distribution business. Implemented secure user management with Firebase Authentication, developed modular Python architecture with separate packages for auth, LLM chains, and order processing. Configured CI/CD pipeline with GitHub Actions and deployed on Heroku cloud platform.',
    githubLink: 'https://github.com/example/parchem',
    liveLink: 'https://example-parchem.com'
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: { sm: 8, xs: 4 } }}>
      <SectionTitle centered title="Featured Projects" />
      <Grid container spacing={2}>
        <Grid size={{ lg: 5, xs: 12 }}>
          <Box maxWidth={450} position="sticky" top={0} pt={4}>
            <H2 fontSize={36}>Key Projects</H2>
            
            <Paragraph mt={1} fontSize={18} color="text.secondary">
              Here are some of my highlighted projects that showcase my skills in full-stack development, 
              AI integration, and data analytics. Each project demonstrates different aspects of my technical 
              expertise and problem-solving abilities.
            </Paragraph>
            
            <Paragraph mt={2} fontSize={16} color="primary.main" sx={{ fontStyle: 'italic' }}>
              Click on any project card to view detailed information
            </Paragraph>
          </Box>
        </Grid>

        <Grid container spacing={3} size={{ lg: 7, xs: 12 }}>
          <Grid size={12}>
            <Stack spacing={3}>
              {PROJECTS.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  onClick={() => handleProjectClick(project)}
                />
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Grid>

      {/* Project Detail Modal */}
      <Modal
        open={!!selectedProject}
        onClose={handleCloseModal}
        aria-labelledby="project-modal-title"
        aria-describedby="project-modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 2
        }}
      >
        <Box
          sx={{
            position: 'relative',
            bgcolor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: 800,
            width: '100%',
            maxHeight: '90vh',
            overflow: 'auto',
            p: 4
          }}
        >
          {selectedProject && (
            <>
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: 'grey.500'
                }}
              >
                ✕
              </IconButton>
              
              <Typography id="project-modal-title" variant="h4" component="h2" gutterBottom>
                {selectedProject.title}
              </Typography>
              
              <Box sx={{ mb: 3 }}>
                <Stack direction="row" spacing={1} flexWrap="wrap">
                  {selectedProject.technologies.map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: 2,
                        py: 1,
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        borderRadius: 1,
                        fontSize: 14
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Stack>
              </Box>
              
              <Typography id="project-modal-description" variant="body1" paragraph>
                {selectedProject.detailedDescription}
              </Typography>
              
              <Box sx={{ mt: 3, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Box
                  component="a"
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 3,
                    py: 1.5,
                    bgcolor: 'grey.900',
                    color: 'white',
                    borderRadius: 1,
                    textDecoration: 'none',
                    display: 'inline-block',
                    '&:hover': {
                      bgcolor: 'grey.700'
                    }
                  }}
                >
                  View on GitHub
                </Box>
                <Box
                  component="a"
                  href={selectedProject.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    px: 3,
                    py: 1.5,
                    bgcolor: 'primary.main',
                    color: 'white',
                    borderRadius: 1,
                    textDecoration: 'none',
                    display: 'inline-block',
                    '&:hover': {
                      bgcolor: 'primary.dark'
                    }
                  }}
                >
                  Live Demo
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Container>
  );
}

function ProjectCard({ project, onClick }) {
  return (
    <Card
      sx={{
        p: 3,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 4,
          bgcolor: 'grey.50'
        }
      }}
      onClick={onClick}
    >
      <Grid container spacing={3}>
        <Grid size={{ md: 3, xs: 12 }}>
          <Box
            sx={{
              width: '100%',
              height: 120,
              bgcolor: 'primary.light',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
              p: 2
            }}
          >
            {project.title}
          </Box>
        </Grid>
        
        <Grid size={{ md: 9, xs: 12 }}>
          <Stack spacing={2}>
            <H6 fontSize={20}>{project.title}</H6>
            <Paragraph fontSize={16} color="text.secondary">
              {project.description}
            </Paragraph>
            <Box>
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <Box
                    key={index}
                    sx={{
                      px: 1.5,
                      py: 0.5,
                      bgcolor: 'grey.200',
                      borderRadius: 1,
                      fontSize: 12
                    }}
                  >
                    {tech}
                  </Box>
                ))}
                {project.technologies.length > 3 && (
                  <Box sx={{ px: 1.5, py: 0.5, fontSize: 12, color: 'grey.500' }}>
                    +{project.technologies.length - 3} more
                  </Box>
                )}
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Card>
  );
}
