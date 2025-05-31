import Grid from '@mui/material/Grid2';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container'; // CUSTOM COMPONENTS
import { useRef, useState } from 'react';
import SectionTitle from '@/components/section-title'; // STYLED COMPONENT
 import { sendEmail } from '@/utils/sendEmail';
import { StyledRoot, StyledTextField } from './styles';
export default function Section2() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { success, message } = await sendEmail(formRef);
    setLoading(false);

    if (success) {
      alert('🎉 Message sent successfully!');
      formRef.current.reset(); // optional: clear the form
    } else {
      console.error('Email error:', message);
      alert('❌ Something went wrong. Please try again later.');
    }
  };
  return <StyledRoot>
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <SectionTitle title="Drop a Message!" mb={6} />

            <form ref={formRef} onSubmit={handleSubmit}>
              <Stack spacing={3} mb={5}>
                <StyledTextField fullWidth placeholder="Name" name="name" />
                <StyledTextField fullWidth placeholder="Email" name="email" type="email" />
                <StyledTextField fullWidth placeholder="Subject" name="subject" />
                <StyledTextField multiline fullWidth rows={4} name="message" placeholder="Message" />
              </Stack>
              <Button type="submit" variant="contained" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </Button>
            </form>
          </Grid>

          <Grid size={{
          md: 6,
          xs: 12
        }}>
            <Card>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10171.65762602485!2d-74.04850673629463!3d40.71687384971685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1683481372848!5m2!1sen!2sbd" width="100%" height="550" loading="lazy" className="i-frame" />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </StyledRoot>;
}
