import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  details?: string;
}

const TextInput: React.FC<TextInputProps> = ({ label, name, value, onChange, details }) => (
  <div className="mb-4">
    <label className="block text-gray-700 dark:text-gray-300">{label}</label>
    {details && <p className="text-sm text-gray-500 dark:text-gray-400">{details}</p>}
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

interface BooleanInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const BooleanInput: React.FC<BooleanInputProps> = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 dark:text-gray-300">{label}</label>
    <div className="mt-1 flex items-center space-x-4">
      <label className="inline-flex items-center">
        <input
          type="radio"
          name={name}
          value="yes"
          checked={value === 'yes'}
          onChange={onChange}
          className="form-radio text-indigo-600"
        />
        <span className="ml-2">Yes</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          name={name}
          value="no"
          checked={value === 'no'}
          onChange={onChange}
          className="form-radio text-indigo-600"
        />
        <span className="ml-2">No</span>
      </label>
    </div>
  </div>
);

interface TextAreaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({ label, name, value, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 dark:text-gray-300">{label}</label>
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      rows={4}
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
      placeholder={`Enter ${label.toLowerCase()}`}
    />
  </div>
);

interface TeamMember {
  name: string;
  affiliation: string;
  title: string;
  email: string;
  mailingList: string;
}

interface FormData {
  groupID: string;
  groupName: string;
  organization: string;
  piName: string;
  piAffiliation: string;
  piTitle: string;
  piEmail: string;
  piMailingList: string;
  piPostalAddress: string;
  piPhone: string;
  contactName: string;
  contactAffiliation: string;
  contactTitle: string;
  contactEmail: string;
  contactPostalAddress: string;
  contactPhone: string;
  teamMembers: TeamMember[];
  additionalMembers: string;
  task1: string;
  task2: string;
  task3: string;
  task4: string;
  caseMemorandum: string;
  statuteENMemorandum: string;
  statuteJAMemorandum: string;
  [key: string]: any; // Index signature to handle dynamic keys
}

const ApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    groupID: '',
    groupName: '',
    organization: '',
    piName: '',
    piAffiliation: '',
    piTitle: '',
    piEmail: '',
    piMailingList: 'no',
    piPostalAddress: '',
    piPhone: '',
    contactName: '',
    contactAffiliation: '',
    contactTitle: '',
    contactEmail: '',
    contactPostalAddress: '',
    contactPhone: '',
    teamMembers: Array(4).fill({
      name: '',
      affiliation: '',
      title: '',
      email: '',
      mailingList: 'no'
    }),
    additionalMembers: '',
    task1: 'no',
    task2: 'no',
    task3: 'no',
    task4: 'no',
    caseMemorandum: 'no',
    statuteENMemorandum: 'no',
    statuteJAMemorandum: 'no'
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTeamMemberChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedTeamMembers = [...formData.teamMembers];
    updatedTeamMembers[index] = { ...updatedTeamMembers[index], [name]: value };
    setFormData((prev) => ({ ...prev, teamMembers: updatedTeamMembers }));
  };
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item: TeamMember, index: number) => {
          (Object.keys(item) as (keyof TeamMember)[]).forEach((subKey) => {
            formDataToSend.append(`teamMembers[${index}][${subKey}]`, item[subKey] || 'Placeholder');
          });
        });
      } else {
        formDataToSend.append(key, formData[key] || 'Placeholder');
      }
    });
  
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzRxMKbg7jbxOGpRgf44d0SRsiTKB0H1XnLZtWKcpAdWdnO7XZQBsXNVfiD7ak82oNH0g/exec', {
        method: 'POST',
        body: formDataToSend
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
          <TextInput 
            label="Group ID*" 
            name="groupID" 
            value={formData.groupID} 
            onChange={handleChange} 
            details="- Your group ID must not exceed 5 characters and must be of the form [A-z0-9]+. Please do not use any non-alphanumeric characters. Use this group ID as your Run ID when you submit your task results."
          />
          <TextInput label="Group Name*" name="groupName" value={formData.groupName} onChange={handleChange} />
          <TextInput label="Organization*" name="organization" value={formData.organization} onChange={handleChange} />
          <TextInput 
            label="Principal Investigator Name*" 
            name="piName" 
            value={formData.piName} 
            onChange={handleChange} 
            details="- Please note that students cannot be registered as a Principal Investigator of the group. If you are a student, the Principal Investigator should be your supervisor or advisor. A graduate student can be registered as a “contact person.”"
          />
          <TextInput label="PI Affiliation*" name="piAffiliation" value={formData.piAffiliation} onChange={handleChange} />
          <TextInput label="PI Title*" name="piTitle" value={formData.piTitle} onChange={handleChange} />
          <TextInput 
            label="PI Email Address*" 
            name="piEmail" 
            value={formData.piEmail} 
            onChange={handleChange}
            details="- Please enter the email address whose domain is the name of your organization"
          />
          <BooleanInput label="Register PI on Mailing List?" name="piMailingList" value={formData.piMailingList} onChange={handleChange} />
          <TextInput label="PI Postal Address*" name="piPostalAddress" value={formData.piPostalAddress} onChange={handleChange} />
          <TextInput label="PI Phone*" name="piPhone" value={formData.piPhone} onChange={handleChange} />
          <TextInput 
            label="Contact Person Name" 
            name="contactName" 
            value={formData.contactName} 
            onChange={handleChange}
            details="- Please enter the contact person’s name, if the contact person is not the Principal Investigator."
          />
          <TextInput label="Contact Affiliation" name="contactAffiliation" value={formData.contactAffiliation} onChange={handleChange} />
          <TextInput label="Contact Title" name="contactTitle" value={formData.contactTitle} onChange={handleChange} />
          <TextInput label="Contact Email Address" name="contactEmail" value={formData.contactEmail} onChange={handleChange} />
          <TextInput label="Contact Postal Address" name="contactPostalAddress" value={formData.contactPostalAddress} onChange={handleChange} />
          <TextInput label="Contact Phone" name="contactPhone" value={formData.contactPhone} onChange={handleChange} />

          {formData.teamMembers.map((member, index) => (
            <div key={index}>
              <h2 className="text-lg font-semibold">Team Member {index + 1}</h2>
              <TextInput label="Name" name="name" value={member.name} onChange={(e) => handleTeamMemberChange(index, e)} />
              <TextInput label="Affiliation" name="affiliation" value={member.affiliation} onChange={(e) => handleTeamMemberChange(index, e)} />
              <TextInput label="Title" name="title" value={member.title} onChange={(e) => handleTeamMemberChange(index, e)} />
              <TextInput label="Email" name="email" value={member.email} onChange={(e) => handleTeamMemberChange(index, e)} />
              <BooleanInput label="Register on Mailing List?" name="mailingList" value={member.mailingList} onChange={(e) => handleTeamMemberChange(index, e)} />
            </div>
          ))}

          <TextArea label="Additional Members" name="additionalMembers" value={formData.additionalMembers} onChange={handleChange} />

          <h2 className="text-lg font-semibold">Task Participation</h2>
          <BooleanInput label="Task 1 Participation" name="task1" value={formData.task1} onChange={handleChange} />
          <BooleanInput label="Task 2 Participation" name="task2" value={formData.task2} onChange={handleChange} />
          <BooleanInput label="Task 3 Participation" name="task3" value={formData.task3} onChange={handleChange} />
          <BooleanInput label="Task 4 Participation" name="task4" value={formData.task4} onChange={handleChange} />

          <h2 className="text-lg font-semibold">Signed Memorandum</h2>
          <BooleanInput label="Case Memorandum Waiver Form" name="caseMemorandum" value={formData.caseMemorandum} onChange={handleChange} />
          <BooleanInput label="Statute EN Memorandum Waiver Form" name="statuteENMemorandum" value={formData.statuteENMemorandum} onChange={handleChange} />
          <BooleanInput label="Statute JA Memorandum Waiver Form" name="statuteJAMemorandum" value={formData.statuteJAMemorandum} onChange={handleChange} />

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="button" onClick={() => setFormData({
              groupID: '',
              groupName: '',
              organization: '',
              piName: '',
              piAffiliation: '',
              piTitle: '',
              piEmail: '',
              piMailingList: 'no',
              piPostalAddress: '',
              piPhone: '',
              contactName: '',
              contactAffiliation: '',
              contactTitle: '',
              contactEmail: '',
              contactPostalAddress: '',
              contactPhone: '',
              teamMembers: Array(4).fill({
                name: '',
                affiliation: '',
                title: '',
                email: '',
                mailingList: 'no'
              }),
              additionalMembers: '',
              task1: 'no',
              task2: 'no',
              task3: 'no',
              task4: 'no',
              caseMemorandum: 'no',
              statuteENMemorandum: 'no',
              statuteJAMemorandum: 'no'
            })} className="text-sm font-semibold text-gray-900 dark:text-gray-300">
              Cancel
            </button>
            <button type="submit" className={`rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${loading ? 'bg-gray-400' : 'bg-indigo-600 hover:bg-indigo-500 focus-visible:outline-indigo-600'}`} disabled={loading}>
              Submit Data
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplicationForm;
