import Stack from '@mui/material/Stack';
import CheckCircle from '@mui/icons-material/CheckCircle'; // CUSTOM COMPONENTS
import FlexBox from '@/components/flexbox/FlexBox';
import SectionTitle from '@/components/section-title';

const PROJECT_DETAILS = [
  { label: 'Tech Stack:', value: 'React.js, Node.js, Express, Python (for backend ML model integration)' },
  { label: 'Description:', value: 'A web application designed to perform real-time detection and recognition of text from video frames, implementing the core methodologies proposed in the publication.' },
  { label: 'Status:', value: 'Basic development completed for research, no longer in active development.' },
  { label: 'Note:', value: 'No live deployment available.' }
];

export default function ResearchProjectDemo() {
  return (
    <div>
      <SectionTitle title="Research-Based Project: Video Text Recognition System" fontSize={24} />
      
      <Stack spacing={3}>
        {PROJECT_DETAILS.map(item => (
          <FlexBox alignItems="center" gap={2} key={item.label}>
            <CheckCircle color="success" />
            <div>
              <strong>{item.label}</strong> {item.value}
            </div>
          </FlexBox>
        ))}
      </Stack>
    </div>
  );
}
