import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import TaskContainer from '../../containers/TaskContainer';
import { Button } from 'react-bootstrap';

const TaskPage: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Task Management</h1>
        <Button onClick={handleLogout} variant="danger">
          Logout
        </Button>
      </div>
      <TaskContainer />
    </div>
  );
};

export default TaskPage;
