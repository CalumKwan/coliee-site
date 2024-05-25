import React, { useState, useRef } from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import SignaturePad from 'react-signature-canvas';
import './App.css';

const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SHEETS_ID;
const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, '\n');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

async function appendSpreadsheet(data) {
  try {
    await doc.useServiceAccountAuth({
      client_email: CLIENT_EMAIL,
      private_key: PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(data);
  } catch (e) {
    console.error('Error: ', e);
  }
}

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    signature: '',
    supervisorSignature: '',
  });
  const sigPad = useRef(null);
  const supervisorSigPad = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const saveSignature = (type) => {
    if (type === 'user') {
      const signed = sigPad.current.getTrimmedCanvas().toDataURL('image/png');
      setFormData(prev => ({ ...prev, signature: signed }));
    } else {
      const signed = supervisorSigPad.current.getTrimmedCanvas().toDataURL('image/png');
      setFormData(prev => ({ ...prev, supervisorSignature: signed }));
    }
  };

  const clearSignature = (type) => {
    if (type === 'user') {
      sigPad.current.clear();
      setFormData(prev => ({ ...prev, signature: '' }));
    } else {
      supervisorSigPad.current.clear();
      setFormData(prev => ({ ...prev, supervisorSignature: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await appendSpreadsheet(formData);
    alert('Form submitted!');
  };

  return (
    <div className="App">
      <h1>COLIEE Site Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <div>
          Signature:
          <SignaturePad ref={sigPad} canvasProps={{className: 'signatureCanvas'}} />
          <button type="button" onClick={() => saveSignature('user')}>Save Signature</button>
          <button type="button" onClick={() => clearSignature('user')}>Clear Signature</button>
        </div>
        <div>
          Supervisor Signature:
          <SignaturePad ref={supervisorSigPad} canvasProps={{className: 'signatureCanvas'}} />
          <button type="button" onClick={() => saveSignature('supervisor')}>Save Signature</button>
          <button type="button" onClick={() => clearSignature('supervisor')}>Clear Signature</button>
        </div>
        <button type="submit">Submit</button>
      </form>
      {formData.signature && (
        <img src={formData.signature} alt="User Signature" />
      )}
      {formData.supervisorSignature && (
        <img src={formData.supervisorSignature} alt="Supervisor Signature" />
      )}
    </div>
  );
}

export default App;
