import { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom'; 
import '../../styles/App.css';
import { ToastContainer, toast } from 'react-toastify';
import { Link } from 'react-router-dom';  

const SignUpPage: React.FC = () => {
  const { signUp } = useAuth();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); 

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      toast.success('Signed up successfully');
      navigate('/login'); 
    } catch (err) {
      toast.error('Failed to sign up');
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-form"> 
        <h2>Sign Up</h2>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleSignUp}>Sign Up</button>
        <div className="login-link">
          <p>Already have an account? <Link to="/login">Log in</Link></p>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SignUpPage;
