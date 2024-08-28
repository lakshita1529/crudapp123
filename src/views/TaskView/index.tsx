import React from 'react';
import { Button, Spinner, ListGroup } from 'react-bootstrap';

interface TaskViewProps {
  tasks: { id: string; title: string; description: string }[];
  loading: boolean;
  onEdit: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskView: React.FC<TaskViewProps> = ({ tasks, loading, onEdit, onDelete }) => {
  if (loading) {
    return (
      <div className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (tasks.length === 0) {
    return <div className="text-center">No tasks available</div>;
  }

  return (
    <ListGroup className="mt-4">
      {tasks.map((task) => (
        <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-start">
          <div>
            <h5>{task.title}</h5>
            <p>{task.description}</p>
          </div>
          <div>
            <Button variant="primary" className="me-2" onClick={() => onEdit(task.id)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => onDelete(task.id)}>
              Delete
            </Button>
          </div>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TaskView;
