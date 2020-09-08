import { createContext } from 'react';

// Inital State
const initialState = {
  authenticated: false,
  authData: null,
  user: null,
  video: null,
  comment: null,
}

// Create context
export const GlobalContext = createContext(initialState);