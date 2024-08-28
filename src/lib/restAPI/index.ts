import axios, { AxiosResponse } from 'axios';
import { DATABASE_URL } from '../config';

const APIClient = axios.create({
  baseURL: DATABASE_URL,
});


export const fetchTasks = async (): Promise<any[]> => {
  try {
    const response: AxiosResponse<any> = await APIClient.get('/tasks.json');
    const data = response.data ? Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key]
    })) : [];
    return data;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};


export const createTask = async (task: { title: string; description: string }) => {
  try {
    await APIClient.post('/tasks.json', task);
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};

export const updateTask = async (taskId: string, task: { title: string; description: string }) => {
  try {
    console.log('Updating task:', taskId, task);  // Add this to see what's being sent
    await APIClient.patch(`/tasks/${taskId}.json`, task);
    console.log('Task updated successfully');  // Add this to confirm the request was successful
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};


export const deleteTask = async (taskId: string) => {
  try {
    await APIClient.delete(`/tasks/${taskId}.json`);
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
