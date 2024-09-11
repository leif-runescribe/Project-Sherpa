import { createContext, useReducer, useEffect } from 'react';

// Create AuthContext
const AuthContext = createContext();

// Define the initial state
const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,
};

// Reducer to manage authentication state
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuthenticated: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

// AuthProvider component to wrap the app
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Persist authentication state on reload using localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');

    if (storedUser && storedToken) {
      dispatch({
        type: 'LOGIN',
        payload: {
          user: JSON.parse(storedUser),
          token: storedToken,
        },
      });
    }
  }, []);

  // Save token and user to localStorage when state updates
  useEffect(() => {
    if (state.isAuthenticated) {
      localStorage.setItem('user', JSON.stringify(state.user));
      localStorage.setItem('token', state.token);
    } else {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    }
  }, [state.isAuthenticated, state.user, state.token]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
