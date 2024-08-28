
import { useState } from 'react';
import { updateTask } from '../lib/restAPI';

const useEditTask = (loadTasks: () => void) => {
  const [editingTask, setEditingTask] = useState<{ id: string; title: string; description: string } | null>(null);

  const editTask = async () => {
    if (editingTask) {
      try {
        await updateTask(editingTask.id, { title: editingTask.title, description: editingTask.description });
        loadTasks(); 
        setEditingTask(null); 
      } catch (error) {
        console.error('Error updating task:', error);
      }
    }
  };

  return {
    editingTask,
    setEditingTask,
    editTask
  };
};

export default useEditTask;
