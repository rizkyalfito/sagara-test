import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo from '../assets/img/sagara-logo-white.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 flex flex-col">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-6 px-16">
        <div className="flex flex-col items-start mb-6 md:mb-0">
          <img src={logo} alt="Company Logo" className="w-48 mb-3" />
          <p className="text-sm text-gray-400 mb-3">
            Plan, build, grow digital products. Continuously delivering impact.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaTwitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <FaInstagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mb-6 md:mb-0">
          <div className="flex flex-col gap-3">
            <h3 className="text-md font-semibold">Pages</h3>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Careers</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Contact</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">IT Certification</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-md font-semibold">Careers</h3>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Front End Developer</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Back End Developer</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">Quality Assurance</a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">UI/UX Design</a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="text-md font-semibold">Contact</h3>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <FaPhoneAlt className="w-4 h-4" /> +62 856-4097-7356
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <FaEnvelope className="w-4 h-4" /> consult@sagara.asia
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <FaMapMarkerAlt className="w-4 h-4" /> South Jakarta and Bandung, Indonesia.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-200 mt-4">
        <p className='text-sm font-light'>Copyright © 2024 PT. Sagara Asia Teknologi</p>
      </div>
    </footer>
  );
};

export default Footer;
