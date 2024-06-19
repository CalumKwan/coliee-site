import React from 'react';
import { Modal, Box, Typography, Button, DialogActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useTheme } from 'next-themes';

interface ApplicationFormModalProps {
  open: boolean;
  handleClose: () => void;
}

const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({ open, handleClose }) => {
  const { theme } = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: theme === 'dark' ? 'dark' : 'light',
    },
  });

  const handleOpenPDF = () => {
    window.open('https://sites.ualberta.ca/~rabelo/COLIEE2024/application.pdf', '_blank');
  };

  return (
    <ThemeProvider theme={muiTheme}>
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
            <Button onClick={handleOpenPDF} variant="contained" color="primary" sx={{ color: 'text.primary' }}>
              Open Application Form
            </Button>
            <Button onClick={handleClose} color="primary" sx={{ color: 'text.primary' }}>
              Cancel
            </Button>
          </DialogActions>
        </Box>
      </Modal>
    </ThemeProvider>
  );
};

export default ApplicationFormModal;
