import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import useTheme from '@mui/material/styles/useTheme'; // CUSTOM COMPONENTS

import ListItem from './ListItem';
import { H6 } from '@/components/typography';
import MoreButton from '@/components/more-button';
import FlexBetween from '@/components/flexbox/FlexBetween'; // CUSTOM ICON COMPONENTS

import Globe from '@/icons/Globe';
import DateRange from '@/icons/DateRange';
import Education from '@/icons/Education';
import UserOutlined from '@/icons/UserOutlined';
import EmailOutlined from '@/icons/EmailOutlined';
import BriefcaseOutlined from '@/icons/BriefcaseOutlined';
export default function AdditionalDetails() {
  const theme = useTheme();
  return <Card className="p-3">
      <FlexBetween>
        <H6 fontSize={16}>Additional Details</H6>
        {/* <MoreButton size="small" /> */}
      </FlexBetween>

      <Stack mt={3} spacing={2}>
        {/* <ListItem title="Email" Icon={EmailOutlined} subTitle="Uilib@gmail.com" color={theme.palette.grey[400]} /> */}

        

        {/* <ListItem title="Nickname" subTitle="Pixy" Icon={UserOutlined} color={theme.palette.warning[600]} /> */}

        {/* <ListItem Icon={DateRange} title="Join Date" subTitle="Aug 15th, 2021" color={theme.palette.success.main} /> */}

        <ListItem Icon={Education} title="Lab Assistent (PF) Nov 2022 - Mar 2023" email="adeel.ahmed@uog.edu.pk" subTitle="Under the supervision of Adeel Ahmed at University of Gujrat" color={theme.palette.warning.main} />
          <hr />
        <ListItem Icon={Education}  title="Teaching Assistant, AI Lab Nov 2023 - Mar 2024" email="zahid.iqbal@uog.edu.pk" subTitle="Under the supervision of Dr. Zahid Iqbal at University of Gujrat" color={theme.palette.info.main}  />
          <hr />
        <ListItem title="MERN Stack Developer, 2023 - 2024 " emailAlt="at BIC Business Incubation Center" subTitle="University of Gujrat" Icon={BriefcaseOutlined} color={theme.palette.error.main} />
        
      </Stack>
    </Card>;
}