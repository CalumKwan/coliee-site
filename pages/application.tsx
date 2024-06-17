import { Container, Typography, Box, Link, Button } from '@mui/material';
import { useState } from 'react';
import ApplicationFormModal from '../components/ApplicationFormModal';
import CaseMemorandumWaiverModal from '../components/CaseMemorandumWaiverModal';
import StatuteENMemorandumWaiverModal from '../components/StatuteENMemorandumWaiverModal';
import StatuteJAMemorandumWaiverModal from '../components/StatuteJAMemorandumWaiverModal';

const ApplicationPage = () => {
  const [openApplicationModal, setOpenApplicationModal] = useState(false);
  const [openCaseMemorandumModal, setOpenCaseMemorandumModal] = useState(false);
  const [openStatuteENModal, setOpenStatuteENModal] = useState(false);
  const [openStatuteJAModal, setOpenStatuteJAModal] = useState(false);

  const handleOpenApplicationModal = () => setOpenApplicationModal(true);
  const handleCloseApplicationModal = () => setOpenApplicationModal(false);

  const handleOpenCaseMemorandumModal = () => setOpenCaseMemorandumModal(true);
  const handleCloseCaseMemorandumModal = () => setOpenCaseMemorandumModal(false);

  const handleOpenStatuteENModal = () => setOpenStatuteENModal(true);
  const handleCloseStatuteENModal = () => setOpenStatuteENModal(false);

  const handleOpenStatuteJAModal = () => setOpenStatuteJAModal(true);
  const handleCloseStatuteJAModal = () => setOpenStatuteJAModal(false);

  return (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom>
        Application Details
      </Typography>
      <Box mb={4}>
        <Typography variant="body1" gutterBottom>
          Potential participants to COLIEE-2024 should respond to this call for participation by submitting an application. To apply, submit the application and memorandums to coliee_participation(at)nii.ac.jp:
        </Typography>
        <ul>
          <li>
            <Button variant="contained" color="primary" onClick={handleOpenApplicationModal}>
              Application form
            </Button>
          </li>
          <li>
            <Button variant="contained" color="primary" onClick={handleOpenCaseMemorandumModal}>
              Memorandum for Tasks 1 and/or 2 (Case law competition)
            </Button>
          </li>
          <li>
            <Button variant="contained" color="primary" onClick={handleOpenStatuteENModal}>
              Memorandum for any of the Statute Law tasks (3 and/or 4) (English version)
            </Button>
          </li>
          <li>
            <Button variant="contained" color="primary" onClick={handleOpenStatuteJAModal}>
              Memorandum for any of the Statute Law tasks (3 and/or 4) (Japanese version)
            </Button>
          </li>
        </ul>
      </Box>

      <Box mb={4}>
        <Typography variant="body1">
          Researchers interested in using the COLIEE datasets outside of the scope of the Competition are allowed to do so. They still need to send the corresponding signed memorandums according to the instructions above, but not the application form. If you are a student, we request that the memorandum(s) is(are) signed by your supervisor.
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="body1">
          We will send an acknowledgement to the email address supplied in the form once we have processed the form.
        </Typography>
      </Box>

      <ApplicationFormModal open={openApplicationModal} handleClose={handleCloseApplicationModal} />
      <CaseMemorandumWaiverModal open={openCaseMemorandumModal} handleClose={handleCloseCaseMemorandumModal} />
      <StatuteENMemorandumWaiverModal open={openStatuteENModal} handleClose={handleCloseStatuteENModal} />
      <StatuteJAMemorandumWaiverModal open={openStatuteJAModal} handleClose={handleCloseStatuteJAModal} />
    </Container>
  );
};

export default ApplicationPage;
