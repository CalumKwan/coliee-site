import { Container, Typography, Box } from '@mui/material';

const TasksPage = () => (
  <Container>
    <Typography variant="h3" component="h3" gutterBottom>
      Task Details
    </Typography>
    <Box mb={4}>
      <Typography variant="h5" component="h5" gutterBottom>
        Task 1: Legal Case Retrieval
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our goal is to explore and evaluate legal document retrieval technologies that are both effective and reliable.
        The task investigates the performance of systems that search a set of case laws that support the unseen case law. 
        The goal of the task is to return 'noticed cases' in the given collection to a query. 
        We call a case is 'noticed' to a query if the case is referenced by the query case. 
        In this task, the references are redacted from the query case contents, because our goal is to measure how accurately a machine can capture decision-supporting cases for a given case.
      </Typography>
      <Typography variant="body1" gutterBottom>
        A corpus composed of Federal Court of Canada case laws will be provided. The process of executing the new query cases over the existing cases and generating the experimental runs should be entirely automatic. All query and noticed cases will be provided as a pool. In the training data, we will also disclose which are the noticed cases for each query case. In the test data, only the query cases will be given and the task is to predict which cases should be noticed with respect to each of the test query cases.
      </Typography>
      <Typography variant="body1" gutterBottom>
        There should be no human intervention at any stage, including modifications to your retrieval system motivated by an inspection of the test queries. You won't have access to the test labels before you submit your runs.
      </Typography>
      <Typography variant="body1" gutterBottom>
        At most three runs from each group will be assessed. The submission format and evaluation methods are described below.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h5" component="h5" gutterBottom>
        Task 2: Legal Case Entailment
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our goal is to predict the decision of a new case by entailment from previous relevant cases. As a simpler version of predicting a decision, a decision of a new case and a noticed case will be given as a query. Then, your legal textual entailment system identifies which paragraph in the noticed case entails the decision, by comparing the meanings between queries and the paragraphs.
      </Typography>
      <Typography variant="body1" gutterBottom>
        The task investigates the performance of systems that identifies a paragraph that entails the decision of an unseen case. Training data consists of triples of a query, a noticed case, and a paragraph number of the noticed case by which the decision of the query is entailed. The process of executing the queries over the noticed cases and generating the experimental runs should be entirely automatic. Test data will include only queries and noticed cases, but no paragraph numbers.
      </Typography>
      <Typography variant="body1" gutterBottom>
        There should be no human intervention at any stage, including modifications to your retrieval system motivated by an inspection of the test queries. 'Decision', in this context, does not mean the final decision of a case, but rather a conclusion expressed by the judge which is entailed by one or more particular paragraphs from the noticed case. In our dataset, this information is packaged in a file named 'entailed_fragment.txt'.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h5" component="h5" gutterBottom>
        Task 3: Statute Law Retrieval
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our goal is to explore and evaluate legal document retrieval technologies that are both effective and reliable.
        The task investigates the performance of systems that search a static set of civil law articles using previously unseen queries. The goal of the task is to return relevant articles in the collection to a query. We call an article as "Relevant" to a query if the query sentence can be answered Yes/No, entailed from the meaning of the article. 
      </Typography>
      <Typography variant="body1" gutterBottom>
        If combining the meanings of more than one article (e.g., "A", "B", and "C") can answer a query sentence, then all the articles ("A", "B", and "C") are considered "Relevant". If a query can be answered by an article "D", and it can be also answered by another article "E" independently, we also consider both of the articles "D" and "E" are "Relevant". This task requires the retrieval of all the articles that are relevant to answering a query.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Japanese civil law articles (English translation besides Japanese) will be provided, and training data consists of pairs of a query and relevant articles. The process of executing the queries over the articles and generating the experimental runs should be entirely automatic. Test data will include only queries but no relevant articles.
      </Typography>
      <Typography variant="body1" gutterBottom>
        There should be no human intervention at any stage, including modifications to your retrieval system motivated by an inspection of the queries. You should not materially modify your retrieval system between the time you downloaded the queries and the time you submit your runs.
      </Typography>
      <Typography variant="body1" gutterBottom>
        At most three runs from each group will be assessed. The submission format and evaluation methods are described below.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h5" component="h5" gutterBottom>
        Task 4: Legal Textual Entailment
      </Typography>
      <Typography variant="body1" gutterBottom>
        Our goal is to construct Yes/No question answering systems for legal queries, by entailment from the relevant articles.
        If a 'Yes/No' legal bar exam question is given, your legal information retrieval system retrieves relevant Civil Law articles. Then, the task investigates the performance of systems that answer 'Yes' or 'No' to previously unseen queries by comparing the meanings between queries and your retrieved Civil Law articles. Training data consists of triples of a query, relevant article(s), a correct answer "Y" or "N". Test data will include only queries and relevant articles, but no 'Y/N' label.
      </Typography>
      <Typography variant="body1" gutterBottom>
        There should be no human intervention at any stage, including modifications to your retrieval system motivated by an inspection of the queries. You should not materially modify your retrieval system between the time you downloaded the queries and the time you submit your runs.
      </Typography>
      <Typography variant="body1" gutterBottom>
        At most three runs for each group should be assessed. The submission format and evaluation methods are described below.
      </Typography>
    </Box>

    <Box mb={4}>
      <Typography variant="h5" component="h5" gutterBottom>
        Important Notice
      </Typography>
      <Typography variant="body1" gutterBottom>
        Participants should clearly mention what dataset was used (for example: pretrained by Wikipedia dump data as of 2022xxxx, fine-tuned by...) for reproducibility purposes. Participants can use any external data, but it is assumed that they do not use the test dataset and/or something which could directly contain the correct answers of the test dataset.
      </Typography>
    </Box>
  </Container>
);

export default TasksPage;
