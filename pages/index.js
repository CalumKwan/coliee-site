import Link from 'next/link';
import { Button } from '@mui/material'; // Importing MUI Button

const HomePage = () => (
  <div className="homepage">
    <h1>COLIEE 2024</h1>
    <p>Welcome to the Competition on Legal Information Extraction/Entailment (COLIEE) 2024. Explore the tasks, schedule, and submission guidelines below.</p>
    <nav>
      <Link href="/tasks" passHref>
        <Button variant="contained" color="primary" className="nav-link">Tasks</Button>
      </Link>
      <Link href="/schedule" passHref>
        <Button variant="contained" color="primary" className="nav-link">Schedule</Button>
      </Link>
      <Link href="/corpus" passHref>
        <Button variant="contained" color="primary" className="nav-link">Corpus Structure</Button>
      </Link>
      <Link href="/waiver" passHref>
        <Button variant="contained" color="primary" className="nav-link">Memorandum Waiver for Tasks 1 and/or 2</Button>
      </Link>
    </nav>
  </div>
);

export default HomePage;
