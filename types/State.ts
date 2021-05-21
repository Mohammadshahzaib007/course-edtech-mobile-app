// signup state type
export interface SignupState {
  name: string;
  email: string;
  password: string;
}

// login state type
export interface LoginState {
    password: string;
  email: string;
}

// Action type for dispatch function
export const SET_NAME = "SET_NAME";
export const SET_EMAIL = "SET_EMAIL";
export const SET_PASSWORD = "SET_PASSWORD";

// action types
export interface SignupLocalAction {
  type: string;
  payload: string;
}
