import React from 'react';

interface TaskViewProps {
  tasks: { id: string; title: string; description: string }[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskView: React.FC<TaskViewProps> = ({ tasks, onEdit, onDelete }) => {
  return (
    <div className="task-view">
      <h2 className="text-center my-4">Task List</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <h5>{task.title}</h5>
              <p>{task.description}</p>
            </div>
            <div>
              <button onClick={() => onEdit(task.id)} className="btn btn-warning mx-2">Edit</button>
              <button onClick={() => onDelete(task.id)} className="btn btn-danger">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskView;
