import React from 'react';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import './App.css';

const SPREADSHEET_ID = process.env.REACT_APP_GOOGLE_SHEETS_ID;
const CLIENT_EMAIL = process.env.REACT_APP_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY.replace(/\\n/g, '\n');

async function appendSpreadsheet(data) {
  try {
    // Initialize JWT auth
    const serviceAccountAuth = new JWT({
      email: CLIENT_EMAIL,
      key: PRIVATE_KEY,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Initialize GoogleSpreadsheet with JWT
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth);

    // Load document properties and worksheets
    console.log('Authenticating...');
    await doc.loadInfo();
    console.log('Loaded spreadsheet:', doc.title);

    // Assuming "Waiver Info" is the second sheet
    const sheet = doc.sheetsByIndex[1];
    console.log('Adding row...');
    await sheet.addRow(data);
    console.log('Row added successfully!');
  } catch (e) {
    console.error('Error:', e);
  }
}

function App() {
  const handleTestText = async () => {
    const testData = { name: 'Test Name' };
    console.log('Submitting test data:', testData);
    await appendSpreadsheet(testData);
    alert('Test text submitted!');
  };

  return (
    <div className="App">
      <h1>COLIEE Site Form Test</h1>
      <button type="button" onClick={handleTestText}>Submit Test Text</button>
    </div>
  );
}

export default App;
