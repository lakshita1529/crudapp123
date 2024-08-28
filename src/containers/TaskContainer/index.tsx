import React, { useEffect } from 'react';
import InputContainer from '../InputContainer';
import TaskView from '../../views/TaskView';
import useTasks from '../../hooks/useTasks';
import useAddTask from '../../hooks/useAddTask';
import useDeleteTask from '../../hooks/useDeleteTask';
import useEditTask from '../../hooks/useEditTask';

const TaskContainer: React.FC = () => {

  const { tasks, loading, loadTasks } = useTasks();
  const { title, setTitle, description, setDescription, addTask } = useAddTask(loadTasks);
  const deleteTask = useDeleteTask(loadTasks);
  const { editingTask, setEditingTask, editTask } = useEditTask(loadTasks);

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [editingTask, setTitle, setDescription]);

 
  const handleEdit = (taskId: string) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      setEditingTask(task);
    }
  };

  return (
    <div className="task-container container">
      <h2 className="text-center my-4">Task Management</h2>
      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <>
          <InputContainer
            title={title}
            description={description}
            setTitle={setTitle}
            setDescription={setDescription}
            onSubmit={editingTask ? editTask : addTask}
            isEditing={!!editingTask}
          />
          <TaskView
            tasks={tasks}
            onEdit={handleEdit}
            onDelete={deleteTask}
          />
        </>
      )}
    </div>
  );
};

export default TaskContainer;
