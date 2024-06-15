import React from 'react';
import { Modal, Box, Typography, Button, DialogActions } from '@mui/material';

const ApplicationFormModal = ({ open, handleClose }) => {
  const handleOpenPDF = () => {
    window.open('https://sites.ualberta.ca/~rabelo/COLIEE2024/application.pdf', '_blank');
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          width: '50%',
          height: '20%',
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Application Form
        </Typography>
        <DialogActions>
          <Button onClick={handleOpenPDF} variant="contained" color="primary">
            Open Application Form
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </Modal>
  );
};

export default ApplicationFormModal;
