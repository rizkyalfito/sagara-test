/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from '../assets/img/sagara-logo-white.png';

export default function Sidebar({ onMenuClick, isOpen, toggleSidebar }) { // Tambahkan isOpen dan toggleSidebar sebagai props
  const [activeItem, setActiveItem] = useState('dashboard');

  const handleClick = (item) => {
    setActiveItem(item);
    onMenuClick(item);
  };

  return (
    <>
      {/* Sidebar */}
      <aside
        id="default-sidebar"
        className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 bg-[#1C1C1C]`}
        aria-label="Sidebar"
      >
        <div className="relative flex flex-col h-full px-3 py-4 overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            type="button"
            className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200 sm:hidden"
            aria-label="Close sidebar"
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 01-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 010-1.414z"
              />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex flex-col items-start p-6 gap-12">
            <img src={logo} alt="Logo" className="w-44 h-auto" />
            
            {/* Menu */}
            <ul className="space-y-4 font-medium text-[#9E9E9E]">
              {[
                { label: "Dashboard", value: "dashboard", icon: "M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" },
                { label: "Students", value: "students", icon: "M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(item.value);
                    }}
                    className={`flex items-center p-2 rounded-lg group ${
                      activeItem === item.value
                        ? 'bg-[#A51535] text-white'
                        : 'hover:bg-[#8e1218] text-[#9E9E9E]'
                    }`}
                  >
                    <svg
                      className="flex-shrink-0 w-5 h-5 transition duration-75 group-hover:text-gray-200"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d={item.icon} />
                    </svg>
                    <span className="flex-1 ms-3 whitespace-nowrap">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
