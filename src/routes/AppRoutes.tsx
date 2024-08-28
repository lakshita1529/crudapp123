import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import TaskPage from '../pages/TaskPage';
const AppRoutes = () => {
  return (
    <AuthProvider>
      <Router>
       
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUpPage />} />
        <Route path="/TaskPage" element={<TaskPage />} />
     
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default AppRoutes;
