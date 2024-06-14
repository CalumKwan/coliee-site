// pages/tasks.js
import { Container, Typography } from '@mui/material';

const TasksPage = () => (
  <Container>
    <Typography variant="h1" component="h2" gutterBottom>
      Tasks
    </Typography>
    {[
      { title: 'Task 1', description: 'Description of Task 1...' },
      { title: 'Task 2', description: 'Description of Task 2...' },
      { title: 'Task 3', description: 'Description of Task 3...' },
      { title: 'Task 4', description: 'Description of Task 4...' },
    ].map((task, index) => (
      <section key={index}>
        <Typography variant="h2" component="h3" gutterBottom>
          {task.title}
        </Typography>
        <Typography variant="body1">
          {task.description}
        </Typography>
      </section>
    ))}
  </Container>
);

export default TasksPage;
