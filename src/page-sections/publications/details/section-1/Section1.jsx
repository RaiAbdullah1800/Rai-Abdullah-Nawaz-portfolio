import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button'; // CUSTOM COMPONENT

import Link from '@/components/link/Link';
import { H6, Paragraph } from '@/components/typography'; // STYLED COMPONENT

import { StyledRoot } from './styles';
export default function Section1() {
  return <StyledRoot elevation={3}>
      <div>
        <div className="title">
          <H6 fontSize={22} lineHeight={1}>
            1. Efficient Region-Based Video Text Extraction <br/>Using Advanced Detection and Recognition Models
          </H6>
        </div>

        <Paragraph pt={2} pb={3} lineHeight={1}>
          Journal: International Journal of Innovations in Science & Technology, Vol. 7 No. 5 (2025) 
        </Paragraph>

        <div className="tags">
          <Chip label="Naveed Ahmed*" color="secondary" />
          <Chip label="Zahid Iqbal*" color="secondary" />
          <Chip label="Abdullah Nawaz*" color="primary" />
          <Chip label="Huah Yong Chan" color="secondary" />
          <Chip label="Fatima N. AL-Aswadi" color="secondary" />
          <Chip label="Hafiz Usman Zia" color="secondary" />
        </div>
      </div>
    </StyledRoot>;
}