// pages/overview.tsx
import { Container, Typography } from '@mui/material';

const OverviewPage: React.FC = () => (
  <Container>
    <Typography variant="h1" component="h2" gutterBottom>
      Overview
    </Typography>
    <Typography variant="body1">
      Welcome to the COLIEE 2024 competition overview. Here, you will find information about the competition, key dates, and other important details.
    </Typography>
  </Container>
);

export default OverviewPage;
