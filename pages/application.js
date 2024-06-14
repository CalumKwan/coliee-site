// pages/application.js
import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import CaseMemorandumWaiverModal from '../components/CaseMemorandumWaiverModal';

const ApplicationPage = () => {
  const [openWaiverModal, setOpenWaiverModal] = useState(false);

  const handleOpenWaiverModal = () => {
    setOpenWaiverModal(true);
  };

  const handleCloseWaiverModal = () => {
    setOpenWaiverModal(false);
  };

  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        Application
      </Typography>
      <Button variant="contained" color="primary" onClick={handleOpenWaiverModal}>
        Memorandum for Tasks 1 and/or 2 (Case law competition)
      </Button>
      <CaseMemorandumWaiverModal open={openWaiverModal} handleClose={handleCloseWaiverModal} />
    </Container>
  );
};

export default ApplicationPage;
