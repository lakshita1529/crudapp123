import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import '../../styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      toast.success('Logged in successfully');
      navigate('/TaskPage'); 
    } catch {
      toast.error('Failed to login');
    }
  };

  return (
    <div className="login-page mx-3">
      <div className="login-form">
        <h2>Login</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email" className='my-3'
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className='my-3 rounded' onClick={handleLogin}>Login</button>
        <p className="mt-3">
          Don't have an account? <Link to="/">Sign Up</Link>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default LoginPage;
