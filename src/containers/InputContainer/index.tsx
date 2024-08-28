import React from 'react';
import { Form, Button } from 'react-bootstrap';

interface InputContainerProps {
  title: string;
  description: string;
  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  onSubmit: () => void;
  isEditing: boolean;
}

const InputContainer: React.FC<InputContainerProps> = ({
  title,
  description,
  setTitle,
  setDescription,
  onSubmit,
  isEditing,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group controlId="taskTitle">
        <Form.Label>Task Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="taskDescription" className="mt-3">
        <Form.Label>Task Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-3">
        {isEditing ? 'Edit Task' : 'Add Task'}
      </Button>
    </Form>
  );
};

export default InputContainer;
