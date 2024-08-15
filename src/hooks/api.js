import { useQuery } from '@tanstack/react-query';

const fetchStudents = async () => {
  const response = await fetch('/api/students');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const useStudents = () => {
  return useQuery(['students'], fetchStudents);
};
