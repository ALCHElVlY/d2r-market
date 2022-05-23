// External imports
import {
	createSlice,
	createAsyncThunk,
} from '@reduxjs/toolkit';

// Internal imports
import oauthService from './oauthService.js';

// Set the initial state
const initialState = {
	linkedAccounts: [],
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

// Set the battle.net credentials for the user
export const setBnetCredentials = createAsyncThunk(
	'oauth/set/bnet',
	async (user, thunkAPI) => {
		try {
			return await oauthService.setCredentials(user);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Get the battle.net credentials for the user
export const getBnetCredentials = createAsyncThunk(
	'oauth/get/bnet',
	async (user, thunkAPI) => {
		try {
			return await oauthService.getCredentials(user);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

// Reset the oauth credentials
export const resetOAuthCredentials = createAsyncThunk(
	'oauth/reset',
	async (state, thunkAPI) => {
		try {
			return await oauthService.resetCredentials(state);
		}
		catch (error) {
			const message = (error.response &&
				error.response.data && error.response.data.message)
			|| error.message || error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);



export const oauthSlice = createSlice({
	name: 'oauth',
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
            .addCase(getBnetCredentials.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getBnetCredentials.fulfilled, (state, action) => {
                state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = '';
				state.linkedAccounts = action.payload;
            })
            .addCase(getBnetCredentials.rejected, (state, action) => {
                state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
            })
			.addCase(resetOAuthCredentials.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(resetOAuthCredentials.fulfilled, (state) => {
				state.isLoading = false;
				state.isError = false;
				state.isSuccess = true;
				state.message = '';
				state.linkedAccounts = [];
			})
			.addCase(resetOAuthCredentials.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			});
    },
});

export const {
	reset,
} = oauthSlice.actions;
export default oauthSlice.reducer;