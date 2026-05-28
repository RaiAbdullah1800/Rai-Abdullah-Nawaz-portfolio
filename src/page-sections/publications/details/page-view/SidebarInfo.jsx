import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import School from '@mui/icons-material/School';
import Work from '@mui/icons-material/Work';
import { H6 } from '@/components/typography';

const academicServices = [
  {
    role: 'Graduate Teaching & Lab Assistant',
    place: 'University of Gujrat, Pakistan',
    date: 'Multiple Terms',
    points: [
      'Led hands-on undergraduate lab sessions covering Decentralized Learning (Python) and Programming Fundamentals (C++).',
      'Provided technical mentorship, debugging support, and project guidance to over 50+ computer science students.'
    ]
  },
  {
    role: 'Research Assistant',
    place: "Dr. Zahid Iqbal's Research Lab",
    date: 'Aug 2024 - Jan 2025',
    points: [
      'Worked on region-based video text extraction, modeling, and system evaluations.'
    ]
  }
];

export default function SidebarInfo() {
  return (
    <Stack spacing={4} sx={{ position: 'sticky', top: 20 }}>
      {/* Education & Bio */}
      <Card sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={1.5} mb={2}>
          <School color="primary" />
          <H6 fontSize={18} fontWeight={600}>Education & Bio</H6>
        </Box>
        <Typography variant="body2" color="text.primary" fontWeight={600} mb={0.5}>
          B.S. in Computer Science
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          University of Gujrat, Pakistan (2020 - 2024)
        </Typography>

      </Card>


      {/* Academic Experience & Services */}
      <Card sx={{ p: 3 }}>
        <Box display="flex" alignItems="center" gap={1.5} mb={2}>
          <Work color="primary" />
          <H6 fontSize={18} fontWeight={600}>Academic Services</H6>
        </Box>
        <Stack spacing={2.5}>
          {academicServices.map((service, index) => (
            <Box key={index}>
              <Typography variant="body2" color="text.primary" fontWeight={600}>
                {service.role}
              </Typography>
              <Typography variant="caption" color="text.secondary" display="block">
                {service.place}
              </Typography>
              <Typography variant="caption" color="primary.main" fontWeight={500} display="block" mb={0.5}>
                {service.date}
              </Typography>
              {service.points && (
                <Box component="ul" sx={{ pl: 2, m: 0, '& li': { fontSize: '0.75rem', color: 'text.secondary', mb: 0.5 } }}>
                  {service.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </Box>
              )}
            </Box>
          ))}
        </Stack>
      </Card>
    </Stack>
  );
}
