import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaSave, FaTimes } from 'react-icons/fa';

const StudentFormModal = ({ open, onClose, onFilterChange }) => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    phone: '',
    instance: '',
    createdAt: '',
    password: '',
    retypePassword: '',
  });

  if (!open) return null; // Don't render the modal if `open` is false

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission logic
    onFilterChange(student);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 cursor-pointer"
        >
          <FaTimes className="w-6 h-6 text-gray-400" />
        </button>
        <h2 className="text-lg font-semibold mb-4">Add Student</h2>
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Name"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="tel"
          name="phone"
          value={student.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="text"
          name="instance"
          value={student.instance}
          onChange={handleChange}
          placeholder="Instance"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="date"
          name="createdAt"
          value={student.createdAt}
          onChange={handleChange}
          placeholder="Created At"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="password"
          name="password"
          value={student.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full p-2 border rounded-lg mb-2"
        />
        <input
          type="password"
          name="retypePassword"
          value={student.retypePassword}
          onChange={handleChange}
          placeholder="Retype Password"
          className="w-full p-2 border rounded-lg mb-2"
        />
        {/* Image upload functionality can be added here */}
        <div className="flex justify-end mt-4">
          <button
            onClick={handleSubmit}
            className="bg-red-500 text-white p-2 rounded-lg flex items-center"
          >
            <FaSave className="mr-2" /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

StudentFormModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};

export default StudentFormModal;
