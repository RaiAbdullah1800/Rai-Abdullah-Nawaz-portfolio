import { Fragment } from 'react';
import Container from '@mui/material/Container';
import HeaderEffect from '@/layouts/root/HeaderEffect';
import CertificationSection from '../CertificationSection';

export default function CertificationsPageView() {
  return (
    <Fragment>
      {/* HERO SECTION */}
      <HeaderEffect>
        <CertificationSection heroOnly={true} />
      </HeaderEffect>

      {/* FULL CERTIFICATION SECTION */}
      <CertificationSection heroOnly={false} />
    </Fragment>
  );
}
