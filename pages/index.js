import { useState } from 'react';

const Home = () => {
  const [name, setName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [division, setDivision] = useState('');
  const [noticeAddress, setNoticeAddress] = useState('');

  const handleSubmit = async () => {
    const currentDate = new Date().toISOString().split('T')[0]; // Get current UTC date

    const testData = {
      name: name || 'Placeholder Name',
      groupName: groupName || 'Placeholder Group',
      email: email || 'placeholder@example.com',
      date: currentDate,
      signature: 'Placeholder Signature',
      title: title || 'Placeholder Title',
      division: division || 'Placeholder Division',
      noticeAddress: noticeAddress || 'Placeholder Address',
      supervisorSignature: 'Placeholder Supervisor Signature',
    };

    try {
      console.log('Submitting data:', testData);
      const response = await fetch('/api/updateSpreadsheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log('Response:', result);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data');
    }
  };

  return (
    <div>
      <h1>COLIEE Site Form Test</h1>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Group Name:</label>
        <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Division:</label>
        <input type="text" value={division} onChange={(e) => setDivision(e.target.value)} />
      </div>
      <div>
        <label>Notice Address:</label>
        <input type="text" value={noticeAddress} onChange={(e) => setNoticeAddress(e.target.value)} />
      </div>
      <button type="button" onClick={handleSubmit}>Submit Test Data</button>
    </div>
  );
};

export default Home;
