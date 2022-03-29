// External imports
import { configureStore } from '@reduxjs/toolkit';

// Internal imports
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
	},
});