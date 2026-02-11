import React from 'react';
import { Box, Card, Stack, Typography, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import SectionTitle from '@/components/section-title';
import DownloadIcon from '@mui/icons-material/Download';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

export default function SZLExperience() {
  const bullets = [
    'Designed and deployed end-to-end machine learning solutions integrated within full-stack web applications, bridging AI and production-level software.',
    'Developed FastAPI-based backend services to serve trained models as REST APIs, enabling real-time inference and data-driven decision-making.',
    'Built interactive React.js frontends with client-side ML models using libraries like ml5.js and TensorFlow.js, delivering instant, on-device predictions without server round-trips.',
    'Engineered data preprocessing and feature extraction pipelines for diverse datasets, optimizing model accuracy and performance.',
    'Leveraged Python (scikit-learn, TensorFlow, PyTorch) for backend ML workflows; implemented Docker and GitHub Actions for streamlined CI/CD and deployment automation.',
    'Collaborated closely with cross-functional teams to translate business goals into AI-driven features tailored for scalability and user impact.',
    'Monitored, evaluated, and iteratively improved deployed models using real-time analytics and performance tracking.',
  ];

  const cvLink = 'https://drive.google.com/file/d/1-MT7z7UKPi0S67FIYlYOkhOvr0nLKyTc/view?usp=sharing';

  return (
    <Box mt={4}>
      <SectionTitle title="Work Experience — SmartZone Leaders" />
      <Card sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Machine Learning Engineer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              SmartZone Leaders — Pakistan • Dec 2024 – Sep 2025
            </Typography>
          </Box>

          <List dense sx={{ pt: 0 }}>
            {bullets.map((text, idx) => (
              <ListItem key={idx} alignItems="flex-start" disableGutters sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 28, mt: 0.3 }}>
                  <FiberManualRecordIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primaryTypographyProps={{ variant: 'body2' }} primary={text} />
              </ListItem>
            ))}
          </List>

          <Box>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              component="a"
              href={cvLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click for CV
            </Button>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}
