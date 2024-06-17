import { Container, Typography } from '@mui/material';

const CorpusPage = () => (
  <Container>
    <Typography variant="h3" component="h2" gutterBottom>
      Corpus Structure
    </Typography>
    <Typography variant="body1" paragraph>
      The structure of the test corpora is derived from a general XML representation developed for use in RITEVAL, one of the tasks of the NII Testbeds and Community for Information access Research (NTCIR) project, as described at the following URL:
    </Typography>
    <Typography variant="body1" paragraph>
      <a href="http://sites.google.com/site/ntcir11riteval/" target="_blank" rel="noopener noreferrer">
        http://sites.google.com/site/ntcir11riteval/
      </a>
    </Typography>
    <Typography variant="body1" paragraph>
      The RITEVAL format was developed for the general sharing of information retrieval on a variety of domains.
    </Typography>
    <Typography variant="h4" component="h3" gutterBottom>
      Task 1
    </Typography>
    <Typography variant="body1" paragraph>
      The corpus is given as a flat list of files containing all query and noticed cases, for both the training and test datasets. The training dataset is described in a json file containing a mapping between the query case and a list of noticed cases, as in the example below:
    </Typography>
    <Typography variant="body1" component="pre">
      {`{
  "000001.txt": ["000005.txt", "012101.txt"],
  "003423.txt": ["398421.txt", "012101.txt", "173651.txt"],
  "012831.txt": ["000001.txt"],
  ...
}`}
    </Typography>
    <Typography variant="body1" paragraph>
      The above is an example of a golden labels file for Task 1 containing three query cases (or "base cases"). The first query case is the file "000001.txt", which has 2 noticed cases ("000005.txt" and "012101.txt"). The second query case is the file named "003423.txt", which has 3 noticed cases (whose file names are "021.txt" and "105.txt"). The third query case ("012831.txt") has only one noticed case: "000001.txt".
    </Typography>
    <Typography variant="body1" paragraph>
      The test dataset json file contains only the list of query cases, and the task consists in populating the list of noticed cases for each query case.
    </Typography>
    <Typography variant="h4" component="h3" gutterBottom>
      Task 2
    </Typography>
    <Typography variant="body1" paragraph>
      The corpus structure for Task 2 is given below:
    </Typography>
    <Typography variant="body1" component="pre">
      {`{
  "001": ["013.txt"],
  "002": ["003.txt", "045.txt"],
  ...
}`}
    </Typography>
    <Typography variant="body1" paragraph>
      The above is an example of Task 2 training data containing 2 files. Each query case has a separate folder, which is named with the query case id. That folder contains a file named "base_case.txt", which contains the raw text of the query case (with a few fragments suppressed), a file named "entailed_fragment.txt", which contains a fragment from the query case that is entailed by one or more paragraphs of a referenced case, and a folder named "paragraphs". That folder contains the paragraphs of said referenced case, one paragraph per file, which are named 001.txt to [n].txt (n being the number of paragraphs in the referenced case). The expected answer for each case is given as a list of paragraphs in the mapping file.
    </Typography>
    <Typography variant="body1" paragraph>
      Given the sample above, the file structure for the corpus would be:
    </Typography>
    <Typography variant="body1" component="pre">
      {`task2_training_corpus
+--- 001
+------- base_case.txt
+------- entailed_fragment.txt
+------- paragraphs
+----------- 001.txt
+----------- 002.txt
+----------- ...
+----------- 046.txt
+--- 002
+------- base_case.txt
+------- entailed_fragment.txt
+------- paragraphs
+----------- 001.txt
+----------- 002.txt
+----------- ...
+----------- 211.txt
+--- train_labels.json`}
    </Typography>
    <Typography variant="body1" paragraph>
      For the query case 001, there are 46 paragraphs in the referenced case (among which is the expected answer, 013.txt, as given in the golden labels JSON file shown before). For the query case 002, there are 211 paragraphs in the referenced case, among which are the two which entail the fragment of text for that case (003.txt and 045.txt, as given in the golden labels file). For the case whose id is "001", the expected answer is "013.txt", meaning the entailed fragment (ie, the decision) in that query can be entailed from the paragraph id 013 in the given noticed case. The decision in the query is not the final decision of the case. This is a decision for a part of the case, and a paragraph that supports this decision should be identified in the given noticed case. The test corpora will not include the JSON file mapping, and the task is to predict which paragraph(s) entail(s) the decision given by the entailed_fragment.txt file in each case.
    </Typography>
    <Typography variant="h4" component="h3" gutterBottom>
      Tasks 3 and 4
    </Typography>
    <Typography variant="body1" paragraph>
      The format of the COLIEE competition corpora derived from an NTCIR representation of confirmed relationships between questions and the articles and cases relevant to answering the questions, as in the following example:
    </Typography>
    <Typography variant="body1" component="pre">
      {`<pair label="Y" id="H18-1-2">		
  <t1>	
    (Seller's Warranty in cases of Superficies or Other Rights)Article 566
    (1)In cases where the subject matter of the sale is encumbered with for the purpose of a superficies, an emphyteusis, an easement, a right of retention or a pledge, if the buyer does not know the same and cannot achieve the purpose of the contract on account thereof, the buyer may cancel the contract. In such cases, if the contract cannot be cancelled, the buyer may only demand compensation for damages.
    (2)The provisions of the preceding paragraph shall apply mutatis mutandis in cases where an easement that was referred to as being in existence for the benefit of immovable property that is the subject matter of a sale, does not exist, and in cases where a leasehold is registered with respect to the immovable property.
    (3)In the cases set forth in the preceding two paragraphs, the cancellation of the contract or claim for damages must be made within one year from the time when the buyer comes to know the facts.
    (Seller's Warranty in cases of Mortgage or Other Rights) Article 567
    (1)If the buyer loses his/her ownership of immovable property that is the object of a sale because of the exercise of an existing statutory lien or mortgage, the buyer may cancel the contract.
    (2)If the buyer preserves his/her ownership by incurring expenditure for costs, he/she may claim reimbursement of those costs from the seller.
    (3)In the cases set forth in the preceding two paragraphs, the buyer may claim compensation if he/she suffered loss.
  </t1>	
  <t2>	
    There is a limitation period on pursuance of warranty if there is restriction due to superficies on the subject matter, but there is no restriction on pursuance of warranty if the seller's rights were revoked due to execution of the mortgage.
  </t2>	
</pair>`}
    </Typography>
    <Typography variant="body1" paragraph>
      The above is an example where query id "H18-1-2" is confirmed to be answerable from article numbers 566 and 567 (relevant to Task 3). The pair label "Y" in this example means the answer for this query is "Yes", which is entailed from the relevant articles (relevant to Task 4 and Task 5).
    </Typography>
    <Typography variant="body1" paragraph>
      For the Tasks 3 and 4, the training data will be the same. The groups who participate only in the Task 3 can disregard the pair label.
    </Typography>
  </Container>
);

export default CorpusPage;
