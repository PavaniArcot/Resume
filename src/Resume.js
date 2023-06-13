import React, { useState } from 'react';
import Form from './Form';
import Preview from './Preview';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setResumeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <h1>Resume Builder</h1>
      <Form resumeData={resumeData} handleChange={handleChange} />
      <Preview resumeData={resumeData} />
    </div>
  );
}

export default App;