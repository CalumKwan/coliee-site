import { Container, Typography, Box, Link } from '@mui/material';

const OverviewPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      COLIEE Overview
    </Typography>

    <Box mb={4}>
      <Typography variant="body1" gutterBottom>
        Welcome to the 11th Competition on Legal Information Extraction and Entailment (COLIEE-2024). This competition is run in association with the 
        <Link href="http://research.nii.ac.jp/~ksatoh/jurisin2024/" target="_blank" rel="noopener noreferrer">
          International Workshop on Juris-Informatics (JURISIN 2024)
        </Link>.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The COLIEE-2024 workshop will be held during JURISIN 2024 from May 28-31, 2024, at the 
        <Link href="https://www.actcity.jp/english/" target="_blank" rel="noopener noreferrer">
          ACT CITY Hamamatsu, Hamamatsu, Shizuoka, Japan
        </Link>.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Latest Updates
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2024/#results" target="_blank" rel="noopener noreferrer">
          Results for the case law tasks have been released!
        </Link>
      </Typography>
      <Typography variant="body1" gutterBottom>
        <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2024/CFP.pdf" target="_blank" rel="noopener noreferrer">
          Download Call for Participation
        </Link>
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Registration and Contact
      </Typography>
      <Typography variant="body1" gutterBottom>
        COLIEE registration is due by December 31, 2023. If you wish to use previous COLIEE data for a trial, please contact 
        <Link href="mailto:coliee_participation@nii.ac.jp">
          coliee_participation@nii.ac.jp
        </Link>.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Competition Tasks
      </Typography>
      <Typography variant="body1" gutterBottom>
        COLIEE-2024 includes four tasks:
      </Typography>
      <ul>
        <li>
          <Typography variant="body1">
            <strong>Task 1:</strong> Legal Case Retrieval
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Task 2:</strong> Legal Case Entailment
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Task 3:</strong> Statute Law Retrieval
          </Typography>
        </li>
        <li>
          <Typography variant="body1">
            <strong>Task 4:</strong> Legal Textual Entailment
          </Typography>
        </li>
      </ul>
    </Box>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Sponsors
      </Typography>
      <Typography variant="body1" gutterBottom>
        Sponsored by:
      </Typography>
      <ul>
        <li>
          <Link href="http://www.amii.ca/" target="_blank" rel="noopener noreferrer">
            Alberta Machine Intelligence Institute (AMII)
          </Link>
        </li>
        <li>
          <Link href="http://www.ualberta.ca/" target="_blank" rel="noopener noreferrer">
            University of Alberta
          </Link>
        </li>
        <li>
          <Link href="http://www.nii.ac.jp/en/" target="_blank" rel="noopener noreferrer">
            National Institute of Informatics (NII)
          </Link>
        </li>
        <li>
          <Link href="http://jurisage.com/" target="_blank" rel="noopener noreferrer">
            Jurisage
          </Link>
        </li>
        <li>
          <Link href="http://intellicon.co.kr/" target="_blank" rel="noopener noreferrer">
            Intellicon
          </Link>
        </li>
      </ul>
    </Box>
  </Container>
);

export default OverviewPage;
