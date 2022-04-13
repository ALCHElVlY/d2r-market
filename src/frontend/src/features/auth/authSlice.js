/* eslint-disable no-shadow */
/* eslint-disable no-undef */
// External imports
import {
	createSlice,
	createAsyncThunk,
} from '@reduxjs/toolkit';

// Internal imports
import authService from './authService';


// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'));
// Set the initial state
const initialState = {
	user: user ? user : null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Register a new user
export const register = createAsyncThunk(
	'auth/register',
	async (user, thunkAPI) => {
		try {
			return await authService.register(user);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Log the user in
export const login = createAsyncThunk(
	'auth/login',
	async (user, thunkAPI) => {
		try {
			return await authService.login(user);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Log the user out
export const logout = createAsyncThunk(
	'auth/logout',
	async () => {
		await authService.logout();
	},
);

// Update the user
export const updateUser = createAsyncThunk(
	'auth/updateUser',
	async (user, thunkAPI) => {
		try {
			return await authService.updateUser(user);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	}
);

// Delete the user
export const deleteUser = createAsyncThunk(
	'auth/deleteUser',
	async (user, thunkAPI) => {
		try {
			await authService.deleteUser(user);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isSuccess = false;
			state.isError = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = '';
				state.user = action.payload;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = '';
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
			})
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = '';
				state.user = action.payload;
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(deleteUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteUser.fulfilled, (state) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = '';
				state.user = null;
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
				state.user = null;
			});
	},
});

export const {
	reset,
} = authSlice.actions;
export default authSlice.reducer;