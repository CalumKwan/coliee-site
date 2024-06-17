import { Container, Typography, Box } from '@mui/material';
import Link from 'next/link';

const EvaluationPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      Measuring the Competition Results
    </Typography>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Case Law Competition Results (Tasks 1 and 2)
      </Typography>
      <Typography variant="body1">
        For <Link href="/tasks#task1">Tasks 1 and 2</Link>, the evaluation metrics will be precision, recall, and F-measure:
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>Precision</b> = 
        <Box component="span">
          (<i>the number of correctly retrieved cases(paragraphs) for all queries</i>)
        </Box>
        <br />
        (<i>the number of retrieved cases(paragraphs) for all queries</i>)
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>Recall</b> = 
        <Box component="span">
          (<i>the number of correctly retrieved cases(paragraphs) for all queries</i>)
        </Box>
        <br />
        (<i>the number of relevant cases(paragraphs) for all queries</i>)
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>F-measure</b> = 
        <Box component="span">
          (<i>2 x Precision x Recall</i>)
        </Box>
        <br />
        (<i>Precision + Recall</i>)
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        In the evaluation of Task 1 and Task 2, we simply use micro-average (evaluation measure is calculated using the results of all queries) rather than macro-average (evaluation measure is calculated for each query and then take average).
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h4" component="h4" gutterBottom>
        Statute Law Competition Results (Tasks 3 and 4)
      </Typography>
      <Typography variant="body1">
        For <Link href="/tasks#task3">Task 3</Link>, the evaluation metrics will be precision, recall, and F2-measure (since IR process is a pre-process to select candidate articles for providing candidates which will be used in the entailment process, we put emphasis on recall), and it is:
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>Precision</b> = 
        <Box component="span">
          <i>average of (the number of correctly retrieved articles for each query)</i>
        </Box>
        <br />
        (<i>the number of retrieved articles for each query</i>)
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>Recall</b> = 
        <Box component="span">
          <i>average of (the number of correctly retrieved articles for each query)</i>
        </Box>
        <br />
        (<i>the number of relevant articles for each query</i>)
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>F2-measure</b> = 
        <Box component="span">
          (<i>5 x Precision x Recall</i>)
        </Box>
        <br />
        (<i>4 x Precision + Recall</i>)
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        In addition to the above evaluation measures, ordinal information retrieval measures such as Mean Average Precision and R-precision can be used for discussing the characteristics of the submission results.
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        In COLIEE 2024, the method used to calculate the final evaluation score of all queries is macro-average (evaluation measure is calculated for each query and their average is used as the final evaluation measure) instead of micro-average (evaluation measure is calculated using results of all queries).
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        For <Link href="/tasks#task4">Task 4</Link>, the evaluation measure will be accuracy, with respect to whether the yes/no question was correctly confirmed:
      </Typography>
      <Typography variant="body1" component="div" sx={{ mt: 2 }}>
        <b>Accuracy</b> = 
        <Box component="span">
          (<i>the number of queries which were correctly confirmed as true or false</i>)
        </Box>
        <br />
        (<i>the number of all queries</i>)
      </Typography>
    </Box>
  </Container>
);

export default EvaluationPage;
