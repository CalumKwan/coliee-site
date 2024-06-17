import { Container, Typography, List, ListItem, ListItemText } from '@mui/material';

const SchedulePage = () => (
  <Container>
    <Typography variant="h3" component="h2" gutterBottom>
      Schedule
    </Typography>
    <List>
      <ListItem>
        <ListItemText primary="Nov 01, 2023: Training data release" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dec 13, 2023: Test data release" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Dec 13, 2023: Registration deadline for COLIEE" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Jan 04, 2024: Submission deadline of Task 3 test runs" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Jan 13, 2024: Return of competition test run rankings/assessments for task 3 and announcements of answers (relevant article(s) for each question) for task 4" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Jan 18, 2024: Submission deadline for Tasks 1, 2, and 4" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Jan 20, 2024: Announcements of rankings/assessments for Tasks 1, 2, 4" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Jan 31, 2024: Paper submission deadline for the COLIEE workshop" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Feb 29, 2024: Notification of acceptance for the COLIEE workshop paper" />
      </ListItem>
      <ListItem>
        <ListItemText primary="Mar 25, 2024: Camera-ready copy deadline" />
      </ListItem>
      <ListItem>
        <ListItemText primary="May 28-31, 2024: 2024 JURISIN workshop (one day for the COLIEE workshop - TBD)" />
      </ListItem>
    </List>
    <Typography variant="body1">
      <strong>Submission deadline: 23:59 AoE for all dates above.</strong>
    </Typography>
  </Container>
);

export default SchedulePage;
