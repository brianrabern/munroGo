import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fields: {
        username: '',
        password: '',
        full_name: '',
        passwordConfirmation: ''
    },
    errorMessage: null
}

const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
        handleUsernameChange: (state, action) => {
            state.fields.username = action.payload
        },
        handleNameChange: (state, action) => {
            state.fields.full_name = action.payload
        },
        handlePasswordChange: (state, action) => {
            state.fields.password = action.payload
        },
        handlePasswordConfirmationChange: (state, action) => {
            state.fields.passwordConfirmation = action.payload
        },
        error: (state, action) => {
            state.errorMessage = action.payload
        },
        reset: () => initialState
    }
})

export const {
    handlePasswordChange,
    handlePasswordConfirmationChange,
    handleUsernameChange,
    handleNameChange,
    reset,
    error
} = signupSlice.actions;

export default signupSlice.reducer;
