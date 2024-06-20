import { useState, useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';

export default function CaseMemorandumWaiverForm() {
  const [name, setName] = useState('');
  const [groupName, setGroupName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [division, setDivision] = useState('');
  const [noticeAddress, setNoticeAddress] = useState('');
  const [loading, setLoading] = useState(false);

  const sigPad = useRef<SignatureCanvas | null>(null);
  const supSigPad = useRef<SignatureCanvas | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const currentDate = new Date().toISOString().split('T')[0];
    const signatureDataUrl = sigPad.current?.getTrimmedCanvas().toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '') || '';
    const supervisorSignatureDataUrl = supSigPad.current?.getTrimmedCanvas().toDataURL('image/png').replace(/^data:image\/(png|jpg);base64,/, '') || '';

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
    <div className="max-w-2xl mx-auto p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      {loading && <div className="mb-4 text-center text-gray-700 dark:text-gray-300">Submitting...</div>}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Group Name
            </label>
            <input
              type="text"
              id="groupName"
              name="groupName"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Title (optional)
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div>
            <label htmlFor="division" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Division (optional)
            </label>
            <input
              type="text"
              id="division"
              name="division"
              value={division}
              onChange={(e) => setDivision(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="noticeAddress" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
              Notice Address
            </label>
            <input
              type="text"
              id="noticeAddress"
              name="noticeAddress"
              value={noticeAddress}
              onChange={(e) => setNoticeAddress(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="signature" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
            Signature
          </label>
          <SignatureCanvas
            ref={sigPad}
            penColor="black"
            canvasProps={{ width: 500, height: 200, className: 'border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700' }}
          />
          <button
            type="button"
            onClick={() => sigPad.current?.clear()}
            className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Clear Signature
          </button>
        </div>
        <div className="mt-6">
          <label htmlFor="supervisorSignature" className="block text-sm font-medium text-gray-900 dark:text-gray-300">
            Supervisor Signature (only if you are a student)
          </label>
          <SignatureCanvas
            ref={supSigPad}
            penColor="black"
            canvasProps={{ width: 500, height: 200, className: 'border border-gray-300 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700' }}
          />
          <button
            type="button"
            onClick={() => supSigPad.current?.clear()}
            className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          >
            Clear Supervisor Signature
          </button>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            onClick={() => {
              sigPad.current?.clear();
              supSigPad.current?.clear();
              setName('');
              setGroupName('');
              setEmail('');
              setTitle('');
              setDivision('');
              setNoticeAddress('');
            }}
            className="text-sm font-semibold text-gray-900 dark:text-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'}`}
            disabled={loading}
          >
            Submit Data
          </button>
        </div>
      </form>
    </div>
  );
}
