import React, { useState, useRef } from 'react';
import { Modal, Box, Typography, TextField, Button, CircularProgress, DialogActions } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

const StatuteJAMemorandumWaiverModal = ({ open, handleClose }) => {
  const [name, setName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [division, setDivision] = useState('');
  const [noticeAddress, setNoticeAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const sigPad = useRef({});
  const supSigPad = useRef({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const currentDate = new Date().toISOString().split('T')[0];
    const signatureDataUrl = sigPad.current.getTrimmedCanvas().toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');
    const supervisorSignatureDataUrl = supSigPad.current.getTrimmedCanvas().toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '');

    const formData = new FormData();
    formData.append('name', name || 'Placeholder Name');
    formData.append('groupName', groupName || 'Placeholder Group');
    formData.append('email', email || 'placeholder@example.com');
    formData.append('date', currentDate);
    formData.append('signature', signatureDataUrl);
    formData.append('title', title || 'Placeholder Title');
    formData.append('division', division || 'Placeholder Division');
    formData.append('noticeAddress', noticeAddress || 'Placeholder Address');
    formData.append('supervisorSignature', supervisorSignatureDataUrl);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbxa4qcTngBk2Lu4N_ZPnacg44PJ7M_PCm3j2w5xJAFvPydnQJDUlIG4v2dUmBrN43JJ8g/exec', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.text();
      console.log('Response:', result);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    } finally {
      setLoading(false);
      handleClose();
    }
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
          width: '80%',
          height: '80%',
          overflow: 'auto',
        }}
      >
        <Typography id="modal-title" variant="h6" component="h2">
          Statute JA Memorandum Waiver Form
        </Typography>
        {loading && <CircularProgress />}
        <form onSubmit={handleSubmit}>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth margin="normal" />
          <TextField label="Group Name" value={groupName} onChange={(e) => setGroupName(e.target.value)} fullWidth margin="normal" />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} fullWidth margin="normal" />
          <TextField label="Title (optional)" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth margin="normal" />
          <TextField label="Division (optional)" value={division} onChange={(e) => setDivision(e.target.value)} fullWidth margin="normal" />
          <TextField label="Notice Address" value={noticeAddress} onChange={(e) => setNoticeAddress(e.target.value)} fullWidth margin="normal" />
          <div>
            <Typography variant="subtitle1">Signature:</Typography>
            <SignatureCanvas
              ref={sigPad}
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: 'sigCanvas' }}
            />
            <Button variant="contained" onClick={() => sigPad.current.clear()} style={{ marginTop: 10 }}>Clear Signature</Button>
          </div>
          <div>
            <Typography variant="subtitle1">Supervisor Signature (only if you are a student):</Typography>
            <SignatureCanvas
              ref={supSigPad}
              penColor="black"
              canvasProps={{ width: 500, height: 200, className: 'supSigCanvas' }}
            />
            <Button variant="contained" onClick={() => supSigPad.current.clear()} style={{ marginTop: 10 }}>Clear Supervisor Signature</Button>
          </div>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
              Submit Data
            </Button>
          </DialogActions>
        </form>
      </Box>
    </Modal>
  );
};

export default StatuteJAMemorandumWaiverModal;
