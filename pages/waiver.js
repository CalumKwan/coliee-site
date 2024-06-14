// pages/waiver.js
import { useState, useRef } from 'react';
import { Container, Typography, TextField, Button, CircularProgress } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

const Waiver = () => {
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
      const response = await fetch('https://script.google.com/macros/s/AKfycbzsNRvUlA5e-aACST_byX2xTVho-66u4sleqnvJGxEjtuxm7JTvJWyFPsDwKwvm97l0/exec', {
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
    }
  };

  return (
    <Container>
      <Typography variant="h1" component="h2" gutterBottom>
        COLIEE Site Form Test
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
        <Button type="submit" variant="contained" color="primary" style={{ marginTop: 20 }}>Submit Data</Button>
      </form>
    </Container>
  );
};

export default Waiver;
