/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaFilter, FaTimes } from 'react-icons/fa';

const FilterModal = ({ open, onClose, onFilterChange }) => {
  if (!open) return null;

  const [selectedInstance, setSelectedInstance] = useState('');

  const handleFilter = () => {
    onFilterChange(selectedInstance);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <FaTimes className="w-6 h-6 text-gray-400" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Filter Students</h2>
        <div className="space-y-4">
          <select
            value={selectedInstance}
            onChange={(e) => setSelectedInstance(e.target.value)}
            className="w-full p-2 border rounded-lg"
          >
            <option value="">Select Instance</option>
            <option value="Universitas Indonesia">Universitas Indonesia</option>
            <option value="Universitas Singaperbangsa Karawang">Universitas Singaperbangsa Karawang</option>
          </select>
          <div className="flex justify-end mt-4">
            <button
              onClick={handleFilter}
              className="bg-red-500 text-white p-2 rounded-lg flex items-center"
            >
              <FaFilter className="mr-2" /> Apply Filter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
