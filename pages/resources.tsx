import { Container, Typography, Link, Box } from '@mui/material';

const ResourcesPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      Resources
    </Typography>
    <Box mb={4}>
      <Typography variant="body1">
        Previous COLIEE editions:
      </Typography>
      <ul>
        <li>
          <Link href="http://sites.ualberta.ca/~rabelo/COLIEE2023/" target="_blank">
            COLIEE 2023
          </Link>: 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2023/COLIEE2023_summary.pdf" target="_blank">
            Summary Paper
          </Link> | 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2023/COLIEE2023proceedings.pdf" target="_blank">
            Complete Proceedings
          </Link>
        </li>
        <li>
          <Link href="http://sites.ualberta.ca/~rabelo/COLIEE2022/" target="_blank">
            COLIEE 2022
          </Link>: 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2023/COLIEE2022_summary.pdf" target="_blank">
            Summary Paper
          </Link>
        </li>
        <li>
          <Link href="http://sites.ualberta.ca/~rabelo/COLIEE2021/" target="_blank">
            COLIEE 2021
          </Link>: 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2022/COLIEE2021_summary.pdf" target="_blank">
            Summary Paper
          </Link> | 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2021/COLIEE2021proceedings.pdf" target="_blank">
            Complete Proceedings
          </Link>
        </li>
        <li>
          <Link href="http://sites.ualberta.ca/~rabelo/COLIEE2020/" target="_blank">
            COLIEE 2020
          </Link>: 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2021/COLIEE_2020_summary.pdf" target="_blank">
            Summary Paper
          </Link>
        </li>
        <li>
          <Link href="http://sites.ualberta.ca/~rabelo/COLIEE2019/" target="_blank">
            COLIEE 2019
          </Link>: 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2020/COLIEE2019_summary.pdf" target="_blank">
            Summary Paper
          </Link>
        </li>
        <li>
          <Link href="http://sites.ualberta.ca/~miyoung2/COLIEE2018/" target="_blank">
            COLIEE 2018
          </Link>: 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2019/COLIEE2018_CL_summary.pdf" target="_blank">
            Case Law Tasks
          </Link> | 
          <Link href="https://sites.ualberta.ca/~rabelo/COLIEE2019/COLIEE2018_SL_summary.pdf" target="_blank">
            Statute Law Tasks
          </Link>
        </li>
        <li>
          <Link href="http://webdocs.cs.ualberta.ca/~miyoung2/COLIEE2017/" target="_blank">
            COLIEE 2017
          </Link>
        </li>
        <li>
          <Link href="http://webdocs.cs.ualberta.ca/~miyoung2/COLIEE2016/" target="_blank">
            COLIEE 2016
          </Link>
        </li>
        <li>
          <Link href="http://webdocs.cs.ualberta.ca/~miyoung2/COLIEE2015/" target="_blank">
            COLIEE 2015
          </Link>
        </li>
        <li>
          <Link href="http://webdocs.cs.ualberta.ca/~miyoung2/jurisin_task/index.html" target="_blank">
            COLIEE 2014
          </Link>
        </li>
      </ul>
    </Box>
  </Container>
);

export default ResourcesPage;
