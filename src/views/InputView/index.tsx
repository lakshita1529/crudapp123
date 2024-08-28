import React from 'react';
import InputField from '../../components/base/InputField';

interface InputContainerProps {
  title: string;
  description: string;
  setTitle: (value: string) => void;
  setDescription: (value: string) => void;
  onSubmit: () => void;
  isEditing: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  isEditing
}) => {
  return (
    <div className="input-container">
      <div className="form-group mb-3">
        <InputField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <InputField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="form-control"
        />
      </div>
      <button onClick={onSubmit} className="btn btn-primary">
        {isEditing ? 'Update Task' : 'Add Task'}
      </button>
    </div>
  );
};

export default InputContainer;