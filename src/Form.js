import React from 'react';

function Form({ resumeData, handleChange }) {
  return (
    <div>
      <h2>Personal Information</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={resumeData.name}
        onChange={handleChange}
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={resumeData.email}
        onChange={handleChange}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={resumeData.phone}
        onChange={handleChange}
      />
      <h2>Education</h2>
      <label htmlFor="education">Education:</label>
      <textarea
        id="education"
        name="education"
        value={resumeData.education}
        onChange={handleChange}
      />
      <h2>Experience</h2>
      <label htmlFor="experience">Experience:</label>
      <textarea
        id="experience"
        name="experience"
        value={resumeData.experience}
        onChange={handleChange}
      />
    </div>
  );
}

export default Form;