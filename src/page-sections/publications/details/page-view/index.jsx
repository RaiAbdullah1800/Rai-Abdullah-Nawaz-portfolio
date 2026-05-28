import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import FormatQuote from '@mui/icons-material/FormatQuote';
import Launch from '@mui/icons-material/Launch';

import HeaderEffect from '@/layouts/root/HeaderEffect';
import { StyledContainer, StyledRoot } from './styles';

import BibtexModal from './BibtexModal';
import SidebarInfo from './SidebarInfo';

const PUBLICATIONS = [
  {
    id: 1,
    type: 'journal',
    title: 'Efficient Region-Based Video Text Extraction Using Advanced Detection and Recognition Models',
    journal: 'International Journal of Innovations in Science & Technology',
    volume: 'Vol. 7 No. 5 (2025)',
    pages: 'pp. 120-135',
    date: 'March 3, 2025',
    publisher: 'Science & Technology Publications',
    authors: [
      { name: 'Naveed Ahmed*', isCo: true },
      { name: 'Zahid Iqbal*', isCo: true },
      { name: 'Abdullah Nawaz', isSelf: true },
      { name: 'Huah Yong Chan', isCo: true },
      { name: 'Fatima N. AL-Aswadi', isCo: true },
      { name: 'Hafiz Usman Zia', isCo: true }
    ],
    abstract: 'This paper presents an automated process for extracting text from video frames by specifically targeting text-rich regions, identified through advanced scene text detection methods. Unlike traditional techniques that apply OCR to entire frames—resulting in excessive computations and higher error rates—our approach focuses only on textual areas, improving both speed and accuracy. The system integrates effective preprocessing routines, cutting-edge text detectors (CRAFT, DBNet), and advanced recognition engines (CRNN, transformer-based) within a unified framework. Extensive testing on datasets such as ICDAR 2015, ICDAR 2017 MLT, and COCO-Text demonstrates consistent gains in F-scores and word recognition rates, significantly outperforming baseline methods. Additionally, detailed error analysis, ablation studies, and runtime evaluations offer deeper insights into the strengths and limitations of the proposed method. This pipeline is particularly useful for tasks like video indexing, semantic retrieval, and real-time multimedia analysis.',
    link: 'https://journal.50sea.com/index.php/IJIST/article/view/1238',
    project: {
      title: 'Video Text Recognition System',
      description: 'A web application designed to perform real-time detection and recognition of text from video frames, implementing the core methodologies proposed in the publication.',
      techStack: ['React.js', 'Node.js', 'Express', 'Python FastAPI', 'CRAFT', 'CRNN'],
      status: 'Research prototype completed, no active deployment'
    }
  }
];

export default function PublicationsPageView() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredPublications = PUBLICATIONS.filter(p => {
    if (activeTab === 0) return true;
    if (activeTab === 1) return p.type === 'journal';
    if (activeTab === 2) return p.type === 'conference';
    if (activeTab === 3) return p.type === 'preprint';
    return true;
  });

  return (
    <>
      {/* HEADER SECTION */}
      <HeaderEffect>
        <StyledRoot>
          <Container maxWidth="lg">
            <Grid container spacing={3}>
              <Grid size={{ lg: 7, md: 7, xs: 12 }}>
                <h1 className="title">
                  Academic <span className="fancy-text">Research</span> &{' '}
                  <span className="fancy-text">Publications</span>
                </h1>
              </Grid>
              <Grid size={{ lg: 5, md: 5, xs: 12 }}>
                <p className="description">
                  Explore my academic publications, peer-reviewed journal papers, and research contributions in the fields of Computer Vision, Deep Learning, and Artificial Intelligence.
                </p>
              </Grid>
            </Grid>
          </Container>
        </StyledRoot>
      </HeaderEffect>

      {/* MAIN CONTAINER */}
      <StyledContainer maxWidth="lg">

        <Grid container spacing={4} pt={2}>
          {/* Main Content Column */}
          <Grid size={{ lg: 8, md: 7, xs: 12 }}>
            {/* Interactive Category Filter Tabs */}
            <Tabs
              value={activeTab}
              onChange={(e, val) => setActiveTab(val)}
              sx={{
                mb: 4,
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  fontWeight: 600,
                  fontSize: 15,
                  textTransform: 'none',
                }
              }}
            >
              <Tab label={`All Research (${PUBLICATIONS.length})`} />
              <Tab label={`Journals (${PUBLICATIONS.filter(p => p.type === 'journal').length})`} />
              <Tab label={`Conferences (${PUBLICATIONS.filter(p => p.type === 'conference').length})`} />
              <Tab label={`Preprints (${PUBLICATIONS.filter(p => p.type === 'preprint').length})`} />
            </Tabs>

            {/* Publications List */}
            <Stack spacing={3}>
              {filteredPublications.length > 0 ? (
                filteredPublications.map(pub => (
                  <PublicationCard key={pub.id} pub={pub} />
                ))
              ) : (
                <Box
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    border: '1px dashed',
                    borderColor: 'divider'
                  }}
                >
                  <Typography variant="body1" color="text.secondary">
                    No publications found under this category.
                  </Typography>
                </Box>
              )}
            </Stack>
          </Grid>

          {/* Sidebar Info Column */}
          <Grid size={{ lg: 4, md: 5, xs: 12 }}>
            <SidebarInfo />
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
}

