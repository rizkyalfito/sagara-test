import { useState } from 'react';
import certificationsImg from '../assets/img/certifications.png'; 

const certifications = [
  {
    title: 'Front END Developer',
    description: 'Evaluates your proficiency in frontend programming languages and other relevant frontend technologies.',
    details: 'Gain recognition as a qualified frontend developer, enhance your career prospects, and open doors to exciting job opportunities.',
  },
  {
    title: 'Back END Developer',
    description: 'Evaluates your proficiency in backend programming languages and technologies.',
    details: 'Gain recognition as a qualified backend developer, enhance your career prospects, and open doors to exciting job opportunities.',
  },
  {
    title: 'QUALITY ASSURANCE',
    description: 'Ensures the quality of software through rigorous testing and validation processes.',
    details: 'Gain recognition as a qualified quality assurance professional, enhance your career prospects, and open doors to exciting job opportunities.',
  },
  {
    title: 'UI/UX DESIGN',
    description: 'Focuses on designing user interfaces and experiences that are visually appealing and user-friendly.',
    details: 'Gain recognition as a qualified UI/UX designer, enhance your career prospects, and open doors to exciting job opportunities.',
  },
];

const CertificationList = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const handleButtonClick = (index) => {
    setSelectedCertification(index);
  };

  return (
    <div className="flex flex-col items-center p-4 gap-8">
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-4xl font-semibold text-red-800 text-center">
          Empower Yourself with
        </h1>
        <h2 className="text-4xl font-extrabold text-red-800 text-center">
          Our Certification
        </h2>
      </div>
      <div className="flex flex-wrap items-center gap-4 justify-center md:flex-nowrap">
        {certifications.map((cert, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`flex justify-center items-center px-4 py-2 rounded-md text-sm md:text-base ${
              selectedCertification === index ? 'bg-red-800 text-white' : 'bg-white text-black border border-gray-300'
            }`}
          >
            {cert.title}
          </button>
        ))}
      </div>

      {selectedCertification !== null && selectedCertification === 0 ? (
        <div className="flex flex-col md:flex-row items-center gap-6 mt-6 p-4 rounded-lg shadow-md">
          <div className="relative w-full md:w-80 h-48">
            <img src={certificationsImg} alt={certifications[selectedCertification].title} className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-gradient-to-t from-red-800 to-transparent rounded-lg"></div>
          </div>
          <div className="flex flex-col justify-between h-auto md:h-48 ml-0 md:ml-4 mt-4 md:mt-0">
            <h3 className="text-xl md:text-2xl font-bold text-red-800">
              {certifications[selectedCertification].title}
            </h3>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              {certifications[selectedCertification].description}
            </p>
            <p className="text-sm md:text-base text-gray-700 mb-2">
              {certifications[selectedCertification].details}
            </p>
            <div className="flex justify-center mt-4">
              <button className="bg-red-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-[#A51535]">
                Get Details
              </button>
            </div>
          </div>
        </div>
      ) : selectedCertification !== null ? (
        <div className="flex flex-col items-center mt-6 p-4">
          <h2 className="text-3xl font-bold text-red-800">
            404 Not Found
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default CertificationList;
