import React from 'react';
import ResumeImg from '../assets/resume.jpg';

export default function Resume() {
  const config = {
    link: '/AFM-Rajwan.pdf',  // Link to the PDF file
  };

  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5 py-8">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[250px] md:w-[300px] rounded-lg" src={ResumeImg} alt="Resume Thumbnail" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-black">
          <h1 className="text-3xl md:text-4xl text-gray-300 border-b-4 md:border-b-4 border-primary mb-5 w-[120px] md:w-[140px] font-bold text-left">
            Resume
          </h1>
          <p className="pb-5 text-gray-300 text-left">
            You can download my resume
          </p>
          <div className="text-left">
            <a
              className="btn mt-3 py-2 px-4 bg-primary text-white rounded-md hover:bg-primary-dark"
              href={config.link}
              download
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
