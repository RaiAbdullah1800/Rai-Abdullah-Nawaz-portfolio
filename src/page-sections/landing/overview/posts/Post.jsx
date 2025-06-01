import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'; // MUI ICON COMPONENT

import Add from '@mui/icons-material/Add'; // CUSTOM COMPONENTS

import PostItem from './PostItem';
import { H6 } from '@/components/typography';
import FlexBetween from '@/components/flexbox/FlexBetween';
export default function Post() {
  return <Card className="p-3">
      {/* <FlexBetween flexWrap="wrap" gap={1}>
        <H6 fontSize={16}>Posts</H6>
      </FlexBetween> */}

      <Stack spacing={3} mt={2}>
        <PostItem category="University of Gujrat, Pakistan" date="2020 - 2024" imgLink="" title="Bachelors in Computer Science" />

        <PostItem category="Govt. Model HSS, Hafizabad" date="2018 - 2020" imgLink="/static/post/2.png" title="Intermediate in Computer Science (ICS)" />

        <PostItem category="Govt. High School No. 1, Hafizabad" date="2016 - 2018" imgLink="/static/post/3.png" title="Matriculation in Science (with Computer Science)" />
      </Stack>
    </Card>;
}