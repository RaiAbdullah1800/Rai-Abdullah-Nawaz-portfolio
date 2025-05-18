import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack'; 
import ArticleIcon from '@mui/icons-material/Article';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DatasetIcon from '@mui/icons-material/Dataset';
import CalendarMonthOutlined from '@mui/icons-material/CalendarMonthOutlined'; // CUSTOM COMPONENTS
import TableChartIcon from '@mui/icons-material/TableChart';
import Item from './Item';
import { H6 } from '@/components/typography';
export default function Overview() {
  return <Card sx={{
    padding: '1.5rem',
    width: '100%',
    position: 'sticky',
    top: 20
  }}>
      <H6 fontSize={20} mb={3}>
        Overview
      </H6>

      <Stack spacing={2}>
        <Item Icon={CalendarMonthOutlined} title="Published" description="March 3, 2025" />
        <Item Icon={ArticleIcon} title="IJIST" description="Vol. 7 No. 5 (2025)" />
        <Item Icon={VisibilityIcon} title="View Publication" description="See full paper on journal site" link="https://journal.50sea.com/index.php/IJIST/article/view/1238" />
        <Item Icon={TableChartIcon} title="Dataset Benchmarks" description="ICDAR 2015, ICDAR 2017 MLT, COCO-Text" />
      </Stack>
    </Card>;
}