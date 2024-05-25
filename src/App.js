import React, { useState } from 'react';
import SignaturePad from 'react-signature-canvas';
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    name: '',
    email: ''
  });
  const [signature, setSignature] = useState('');
  const sigPad = React.useRef({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSignature = () => {
    setSignature(sigPad.current.getTrimmedCanvas().toDataURL('image/png'));
  };

  const clearSignature = () => {
    sigPad.current.clear();
    setSignature('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', inputs, signature);
    
  };

  return (
    <div className="App">
      <h1>COLIEE Site Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={inputs.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={inputs.email} onChange={handleChange} />
        </label>
        <div>
          Signature:
          <SignaturePad ref={sigPad} canvasProps={{className: 'signatureCanvas'}} />
          <button type="button" onClick={handleSignature}>Save Signature</button>
          <button type="button" onClick={clearSignature}>Clear Signature</button>
        </div>
        <button type="submit">Submit</button>
      </form>
      {signature && (
        <img src={signature} alt="Signature" />
      )}
    </div>
  );
}

export default App;
