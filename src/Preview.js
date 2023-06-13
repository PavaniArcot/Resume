import React from 'react';

function Preview({ resumeData }) {
  return (
    <div>
      <h2>Preview</h2>
      <p>Name: {resumeData.name}</p>
      <p>Email: {resumeData.email}</p>
      <p>Phone: {resumeData.phone}</p>
      <h3>Education</h3>
      <p>{resumeData.education}</p>
      <h3>Experience</h3>
      <p>{resumeData.experience}</p>
    </div>
  );
}

export default Preview;