import { Container, Typography, Box, Link } from '@mui/material';

const SubmissionGuidelinesPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      Submission Guidelines
    </Typography>
    <Box mb={4}>
      <Typography variant="body1">
        Participants are required to submit a paper on their method and experimental results. At least one of the authors of an accepted paper has to present the paper at the COLIEE session of JURISIN 2024. Papers should conform to the standards set out at the JURISIN 2024 webpage:
      </Typography>
      <ul>
        <li>
          <Link href="https://research.nii.ac.jp/~ksatoh/jurisin2024" target="_blank">
            JURISIN 2024
          </Link>
        </li>
        <li>
          <Link href="https://research.nii.ac.jp/~ksatoh/jurisin2024/#Submissions" target="_blank">
            Submission page at JURISIN 2024
          </Link>
        </li>
      </ul>
    </Box>

    <Box mb={4}>
      <Typography variant="body1">
        We will publish COLIEE papers in one of two categories according to the quality of the papers:
      </Typography>
      <ul>
        <li>
          Proceedings in LNAI series by Springer Verlag which will (electronically) be distributed at the COLIEE workshop
        </li>
        <li>
          Local Proceedings published by IsAI-JSAI (parent symposium of JURISIN 2024) for papers which are not qualified for LNAI publication, but are selected to be presented at the COLIEE workshop.
        </li>
      </ul>
    </Box>

    <Box mb={4}>
      <Typography variant="body1">
        Participants should clearly mention what dataset was used (for example: pretrained by Wikipedia dump data as of 2022xxxx, fine-tuned by...) for reproducibility purposes. Participants can use any external data, but it is assumed that they do not use the test dataset and/or something which could directly contain the correct answers of the test dataset.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Results Submission Format
      </Typography>
      <Box mb={4}>
        <Typography variant="h5" component="h5" gutterBottom>
          Task 1
        </Typography>
        <Typography variant="body1" gutterBottom>
          For Task 1, a submission should consist of a single ASCII text file. Use a single space to separate columns, with three columns per line as follows:
        </Typography>
        <pre>
          000001 000018 univABC{'\n'}
          000001 000045 univABC{'\n'}
          000001 000130 univABC{'\n'}
          000002 000433 univABC{'\n'}
          ...
        </pre>
        <Typography variant="body1" gutterBottom>
          where:
          <ol>
            <li>The first column is the query file name.</li>
            <li>The second column is the official case number of the retrieved case.</li>
            <li>The third column is called the "run tag" and should be a unique identifier for the submitting group, i.e., each run should have a different tag that identifies the group. Please restrict run tags to 12 or fewer letters and numbers, with no punctuation.</li>
          </ol>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" component="h5" gutterBottom>
          Task 2
        </Typography>
        <Typography variant="body1" gutterBottom>
          For Task 2, a submission should consist of a single ASCII text file. Use a single space to separate columns, with three columns per line as follows:
        </Typography>
        <pre>
          001 013 univABC{'\n'}
          002 037 univABC{'\n'}
          002 002 univABC{'\n'}
          003 008 univABC{'\n'}
          ...
        </pre>
        <Typography variant="body1" gutterBottom>
          where:
          <ol>
            <li>The first column is the query id.</li>
            <li>The second column is the paragraph number which entails the decision.</li>
            <li>The third column is called the "run tag" and should be a unique identifier for the submitting group, i.e., each run should have a different tag that identifies the group. Please restrict run tags to 12 or fewer letters and numbers, with no punctuation.</li>
          </ol>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" component="h5" gutterBottom>
          Task 3
        </Typography>
        <Typography variant="body1" gutterBottom>
          Submission format in Task 3 is the TREC eval format used in trec_eval program. Use a single space to separate columns, with six columns per line as follows:
        </Typography>
        <pre>
          H21-5-3 Q0 213 1 0.8 univABC{'\n'}
        </pre>
        <Typography variant="body1" gutterBottom>
          Where
          <ol>
            <li>The first column is the query id.</li>
            <li>The second column is "iter" for trec_eval and not used in the evaluation. Information of the column will be ignored. But please write Q0 in this column.</li>
            <li>The third column is the official article number of the retrieved article.</li>
            <li>The fourth column is the rank of the retrieved articles.</li>
            <li>The fifth column is the similarity value (float value) of the retrieved articles.</li>
            <li>The sixth column is called the "run tag" and should be a unique identifier for the submitting group, i.e., each run should have a different tag that identifies the group. Please restrict run tags to 12 or fewer letters and numbers, with no punctuation.</li>
          </ol>
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h5" component="h5" gutterBottom>
          Task 4
        </Typography>
        <Typography variant="body1" gutterBottom>
          For Task 4, again a submission should consist of a single ASCII text file. Use a single space to separate columns, with three columns per line as follows:
        </Typography>
        <pre>
          H18-1-2 Y univABC{'\n'}
          H18-5-A N univABC{'\n'}
          H19-19-I Y univABC{'\n'}
          H21-5-3 N univABC{'\n'}
          ...
        </pre>
        <Typography variant="body1" gutterBottom>
          where:
          <ol>
            <li>The first column is the query id.</li>
            <li>"Y" or "N" indicating whether the Y/N question was confirmed to be true ("Y") by the relevant articles, or confirmed to be false ("N").</li>
            <li>The third column is called the "run tag" and should be a unique identifier for the submitting group, i.e., each run should have a different tag that identifies the group. Please restrict run tags to 12 or fewer letters and numbers, with no punctuation.</li>
          </ol>
        </Typography>
      </Box>
    </Box>
  </Container>
);

export default SubmissionGuidelinesPage;
