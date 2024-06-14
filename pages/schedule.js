// pages/schedule.js
import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const SchedulePage = () => (
  <Container>
    <Typography variant="h1" component="h2" gutterBottom>
      Schedule
    </Typography>
    <List>
      {[
        'Nov 01, 2023: Training data release',
        'Dec 13, 2023: Test data release',
        'Dec 13, 2023: Registration deadline for COLIEE',
        'Jan 04, 2024: Submission deadline of Task 3 test runs',
        'Jan 13, 2024: Return of competition test run rankings for Task 3',
        'Jan 18, 2024: Submission deadline for Tasks 1, 2, and 4',
        'Jan 20, 2024: Announcements of rankings for Tasks 1, 2, and 4',
        'Jan 31, 2024: Paper submission deadline for the COLIEE workshop',
        'Feb 29, 2024: Notification of acceptance for the workshop paper',
        'Mar 25, 2024: Camera-ready copy deadline',
        'May 28-31, 2024: 2024 JURISIN workshop',
      ].map((item, index) => (
        <ListItem key={index}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Container>
);

export default SchedulePage;
