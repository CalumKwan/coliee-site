import React, { useState } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import CaseMemorandumWaiverModal from '../components/CaseMemorandumWaiverModal';
import StatuteENMemorandumWaiverModal from '../components/StatuteENMemorandumWaiverModal';
import StatuteJAMemorandumWaiverModal from '../components/StatuteJAMemorandumWaiverModal';
import ApplicationFormModal from '../components/ApplicationFormModal';

const ApplicationPage = () => {
  const [openCaseModal, setOpenCaseModal] = useState(false);
  const [openENModal, setOpenENModal] = useState(false);
  const [openJAModal, setOpenJAModal] = useState(false);
  const [openApplicationModal, setOpenApplicationModal] = useState(false);

  const handleOpenCaseModal = () => setOpenCaseModal(true);
  const handleCloseCaseModal = () => setOpenCaseModal(false);

  const handleOpenENModal = () => setOpenENModal(true);
  const handleCloseENModal = () => setOpenENModal(false);

  const handleOpenJAModal = () => setOpenJAModal(true);
  const handleCloseJAModal = () => setOpenJAModal(false);

  const handleOpenApplicationModal = () => setOpenApplicationModal(true);
  const handleCloseApplicationModal = () => setOpenApplicationModal(false);

  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Application
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button variant="contained" color="primary" onClick={handleOpenCaseModal} style={{ marginBottom: '16px' }}>
          Case Law (EN) Memorandum
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpenENModal} style={{ marginBottom: '16px' }}>
          Statute Law (EN) Memorandum
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpenJAModal} style={{ marginBottom: '16px' }}>
          Statute Law (JA) Memorandum
        </Button>
        <Button variant="contained" color="primary" onClick={handleOpenApplicationModal} style={{ marginBottom: '16px' }}>
          Apply for Competition
        </Button>
      </Box>
      <CaseMemorandumWaiverModal open={openCaseModal} handleClose={handleCloseCaseModal} />
      <StatuteENMemorandumWaiverModal open={openENModal} handleClose={handleCloseENModal} />
      <StatuteJAMemorandumWaiverModal open={openJAModal} handleClose={handleCloseJAModal} />
      <ApplicationFormModal open={openApplicationModal} handleClose={handleCloseApplicationModal} />
    </Container>
  );
};

export default ApplicationPage;
