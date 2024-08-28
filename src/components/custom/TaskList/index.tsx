import React from 'react';
import TaskCard from '../../custom/TaskCard';

interface Task {
  id: number;
  title: string;
  description: string;
}

interface TaskListProps {
  tasks: Task[];
  onEdit: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            content={task.description}
            onEdit={() => onEdit(task)}
            onDelete={() => onDelete(task.id)}
          />
        ))
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
