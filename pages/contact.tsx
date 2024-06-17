import { Container, Typography } from '@mui/material';

const ContactPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      Contact
    </Typography>
    <Typography variant="body1" gutterBottom>
      Contact information and FAQs about COLIEE 2024.
    </Typography>
    <Typography variant="body1" gutterBottom>
      For any inquiries, please contact us at: 
      <a href="mailto:coliee_participation@nii.ac.jp">coliee_participation@nii.ac.jp</a>
    </Typography>
  </Container>
);

export default ContactPage;
