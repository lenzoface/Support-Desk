// The store.js is just housing the state so you have access to it anywhere in your application
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import ticketReducer from '../features/tickets/ticketSlice';
import noteReducer from '../features/notes/noteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tickets: ticketReducer,
    notes: noteReducer,
  },
});
