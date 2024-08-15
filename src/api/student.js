/* eslint-disable no-unused-vars */
// src/api/student.js

import { useQuery, useMutation, useQueryClient } from 'react-query';

// Dummy data
const dummyStudents = [
  {
    id: '1',
    name: 'Rani Sari',
    email: 'rani.sari@univindonesia.ac.id',
    phone: '081234567890',
    instance: 'Universitas Indonesia',
    createdAt: '2024-07-15',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: '2',
    name: 'Budi Santoso',
    email: 'budi.santoso@univipb.ac.id',
    phone: '081298765432',
    instance: 'Institut Pertanian Bogor',
    createdAt: '2024-06-25',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  // Add more dummy data as needed
];

// Fetch students - use dummy data instead of actual API call
export const fetchStudents = async () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dummyStudents), 500); // Simulate network delay
  });
};

// Add student - simulate adding a student
export const addStudent = async (student) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(student), 500); // Simulate network delay
  });
};

// Delete student - simulate deleting a student
export const deleteStudent = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 500); // Simulate network delay
  });
};

// Edit student - simulate editing a student
export const editStudent = async (student) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(student), 500); // Simulate network delay
  });
};

// Custom hooks for fetching students
export const useStudents = () => {
  return useQuery('students', fetchStudents);
};

// Custom hooks for mutations
export const useAddStudent = () => {
  const queryClient = useQueryClient();
  return useMutation(addStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students');
    },
  });
};

export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students');
    },
  });
};

export const useEditStudent = () => {
  const queryClient = useQueryClient();
  return useMutation(editStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries('students');
    },
  });
};
