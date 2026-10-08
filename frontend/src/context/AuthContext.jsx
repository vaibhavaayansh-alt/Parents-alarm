import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('sfps_user') || sessionStorage.getItem('sfps_user');
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch { localStorage.removeItem('sfps_user'); }
    }
    setLoading(false);
  }, []);

  const login = async (role, id, password, remember) => {
    const res = await api.login({ role, id, password });
    if (res.success) {
      setUser(res.user);
      if (remember) localStorage.setItem('sfps_user', JSON.stringify(res.user));
      else sessionStorage.setItem('sfps_user', JSON.stringify(res.user));
      return { success: true, user: res.user };
    }
    return { success: false, error: res.error };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('sfps_user');
    sessionStorage.removeItem('sfps_user');
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
