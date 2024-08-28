import { deleteTask } from '../lib/restAPI';

const useDeleteTask = (loadTasks: () => void) => {
  const deleteTaskById = async (taskId: string) => {
    try {
      await deleteTask(taskId);
      await loadTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return deleteTaskById;
};

export default useDeleteTask;
