import React, { useEffect} from 'react';
import InputContainer from '../InputContainer';
import useTasks from '../../hooks/useTasks';
import useAddTask from '../../hooks/useAddTask';
import useDeleteTask from '../../hooks/useDeleteTask';
import useEditTask from '../../hooks/useEditTask';
import TaskView from '../../views/TaskView';

const TaskContainer: React.FC = () => {
  const { tasks, loading, loadTasks } = useTasks();
  const { title, setTitle, description, setDescription, addTask } = useAddTask(loadTasks);
  const { editingTask, setEditingTask, editTask } = useEditTask(loadTasks);
  const deleteTask = useDeleteTask(loadTasks);


  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask, setTitle, setDescription]);

  const handleSubmit = () => {
    if (editingTask) {
      editTask({
        id: editingTask.id,
        title,
        description
      });
    } else {
      addTask();
    }
  };

  const handleEdit = (taskId: string) => {
    const task = tasks.find((t) => t.id === taskId);
    if (task) {
      setEditingTask(task);
    }
  };

  return (
    <>
      <InputContainer
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmit={handleSubmit}
        isEditing={!!editingTask}
      />
      <TaskView tasks={tasks} onEdit={handleEdit} onDelete={deleteTask} loading={loading}
      />
    </>
  );
};

export default TaskContainer;
