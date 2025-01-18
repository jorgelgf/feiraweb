import { createSlice, configureStore } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isAuthenticated: false, email: '' },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.email = action.payload.email;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.email = '';
    },
  },
});

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});


export const { login, logout } = authSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;