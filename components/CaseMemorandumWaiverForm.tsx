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
    formData.append('name', name || 'N/A');
    formData.append('groupName', groupName || 'N/A');
    formData.append('email', email || 'N/A');
    formData.append('date', currentDate);
    formData.append('signature', signatureDataUrl);
    formData.append('title', title || 'N/A');
    formData.append('division', division || 'N/A');
    formData.append('noticeAddress', noticeAddress || 'N/A');
    formData.append('supervisorSignature', supervisorSignatureDataUrl);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwbKB3KR_ULv5q6LG4cHBzLZAOFb3udKGprPBjiUoJdPxWE291B13FZs_x-SDKuuvq4/exec', {
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
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 shadow-lg rounded-lg">
        {loading && <div className="flex justify-center"><div className="loader"></div></div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter name" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Group Name</label>
              <input type="text" value={groupName} onChange={(e) => setGroupName(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter group name" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter email" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Title (optional)</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter title" />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300">Division (optional)</label>
              <input type="text" value={division} onChange={(e) => setDivision(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter division" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-gray-700 dark:text-gray-300">Notice Address</label>
              <input type="text" value={noticeAddress} onChange={(e) => setNoticeAddress(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Enter notice address" />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 dark:text-gray-300">Signature</label>
            <SignatureCanvas ref={sigPad} penColor="black" canvasProps={{ className: 'border rounded w-full h-32 dark:border-gray-600 dark:bg-gray-700' }} />
            <button type="button" onClick={() => sigPad.current?.clear()} className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Clear Signature</button>
          </div>
          <div className="mt-6">
            <label className="block text-gray-700 dark:text-gray-300">Supervisor Signature (only if you are a student)</label>
            <SignatureCanvas ref={supSigPad} penColor="black" canvasProps={{ className: 'border rounded w-full h-32 dark:border-gray-600 dark:bg-gray-700' }} />
            <button type="button" onClick={() => supSigPad.current?.clear()} className="mt-2 inline-flex justify-center rounded-md border border-transparent bg-gray-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Clear Supervisor Signature</button>
          </div>
          <div className="mt-6">
            <p>By signing this form, you agree to the following terms and conditions:</p>
            <div className="p-4 border rounded-md bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white h-48 overflow-y-scroll">
              <p className="font-bold">MEMORANDUM ON PERMISSION TO USE JURISIN 2024 PARTICIPANT DATA COLLECTION</p>
              <p className="font-bold">Article 1. Description of Data</p>
              <p>1. Task Data is defined as data which appears in Section 1 of the Appendix attached herein.</p>
              <p>2. Raw Submission Data is defined as data submitted by the task participants of the JURISIN COLIEE 2024 workshop.</p>
              <p>3. Evaluation Data is data obtained by using the basic evaluation tools defined by COG against “Raw Submission Data.”</p>
              <p>4. Data Collection consists of the Task Data, Raw Submission Data, and Evaluation Data.</p>
              <p className="font-bold">Article 2. Retention of Rights</p>
              <p>1. The copyright holders of the Task Data are defined in Section 2 of the Appendix attached herein.</p>
              <p>2. USER/USER’S RESEARCH GROUP retains all intellectual property rights relating to the technology and systems developed by USER/USER’s RESEARCH GROUP using the Data Collection.</p>
              <p>3. COG retains all intellectual property rights relating to analytical results obtained by COG and improvements on the Data Collection and such made by COG based on data submitted by USER/USER’s RESEARCH GROUP.</p>
              <p className="font-bold">Article 3. Permission for Use</p>
              <p>COG hereby permits USER/USER’S RESEARCH GROUP to use the Data Collection.</p>
              <p className="font-bold">Article 4. Scope of Authorized Use</p>
              <p>1. USER/USER’S RESEARCH GROUP shall use the Data Collection solely for the purpose of accomplishing the tasks set out in the JURISIN COLIEE 2024 Workshop and for the purpose of research related to the tasks until and inclusive of the last day of June 2024, the end of the term of the JURISIN COLIEE 2024 Workshop.</p>
              <p>2. USER/USER’S RESEARCH GROUP shall restrict that uses of the Data Collection are done only by the following Research Representative and by those who belong to the organization (regardless of its name, such as “laboratory”, “group”, or “project”) that Representative is a member of, and do research jointly with Representative or are graduate students and the like Representative supervises (hereinafter referred to as “Group”).</p>
              <p className="font-bold">Research Representative:</p>
              <p>Name: Title: Affiliation:</p>
              <p>3. USER/USER’S RESEARCH GROUP shall not sell, lend, publish, distribute, or make transmittable to a third party the Data Collection, copies of the Data Collection, or processed data which would enable a third party to reproduce the Data Collection.</p>
              <p>4. USER/USER’S RESEARCH GROUP shall use the Data Collection solely for the purpose of research related to legal information retrieval and natural language processing after the end of the term of the JURISIN COLIEE 2024 workshop.</p>
              <p>5. USER/USER’S RESEARCH GROUP shall maintain a list of users and make this list available to COG without delay upon request from COG.</p>
              <p className="font-bold">Article 5. Method of Provision</p>
              <p>COG will provide the Data Collection to USER/USER’S RESEARCH GROUP using a method which is defined in Section 3 of the Appendix attached herein.</p>
              <p className="font-bold">Article 6. Presentation of Knowledge</p>
              <p>1. USER/USER’S RESEARCH GROUP may present research findings concerning knowledge obtained using the Data Collection provided that the aforementioned presentation is within the limits of this Memorandum.</p>
              <p>2. USER/USER’S RESEARCH GROUP may quote in part data included in the Data Collection if and only if the aforementioned data is required to describe USER/USER’S RESEARCH GROUP’s own research. In such cases, USER/USER’S RESEARCH GROUP shall not violate the rights of the authors, publishers and others protected by copyright.</p>
              <p>3. When USER/USER’S RESEARCH GROUP shall present research findings concerning knowledge obtained using the Raw Submission Data and Evaluation Data, USER/USER’S RESEARCH GROUP shall clearly mention USER/USER’S RESEARCH GROUP’s use of the data and clearly state the experimental nature of the data and the data collection procedure of the data.</p>
              <p>4. USER/USER’S RESEARCH GROUP shall always reference the JURISIN COLIEE 2024 workshop proceedings and clearly state in the paper, thesis or other presentation that USER/USER’S RESEARCH GROUP presents (a) USER/USER’S RESEARCH GROUP’s use of the case law Data, and (b) USER/USER’S RESEARCH GROUP’s use of the Data Collection.</p>
              <p>5. USER/USER’S RESEARCH GROUP shall submit to COG: (a) a publication report including bibliographic information of the publication (the titles of the publication, volume, pages, publishers’ names and dates), and (b) one (1) offprint or one (1) copy of the publication each time when USER/USER’S RESEARCH GROUP publishes the research results using the Data Collection or part of the Data Collection.</p>
              <p>6. Before making public any information data developed using the Data Collection, USER/USER’S RESEARCH GROUP should receive consent in writing from COG in advance.</p>
              <p>7. USER/USER’S RESEARCH GROUP shall not use evaluation results obtained through use of the Data Collection for profitable purposes including advertising, and/or defamatory or slanderous purposes.</p>
              <p className="font-bold">Article 7. Duration of Memorandum</p>
              <p>1. This Memorandum shall be in effect from the date first above written until and inclusive of the last day of June 2024. The effect of the Memorandum shall be extended automatically to another fiscal year, unless a written objection is issued either by COG or by USER/USER’S RESEARCH GROUP more than one month before the expiration date of the Memorandum. This shall apply to consecutive fiscal years as well.</p>
              <p>2. Notwithstanding the preceding paragraph, if permission for use of the Raw Submission Data and Evaluation Data is requested by USER/USER’S RESEARCH GROUP which shall extend the effect of the Memorandum, USER/USER’S RESEARCH GROUP shall separately enter into a new Memorandum with COG, in addition to the written notice more than one month before the expiration date of the Memorandum.</p>
              <p>3. If USER/USER’S RESEARCH GROUP would not like to automatically renew the original terms and the renewal terms, after expiration of the term, USER/USER’S RESEARCH GROUP shall promptly delete the Data Collection from any computer or media onto which it has been copied. If the organizational structure of USER/USER’S RESEARCH GROUP or the affiliation of USER/USER’S RESEARCH GROUP is changed, USER/USER’S RESEARCH GROUP shall report the change to COG without delay and, if necessary, shall sign another Memorandum.</p>
              <p className="font-bold">Article 8. Submission of Reports</p>
              <p>1. USER/USER’S RESEARCH GROUP shall submit to COG a report on research outcomes in accordance with procedures specified at the JURISIN COLIEE 2024 Workshop.</p>
              <p>2. USER/USER’S RESEARCH GROUP shall submit to COG a report concerning research activities conducted by USER/USER’S RESEARCH GROUP during the duration of the Memorandum using the Data Collection more than one month before the expiration date of the Memorandum.</p>
              <p className="font-bold">Article 9. Termination of Data Use</p>
              <p>1. If the use of data is deemed to be in violation of the Memorandum, USER/USER’S RESEARCH GROUP shall, upon instructions from COG, immediately discontinue use of the Data Collection and promptly delete the Data Collection and all data obtained by processing the Data Collection from any computer or media onto which it has been copied. USER/USER’S RESEARCH GROUP shall submit a document attesting to deletion of the data to COG.</p>
              <p>2. If there is a request to discontinue the use of data from the copyright holder(s) or their executor(s) of the Data Collection, USER/USER’S RESEARCH GROUP must delete said data from any computer or media onto which it has been copied upon instructions from COG. USER/USER’S RESEARCH GROUP shall submit a document attesting to deletion of the data to COG.</p>
              <p className="font-bold">Article 10. Exemption from Liability</p>
              <p>COG and the copyright holder(s) or their executor(s) of the Data Collection shall not for any reason whatsoever be responsible for losses arising from USER/USER’S RESEARCH GROUP’s use of the Data Collection.</p>
              <p className="font-bold">Article 11. Undefined Issues</p>
              <p>Should any issues undefined in this Memorandum arise, both parties shall confer in good faith and resolve such issues.</p>
              <p className="font-bold">Article 12. Jurisdiction</p>
              <p>All disputes relevant to this Memorandum shall be subject to the exclusive jurisdiction of the Tokyo District Court of Japan as court of first instance. The validity, construction and performance of this Memorandum shall be governed by, and interpreted in accordance with, the law of Japan.</p>
              <p>APPENDIX-JURISIN COLIEE 2024 Legal Information Entailment: Case Law Competition Data</p>
              <p>TASK PARTICIPANT DATA COLLECTION (FOR JURISIN COLIEE WORKSHOP 2024 COMPETITION PARTICIPANTS)</p>
              <p className="font-bold">Section 1.</p>
              <p>1. The formal name of the competition is "JURISIN Workshop 2024 Competition on Legal Information Extraction/Entailment: Case Law Competition Data" and the term “Task Data” consists of the COLIEE 2024 Workshop Training/Test Data.</p>
              <p>2. The JURISIN COLIEE 2024 Workshop Training/Test Data consists of a set of query cases, a set of Canadian legal judgments, and relevant judgment annotation to query cases, and paragraph annotation of relevant cases which entail the decision of query cases that COG created using Canadian case law, which appear in Table A.  The data will be made available depending on the chosen competition tasks.</p>
              <p>Table A</p>
              <p>A.1 Case law competition Data</p>
              <p>A.1.1 The training/test data for Task 1 in the following list</p>
              <p>• Samples from Compass Law’s Canadian Legal Judgments Data published before 2024</p>
              <p>• Cases List: relevant judgments provided by human expert</p>
              <p>A.1.2 The training/test data for Task 2 in the following list</p>
              <p>• Samples from Compass Law’s Canadian Legal Judgments Data published before 2024</p>
              <p>• Corresponding entailment annotations provided by human experts</p>
              <p className="font-bold">Section 2.</p>
              <p>COG retains all rights under the Copyright Law relating to annotations.</p>
              <p className="font-bold">Section 3.</p>
              <p>COG will provide the Data Collection to USER/USER’S RESEARCH GROUP by transferring the data files electronically.</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" onClick={() => {
              sigPad.current?.clear();
              supSigPad.current?.clear();
              setName('');
              setGroupName('');
              setEmail('');
              setTitle('');
              setDivision('');
              setNoticeAddress('');
            }} className="text-sm font-semibold text-gray-900 dark:text-gray-300">Cancel</button>
            <button type="submit" className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'}`} disabled={loading}>Submit Data</button>
          </div>
        </form>
      </div>
    </div>
  );
}
