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
    id: 8,
    title: 'MindMeta - AI-Powered Cognitive Care Assistant',
    description: 'Healthcare platform featuring real-time voice conversations between patients and empathetic AI companions for cognitive care and memory training.',
    technologies: [
      // Core Frontend Technologies
      'React.js', 'TypeScript', 'Vite', 'Material-UI', 'React Router',
      
      // Core Backend Technologies
      'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Redis',
      
      // AI/ML Technologies (Most Important)
      'Hume AI', 'OpenAI GPT', 'Deepgram SDK', 'Azure Cognitive Services Speech',
      
      // Real-time & Authentication
      'WebSocket', 'Socket.IO', 'JWT Authentication',
      
      // Database & ORM
      'Alembic', 'Pydantic', 'psycopg2-binary',
      
      // Cloud & Deployment
      'Docker', 'AWS S3', 'Boto3',
      
      // Frontend Libraries (Medium Importance)
      'Emotion', 'Framer Motion', 'Axios', 'Formik', 'Yup', 'ApexCharts', 'i18next',
      'Date-fns', 'React Hot Toast', 'Lucide React', 'Lottie Files',
      
      // React Components (Medium Importance)
      'React Dropzone', 'React Select', 'React Phone Input', 'React OTP Input',
      
      // Python Libraries (Medium Importance)
      'bcrypt', 'passlib', 'python-jose', 'python-multipart', 'python-dotenv',
      'requests', 'httpx', 'pymongo',
      
      // Data Science & Audio (Least Important)
      'scikit-learn', 'numpy', 'scipy', 'pydub', 'simpleaudio', 'sounddevice',
      
      // Utilities & Misc (Least Important)
      'Moment.js', 'UUID', 'Nanoid', 'P5.js', 'Regenerator Runtime'
    ],
    image: '/static/projects/mindmeta.png',
    detailedDescription: 'A comprehensive AI-powered healthcare platform designed to provide cognitive care and companionship for patients through voice-based interactions. Built full-stack application with React.js/TypeScript frontend featuring Material-UI components and real-time WebSocket communication. Developed Python/FastAPI backend with PostgreSQL database and Redis caching for session management. Integrated cutting-edge AI technologies including Hume AI for emotionally intelligent voice conversations, OpenAI GPT for personalized medical summaries, Deepgram for speech-to-text processing, and Azure Cognitive Services for additional voice capabilities. Implemented secure JWT authentication, role-based access control, and comprehensive patient data management. Features include real-time voice conversations with AI assistants, medical history tracking, life story documentation, family member coordination, appointment scheduling, and media management. Deployed using Docker containers with AWS cloud integration and S3 for file storage. Demonstrates expertise in full-stack development, AI/ML integration, real-time systems, and healthcare technology innovation.',
    githubLink: 'https://drive.google.com/drive/folders/1e-B-1Xp4CeNBZwHB8x_CxEy21ap3mo_b?usp=sharing',
    liveLink: 'https://mindmeta.co.uk'
  },
  {
    id: 1,
    title: 'Readorama - Video Text Extraction Platform',
    description: 'Sophisticated full-stack web application using OCR technology to extract text from video frames. Built as final year project at University of Gujrat.',
    technologies: ['React.js', 'Python', 'OCR', 'Computer Vision'],
    image: '/static/projects/readorama.png',
    detailedDescription: 'Readorama is an advanced video text extraction platform that leverages Optical Character Recognition technology to extract readable text from video content. The system features secure user authentication, efficient video processing pipelines, and a responsive React-based interface with real-time processing feedback. Built as my final year project at University of Gujrat, this application is invaluable for educational content analysis, video documentation, and accessibility purposes. The platform demonstrates advanced capabilities in computer vision, video processing, and modern web development.',
    githubLink: 'https://github.com/example/readorama',
  },
  {
    id: 2,
    title: 'Azure Warranty Claims Processing MVP - Garby',
    description: 'Comprehensive web application for intelligent document processing and warranty claims automation using Azure AI services.',
    technologies: ['Azure AI', 'React.js', 'FastAPI', 'RAG System'],
    image: '/static/projects/garby.png',
    detailedDescription: 'Developed a comprehensive warranty claims processing MVP that leverages Azure AI Document Intelligence for OCR and data extraction. Implemented a RAG system for natural language document queries, created responsive UI with modern design principles, and added comprehensive error handling. The application processes PDF documents, extracts structured data, enables AI-powered queries, and provides labor details lookup through an intuitive web interface. Features include real-time data management and complete API documentation.',
    githubLink: 'https://github.com/example/garby',
  },
  {
    id: 3,
    title: 'Friends Ledger - Complete Business Management System',
    description: 'Comprehensive desktop business management application featuring inventory management, sales tracking, financial reporting, and automated investor profit distribution for small to medium enterprises.',
    technologies: [
      // Core Frontend Technologies
      'React.js', 'Vite', 'Material-UI', 'React Router', 'React Query',
      
      // Core Backend Technologies
      'FastAPI', 'Python', 'PostgreSQL', 'SQLAlchemy', 'Alembic',
      
      // Desktop & Authentication
      'Electron', 'Electron Builder', 'JWT Authentication', 'bcrypt',
      
      // Database & ORM
      'Pydantic', 'psycopg2-binary', 'python-dotenv',
      
      // PDF & Document Generation
      'jsPDF', 'jspdf-autotable',
      
      // Frontend Libraries
      'Axios', 'Emotion', 'Lucide React', 'React Webcam',
      
      // React Components
      '@zxing/library', 'React Router DOM', '@tanstack/react-query',
      
      // Python Libraries
      'passlib', 'python-jose', 'python-multipart', 'httpx', 'uvicorn',
      
      // Utilities & Misc
      'TailwindCSS', 'PostCSS', 'ESLint', 'PyInstaller'
    ],
    image: '/static/projects/FriendsLedger.jpeg',
    detailedDescription: 'A comprehensive business management desktop application designed to streamline operations for small to medium enterprises. Built full-stack application with React.js frontend featuring Material-UI components and real-time data synchronization using React Query. Developed Python/FastAPI backend with PostgreSQL database and complex relational models using SQLAlchemy ORM. Implemented secure JWT authentication system with role-based access control and comprehensive audit trails. Features include advanced inventory management with barcode/IMEI scanning capabilities, multi-investor profit sharing with automated distribution algorithms, partial payment tracking and sales management, comprehensive financial reporting (P&L, Cash Flow, Balance Sheet), receipt generation with thermal printer integration, and refund processing with inventory reversal. Created cross-platform desktop application using Electron with native file system access and portable deployment capabilities. Demonstrates expertise in full-stack development, business logic implementation, financial systems, database design, and desktop application development with focus on automation and scalability.',
    githubLink: 'https://drive.google.com/drive/folders/1L1Fn0rIr4jpNOWmxx9YqBHEts9-2Yz6H?usp=sharing'
  },
  {
    id: 7,
    title: 'Parchem AI Assistant - Chemical Distribution Platform',
    description: 'Intelligent AI chatbot using Streamlit and LangChain to automate customer inquiries and streamline chemical distribution.',
    technologies: ['Streamlit', 'LangChain', 'OpenAI', 'Firebase'],
    image: '/static/projects/parchem.png',
    detailedDescription: 'Built an intelligent AI chatbot using Streamlit, LangChain, and OpenAI GPT-4 to automate customer inquiries and provide chemical expertise for Parchem\'s international chemical distribution business. Implemented secure user management with Firebase Authentication, developed modular Python architecture with separate packages for auth, LLM chains, and order processing. Configured CI/CD pipeline with GitHub Actions and deployed on Heroku cloud platform.',
    githubLink: 'https://github.com/example/parchem',
  },
  {
    id: 8,
    title: 'PrimeFlow POS - Complete Point of Sale System',
    description: 'Production-ready POS system for retail businesses with inventory management, sales tracking, and financial reporting.',
    technologies: ['React', 'FastAPI', 'MySQL', 'Material-UI'],
    image: '/static/projects/primeflow.png',
    detailedDescription: 'A comprehensive, production-ready Point of Sale system built for retail businesses. Features complete inventory management, sales tracking, customer relationship management, and financial reporting capabilities. Built RESTful API using FastAPI with SQLAlchemy ORM, created responsive React frontend with Material-UI components, implemented role-based access control, and designed real-time inventory management system. Includes advanced financial features like customer credit management, order returns processing, and automated receipt generation with analytics dashboard.',
    githubLink: 'https://github.com/example/primeflow',
  },
  {
    id: 9,
    title: 'Uxpendit - Live AI Business Automation Platform',
    description: 'Commercial SaaS website for AI business automation services built with Next.js 14, featuring multilingual support and global deployment.',
    technologies: ['Next.js 14', 'AI Integration', 'SaaS', 'Multilingual'],
    image: '/static/projects/uxpendit.png',
    detailedDescription: 'Developed and deployed a commercial SaaS website for AI business automation services. Built with Next.js 14, featuring multilingual support, AI integrations, and optimized for conversions. Successfully launched and serving real customers globally. This project for Smart Zone Leaders (pvt) ltd demonstrates expertise in building production-ready SaaS applications with modern web technologies and international deployment capabilities.',
    githubLink: 'https://github.com/example/uxpendit',
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
            
            <Paragraph mt={2} fontSize={16} color="text.secondary">
              <strong>Project Access:</strong> Click "View Project Proof" to see screenshots and code samples. 
              For full repository access (private/client projects), please book a demo through the contact section.
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
                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
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
                    View Project Proof
                  </Box>
                  {selectedProject.liveLink && (
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
                  )}
                </Box>
              </Box>
              
              <Typography id="project-modal-description" variant="body1" paragraph>
                {selectedProject.detailedDescription}
              </Typography>
              
              <Box sx={{ mt: 3 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, lineHeight: 1.8 }}>
                  {selectedProject.technologies.map((tech, index) => (
                    <Box
                      key={index}
                      sx={{
                        px: 2,
                        py: 1,
                        bgcolor: 'primary.light',
                        color: 'primary.contrastText',
                        borderRadius: 1,
                        fontSize: 14,
                        display: 'inline-block'
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
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
        },
        '&:hover[data-theme="dark"]': {
          bgcolor: 'grey.800'
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
              borderRadius: 2,
              overflow: 'hidden',
              bgcolor: 'grey.100'
            }}
          >
            <Box
              component="img"
              src={project.image}
              alt={project.title}
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <Box
              sx={{
                width: '100%',
                height: '100%',
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',
                p: 2,
                bgcolor: 'primary.light'
              }}
            >
              {project.title}
            </Box>
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