function PublicationCard({ pub }) {
  const [showAbstract, setShowAbstract] = useState(false);
  const [showProject, setShowProject] = useState(false);
  const [showCite, setShowCite] = useState(false);

  return (
    <Card sx={{ p: 3, transition: 'all 0.3s ease', '&:hover': { boxShadow: 3 } }}>
      <Stack spacing={2}>
        {/* Type & Date */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Chip
            label={pub.type.toUpperCase() + ' PAPER'}
            size="small"
            color="primary"
            variant="outlined"
            sx={{ fontWeight: 600, fontSize: '0.7rem' }}
          />
          <Typography variant="caption" color="text.secondary">
            Published: {pub.date}
          </Typography>
        </Box>

        {/* Title */}
        <Typography variant="h5" fontWeight={600} color="text.primary" sx={{ lineHeight: 1.3 }}>
          {pub.title}
        </Typography>

        {/* Authors */}
        <Box display="flex" flexWrap="wrap" gap={0.5} alignItems="center">
          {pub.authors.map((auth, idx) => (
            <span key={idx}>
              <Typography
                variant="body2"
                component="span"
                fontWeight={auth.isSelf ? 700 : 400}
                color={auth.isSelf ? 'primary.main' : 'text.primary'}
              >
                {auth.name}{auth.isSelf ? '*' : ''}
              </Typography>
              {idx < pub.authors.length - 1 && ', '}
            </span>
          ))}
        </Box>

        {/* Journal Metadata */}
        <Typography variant="body2" color="text.secondary">
          <strong>Journal:</strong> <em>{pub.journal}</em>, {pub.volume}, {pub.pages}
        </Typography>

        {/* Buttons Row */}
        <Box display="flex" flexWrap="wrap" gap={1} pt={1}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowAbstract(!showAbstract)}
            endIcon={showAbstract ? <ExpandLess /> : <ExpandMore />}
          >
            Abstract
          </Button>

          <Button
            size="small"
            variant="outlined"
            onClick={() => setShowProject(!showProject)}
            endIcon={showProject ? <ExpandLess /> : <ExpandMore />}
          >
            Project Stack
          </Button>

          <Button
            size="small"
            variant="outlined"
            startIcon={<FormatQuote />}
            onClick={() => setShowCite(true)}
          >
            Cite
          </Button>

          <Button
            size="small"
            variant="contained"
            color="primary"
            startIcon={<Launch />}
            href={pub.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Publisher Link
          </Button>
        </Box>

        {/* Collapsible Abstract */}
        <Collapse in={showAbstract}>
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: 'background.default',
              borderRadius: 1,
              borderLeft: '3px solid',
              borderColor: 'primary.main'
            }}
          >
            <Typography variant="subtitle2" fontWeight={600} mb={1}>
              Abstract
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
              {pub.abstract}
            </Typography>
          </Box>
        </Collapse>

        {/* Collapsible Project Details */}
        <Collapse in={showProject}>
          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: 'background.default',
              borderRadius: 1,
              borderLeft: '3px solid',
              borderColor: 'primary.main'
            }}
          >
            <Typography variant="subtitle2" fontWeight={600} mb={1}>
              Research-Based Project: {pub.project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" mb={2}>
              {pub.project.description}
            </Typography>

            <Box mb={2}>
              <Typography variant="caption" fontWeight={600} color="text.secondary" display="block" mb={0.5}>
                TECH STACK
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={0.5}>
                {pub.project.techStack.map((tech, index) => (
                  <Chip
                    key={index}
                    label={tech}
                    size="small"
                    sx={{ fontSize: '0.7rem' }}
                  />
                ))}
              </Box>
            </Box>

            <Box>
              <Typography variant="caption" fontWeight={600} color="text.secondary" display="block">
                PROJECT STATUS
              </Typography>
              <Typography variant="body2" color="text.primary">
                {pub.project.status}
              </Typography>
            </Box>
          </Box>
        </Collapse>
      </Stack>

      <BibtexModal open={showCite} onClose={() => setShowCite(false)} />
    </Card>
  );
}