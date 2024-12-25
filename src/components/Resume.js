import React from 'react';
import ResumeImg from '../assets/resume.jpg'; // This is an image preview of your resume, optional

export default function Resume() {
  const config = {
    link: '/resume.pdf', // This points to your PDF file in the public folder
  };

  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      {/* Image Section (optional) */}
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume Thumbnail" />
      </div>

      {/* Resume Information Section */}
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-black">
          <h1 className="text-4xl text-gray-300 border-b-4 border-primary mb-5 w-[140px] font-bold">Resume</h1>
          
          {/* Link to Download or View Resume */}
          <p className="pb-5 text-gray-300">
            You can view or download my resume 
            <a
              className="btn"
              href={config.link}   // This links to your PDF file
              target="_blank"      // Opens the PDF in a new tab
              rel="noopener noreferrer"
              download              // Allows users to download the file directly
            >
              {' '} Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
