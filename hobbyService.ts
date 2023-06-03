import axios from 'axios';
import { Hobby } from './types';

const API_URL = 'http://localhost:8000/api/hobbies';

export const fetchHobbies = async (): Promise<Hobby[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createHobby = async (hobby: Hobby): Promise<Hobby> => {
  const response = await axios.post(API_URL, hobby);
  return response.data;
};

export const updateHobby = async (hobby: Hobby): Promise<Hobby> => {
  const response = await axios.put(`${API_URL}/${hobby.id}`, hobby);
  return response.data;
};

export const deleteHobby = async (hobbyId: number): Promise<void> => {
  await axios.delete(`${API_URL}/${hobbyId}`);
};

// Add sample books
export const addSampleBooks = async (): Promise<void> => {
  const books: Hobby[] = [
    {
      id: 1,
      name: 'The Great Gatsby',
      description: 'A novel by F. Scott Fitzgerald',
      tags: ['Classic', 'Fiction'],
    },
    {
      id: 2,
      name: 'To Kill a Mockingbird',
      description: 'A novel by Harper Lee',
      tags: ['Classic', 'Fiction'],
    },
    {
      id: 3,
      name: 'F1: The Inside Track',
      description: 'A book about Formula 1 racing',
      tags: ['Sports', 'Racing'],
    },
    {
      id: 4,
      name: 'Racing: The Need for Speed',
      description: 'A book about various forms of racing',
      tags: ['Sports', 'Racing'],
    },
  ];

  for (const book of books) {
    await createHobby(book);
  }
};
