import { db } from '../config';

export const createTask = async (task: { title: string; description: string }) => {
  try {
    const path = '/tasks';
    await db.create(path, task); 
    console.log('Task created successfully');
  } catch (error) {
    console.error('Error creating task:', error);
    throw error;
  }
};


export const updateTask = async (taskId: string, task: { title: string; description: string }) => {
  try {
    const path = `/tasks/${taskId}`;
    await db.update(path, task); 
    console.log('Task updated successfully');
  } catch (error) {
    console.error('Error updating task:', error);
    throw error;
  }
};

export const fetchTasks = async (): Promise<any[]> => {
  try {
    const path = '/tasks';
    const data = await db.read(path); 
    const tasks = data ? Object.keys(data).map((key) => ({
      id: key,
      ...data[key],
    })) : [];
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

export const deleteTask = async (taskId: string) => {
  try {
    const path = `/tasks/${taskId}`;
    await db.remove(path); 
    console.log('Task deleted successfully');
  } catch (error) {
    console.error('Error deleting task:', error);
    throw error;
  }
};
