import React from 'react';
import { Button, Card } from 'react-bootstrap';

interface TaskCardProps {
  title: string;
  content: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ title, content, onEdit, onDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{content}</Card.Text>
        <div className="d-flex justify-content-end">
          <Button 
            variant="primary" 
            className="me-2" 
            onClick={onEdit}
          >
            Edit
          </Button>
          <Button 
            variant="danger" 
            onClick={onDelete}
          >
            Delete
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TaskCard;
