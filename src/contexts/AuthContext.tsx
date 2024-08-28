import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';
import { toast } from 'react-toastify';

interface User {
  email: string;
  uid: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const apiKey = 'AIzaSyB3daQUn8uzbshbuvd3Rsl0ooT_Hd6HBGs';

  const handleAuth = async (email: string, password: string, endpoint: string) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:${endpoint}?key=${apiKey}`,
        {
          email,
          password,
          returnSecureToken: true,
        }
      );
  
      const { idToken } = response.data;
      const decodedToken: any = jwtDecode(idToken);
      const uid = decodedToken.user_id;
  
      Cookies.set('uid', uid);
      Cookies.set('access_token', idToken);
      setUser({ email, uid });
  
      toast.success(endpoint === 'signUp' ? 'Signed up successfully' : 'Logged in successfully');
    } catch (error) {
      console.error('Authentication failed:', error.response?.data || error);
      toast.error('Authentication failed');
      throw error;
    }
  };

  const login = (email: string, password: string) => handleAuth(email, password, 'signInWithPassword');

  const signUp = (email: string, password: string) => handleAuth(email, password, 'signUp');

  const logout = () => {
    Cookies.remove('access_token');
    setUser(null);
  };

  const isAuthenticated = () => {
    return !!user;
  };

  useEffect(() => {
    const token = Cookies.get('access_token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const uid = decodedToken.user_id;
        const email = decodedToken.email;
        setUser({ email, uid });
      } catch (error) {
        console.error('Token decoding failed:', error);
        logout();
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
