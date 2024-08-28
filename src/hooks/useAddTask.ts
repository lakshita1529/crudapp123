import { useState } from 'react';
import { createTask } from '../lib/restAPI';

const useAddTask = (loadTasks: () => void) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const addTask = async () => {
    if (title.trim() && description.trim()) {
      try {
        await createTask({ title, description });
        await loadTasks(); // Refresh tasks
        setTitle('');
        setDescription('');
      } catch (error) {
        console.error('Error adding task:', error);
      }
    }
  };

  return { title, setTitle, description, setDescription, addTask };
};

export default useAddTask;
