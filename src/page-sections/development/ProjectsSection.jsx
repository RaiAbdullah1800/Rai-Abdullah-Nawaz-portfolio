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
    id: 2,
    title: 'Readorama - Video Text Extraction Platform',
    description: 'Advanced full-stack web application that extracts text from video frames using OCR technology, featuring user authentication, real-time processing, and intelligent text recognition.',
    technologies: [
      // Core Frontend Technologies
      'React.js', 'Vite', 'React Router', 'React Icons', 'Axios',
      
      // Core Backend Technologies
      'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'ES6+',
      
      // OCR & Computer Vision
      'Tesseract.js', 'Sharp', 'FFmpeg', 'fluent-ffmpeg',
      
      // Authentication & Security
      'JWT Authentication', 'bcryptjs', 'cookie-parser', 'cors',
      
      // File Handling & Processing
      'Multer', 'body-parser', 'express-validator',
      
      // Development Tools
      'Nodemon', 'ESLint', 'Prettier', 'dotenv',
      
      // Frontend Libraries
      'React DOM', '@vitejs/plugin-react', '@types/react',
      
      // Backend Utilities
      'jsonwebtoken', 'mongoose', 'sharp', 'tesseract.js'
    ],
    image: '/static/projects/Readorama.jpeg',
    detailedDescription: 'Sophisticated full-stack web application that leverages Optical Character Recognition (OCR) technology to extract text from video frames. Developed as final year project demonstrating advanced computer vision integration and modern web development practices. Built React.js frontend with Vite for optimal development experience, featuring responsive design and real-time processing feedback. Implemented Express.js backend with RESTful API architecture following MVC pattern and modular route handlers. Integrated Tesseract.js OCR engine with FFmpeg for video frame extraction and text recognition optimization. Created secure JWT-based authentication system with bcrypt password hashing and role-based access control. Features include efficient video upload system with Multer for handling large files, intelligent frame extraction algorithms, text result visualization with frame mapping, user account management with secure registration/login, and scalable MongoDB database design with Mongoose ODM. Demonstrates expertise in full-stack development, computer vision integration, video processing, authentication systems, and modern JavaScript ecosystem with focus on performance optimization and user experience.',
    githubLink: 'https://drive.google.com/drive/folders/1t4qKyVHTZbjHFtD9ua8eIXJ2B9Y4Vylh?usp=sharing'
  },
  {
    id: 3,
    title: 'Garby - Azure Warranty Claims Processing MVP',
    description: 'Intelligent web application for automated warranty claims processing featuring AI-powered document extraction, natural language queries, and real-time data management using Azure cloud services.',
    technologies: [
      // Core Frontend Technologies
      'HTML5', 'CSS3', 'JavaScript (ES6+)', 'Font Awesome',
      
      // Azure Services
      'Azure Blob Storage', 'Azure AI Document Intelligence', 'Azure Data Lake',
      
      // API & Communication
      'REST APIs', 'Fetch API', 'Async/Await', 'JSON',
      
      // UI/UX Technologies
      'Responsive Design', 'CSS Grid', 'Flexbox', 'CSS Animations',
      
      // Document Processing
      'PDF Processing', 'OCR Integration', 'Data Extraction', 'CSV Export',
      
      // AI/ML Technologies
      'RAG (Retrieval-Augmented Generation)', 'Natural Language Processing',
      
      // Development Tools
      'Git', 'Version Control', 'Error Handling', 'Progress Tracking',
      
      // Web Standards
      'Semantic HTML', 'Accessibility (WCAG)', 'Mobile-First Design',
      
      // Performance & Optimization
      'Local Storage', 'Caching', 'Debouncing', 'Lazy Loading'
    ],
    image: '/static/projects/Garby.png',
    detailedDescription: 'A comprehensive web application for intelligent document processing and warranty claims automation built with modern frontend technologies and Azure cloud services. Developed responsive single-page application with tab-based navigation featuring document upload with drag-and-drop functionality, real-time API status monitoring, and comprehensive error handling. Implemented AI-powered document extraction using Azure Document Intelligence with confidence scoring and field validation for warranty-specific data. Created advanced RAG query system enabling natural language searches across processed documents with VIN and repair order filtering capabilities. Built labor details lookup system with real-time data retrieval and parts/cost information display. Features include batch document processing with progress tracking, automatic Bronze layer ingestion to Azure Data Lake, CSV export functionality with formatted data extraction, missing field detection with email alerts, and comprehensive audit trails. Demonstrates expertise in frontend development, API integration, AI service implementation, document processing workflows, and building scalable cloud-integrated applications with focus on user experience and automation.',
    githubLink: 'https://drive.google.com/drive/folders/1Xhbl-WIt7TfprbPXHuRkaME6q6MM0Ccx?usp=sharing'
  },
  {
    id: 4,
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
    id: 5,
    title: 'Parchem AI - Intelligent Chemical Distribution Chatbot',
    description: 'AI-powered chatbot for chemical industry providing 24/7 expert assistance, automated order processing, and customer engagement for international chemical distribution.',
    technologies: [
      // Core Frontend Technologies
      'Streamlit', 'Python', 'HTML5', 'CSS3',
      
      // AI/ML Technologies (Most Important)
      'OpenAI GPT-4o-mini', 'LangChain', 'Prompt Engineering', 'NLP Processing',
      
      // Authentication & Database
      'Firebase Authentication', 'Google Cloud Firestore', 'Firebase Admin SDK',
      'Pyrebase4', 'Session Management',
      
      // Backend & API
      'Python', 'SMTP Integration', 'Email Automation',
      'RESTful APIs', 'JSON Processing',
      
      // Cloud & Deployment
      'Heroku', 'GitHub Actions', 'CI/CD Pipeline', 'Environment Variables',
      'Cloud Deployment', 'Streamlit Cloud',
      
      // Security & Authentication
      'JWT Tokens', 'Firebase Security Rules', 'API Key Management',
      'User Authentication', 'Data Privacy',
      
      // Data Processing (Medium Importance)
      'Python-dotenv', 'TOML', 'JSON Handling', 'Environment Configuration',
      'Secrets Management',
      
      // Development Tools (Medium Importance)
      'Git', 'Version Control', 'Virtual Environment', 'Package Management',
      'pip', 'Requirements Management',
      
      // UI/UX Libraries (Medium Importance)
      'Custom CSS', 'Responsive Design', 'Mobile Optimization',
      'User Interface Design', 'Component Architecture',
      
      // Python Libraries (Medium Importance)
      'Requests', 'HTTP Libraries', 'Email Libraries', 'Cryptography',
      'PyJWT', 'Google Cloud Libraries',
      
      // Business Logic (Least Important)
      'Order Processing', 'Workflow Automation', 'Business Logic',
      'Customer Service', 'Lead Generation',
      
      // Utilities & Misc (Least Important)
      'Logging', 'Error Handling', 'Configuration Management',
      'File System Operations', 'System Integration'
    ],
    image: '/static/projects/parchem.png',
    detailedDescription: 'Developed a sophisticated AI-powered chatbot solution for Parchem, a leading international chemical distributor, transforming customer engagement through intelligent automation. Built full-stack application using Streamlit framework with custom CSS styling for responsive web interface. Implemented advanced AI capabilities using LangChain framework integrated with OpenAI GPT-4o-mini model for specialized chemical knowledge, safety information, and customer interactions. Designed and implemented secure authentication system using Firebase Authentication with Firestore database for user management, session persistence, and chat history storage. Created automated order processing workflow with structured data collection, email notifications via SMTP integration, and lead generation capabilities. Developed modular Python architecture with separate packages for authentication (firebase.py, components.py, service.py), AI/LLM processing (chains.py, prompts.py), email handling, and order processing. Implemented comprehensive system for chemical expertise including product information, safety data, synthesis details, applications, and environmental impact assessments. Features include real-time conversational AI with context awareness and memory retention, secure user authentication and session management, automated order inquiry collection with email notifications, responsive design optimized for mobile and desktop, and admin dashboard for monitoring user interactions. Deployed scalable solution on Heroku cloud platform with CI/CD pipeline using GitHub Actions for automated deployment. Demonstrates expertise in AI/ML integration, full-stack development, database design, authentication systems, and business process automation in the chemical industry domain.'
  },
  {
    id: 6,
    title: 'PrimeFlow POS - Complete Point of Sale System',
    description: 'A comprehensive, production-ready Point of Sale system for retail businesses featuring inventory management, sales tracking, customer relationship management, and financial reporting capabilities.',
    technologies: [
      // Core Frontend Technologies
      'React.js', 'Vite', 'Material-UI', 'React Router', 'Zustand',
      
      // Core Backend Technologies
      'FastAPI', 'Python', 'MySQL', 'SQLAlchemy', 'Alembic',
      
      // Authentication & Security
      'JWT Authentication', 'bcrypt', 'passlib', 'python-jose', 'python-multipart',
      
      // Database & ORM
      'Pydantic', 'PyMySQL', 'python-dotenv',
      
      // Frontend Libraries
      'Axios', 'Chart.js', 'Day.js', 'jsPDF', 'jspdf-autotable', 'html2canvas',
      'Emotion', 'Notistack', 'Lodash', 'React Chart.js 2',
      
      // Development Tools
      'ESLint', '@vitejs/plugin-react-swc', 'Globals',
      
      // Python Libraries
      'Cryptography', 'PyJWT', 'HTTPx', 'WebSockets', 'Starlette',
      
      // Testing & Quality
      'Pytest', 'pytest-mock',
      
      // Additional Services
      'Supabase', 'Gotrue', 'Postgrest', 'Realtime',
      
      // Utilities
      'UUID', 'Date-fns', 'Python-dateutil'
    ],
    image: '/static/projects/PrimeFlowSS21.png',
    detailedDescription: 'A comprehensive Point of Sale system designed to streamline retail operations with advanced inventory management, sales tracking, and customer relationship features. Built full-stack application with React.js frontend featuring Material-UI components and responsive design for optimal user experience. Developed Python/FastAPI backend with MySQL database using SQLAlchemy ORM for efficient data management and Alembic for database migrations. Implemented secure JWT authentication system with role-based access control for admin and cashier users. Features include real-time inventory management with automatic stock updates, comprehensive order processing with multiple payment methods, customer credit management with advance payment tracking, and sophisticated order return system with inventory restoration. Built analytics dashboard with data visualization using Chart.js for sales metrics and business insights. Integrated PDF generation for professional receipts and customer history reports using jsPDF with company branding. Implemented advanced financial features including customer dues management, partial payments, and transaction history tracking. The system handles complex business logic such as inventory corrections, financial calculations, and audit trails. Demonstrates expertise in full-stack development, database design, user authentication, real-time systems, and business process automation with focus on scalability, security, and user experience.',
    githubLink: 'https://drive.google.com/drive/folders/10b-jBwSXGnkLvjuShygoFfM8Ark8nQ-K?usp=sharing'
  },
  {
    id: 7,
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
