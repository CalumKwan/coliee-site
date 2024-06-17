import { Container, Typography, Box, Link } from '@mui/material';

const ResultsPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      Task Winners
    </Typography>
    <Box mb={4}>
      <Typography variant="body1">
        Task 1: TQM. Full list of results available <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2024/task1_results.html" target="_blank">here</Link>
      </Typography>
      <Typography variant="body1">
        Task 2: AMHR. Full list of results available <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2024/task2_results.html" target="_blank">here</Link>
      </Typography>
      <Typography variant="body1">
        Results for the Statute Law tasks have been sent directly to participants.
      </Typography>
    </Box>
  </Container>
);

export default ResultsPage;
