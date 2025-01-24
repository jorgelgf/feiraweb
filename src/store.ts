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

const stateModal = createSlice({
  name: 'modalForgotPassword',
  initialState: { isModalActive: false },
  reducers: {
    validationModal: (state, action) => {
      state.isModalActive = action.payload.isModalActive
    }
  }

})
export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    modalForgotPassword: stateModal.reducer,
  },
});


export const { login, logout } = authSlice.actions;
export const { validationModal } = stateModal.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;