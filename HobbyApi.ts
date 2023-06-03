import axios from 'axios';
import { Hobby } from './types';
import { addSampleBooks } from './hobbyService';

const api = axios.create({
  baseURL: 'http://localhost:8000/api/hobbies',
});

export const fetchHobbies = async (): Promise<Hobby[]> => {
  const response = await api.get('/hobbies');
  return response.data;
};

export const createHobby = async (hobby: Hobby): Promise<Hobby> => {
  const response = await api.post('/hobbies', hobby);
  return response.data;
};

export const updateHobby = async (hobby: Hobby): Promise<Hobby> => {
  const response = await api.put(`/hobbies/${hobby.id}`, hobby);
  return response.data;
};

export const deleteHobby = async (hobbyId: number): Promise<void> => {
  await api.delete(`/hobbies/${hobbyId}`);
};

