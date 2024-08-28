import { useState } from 'react';
import { updateTask } from '../lib/restAPI';

const useEditTask = (loadTasks: () => void) => {
  const [editingTask, setEditingTask] = useState<{ id: string; title: string; description: string } | null>(null);

  const editTask = async (updatedTask: { id: string; title: string; description: string }) => {
    if (updatedTask) {
      try {
        await updateTask(updatedTask.id, { title: updatedTask.title, description: updatedTask.description });
        await loadTasks(); 
        setEditingTask(null); 
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  return { editingTask, setEditingTask, editTask };
};

export default useEditTask;
