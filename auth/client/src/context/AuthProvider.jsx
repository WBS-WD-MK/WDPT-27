import { useEffect, useState } from 'react';
import { me, signin, signup, signout } from '../data';
import { AuthContext } from '.';

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [checkSession, setCheckSession] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      const loggedinUser = await me();
      loggedinUser && setUser(loggedinUser);
      setLoading(false);
    };

    fetchUser();
  }, [checkSession]);
  return (
    <AuthContext
      value={{
        user,
        signin,
        signup,
        signout,
        me,
        setCheckSession,
        loading,
      }}
    >
      {children}
    </AuthContext>
  );
};

export default AuthContextProvider;
