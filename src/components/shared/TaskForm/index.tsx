import React from 'react';

interface TaskFormProps {
  title: string;
  description: string;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDescriptionChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: () => void;
  buttonText: string;
}

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  onTitleChange,
  onDescriptionChange,
  onSubmit,
  buttonText,
}) => {
  return (
    <div className="container mt-4">
      <div className="card p-4">
        <h3 className="card-title mb-4">{buttonText}</h3>
        <div className="form-group mb-3">
          <label htmlFor="task-title" className="form-label">Title</label>
          <input
            type="text"
            id="task-title"
            value={title}
            onChange={onTitleChange}
            placeholder="Enter task title"
            className="form-control"
            required
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="task-description" className="form-label">Description</label>
          <textarea
            id="task-description"
            value={description}
            onChange={onDescriptionChange}
            placeholder="Enter task description"
            className="form-control"
            rows={4}
            maxLength={500}
            required
          />
        </div>

        <button onClick={onSubmit} className="btn btn-primary w-100">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
