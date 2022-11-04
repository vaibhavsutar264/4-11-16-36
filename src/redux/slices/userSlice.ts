import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { BasicUser, UserState } from "../../types/interfaces";

export interface UserState {
  loading?: boolean
  error?: String
  userInfo?: { email?: String; password?: String; success?: Boolean; error?: String; token?: any; }
  token?: any
}

interface Action {
  payload?: string
}

export interface BasicUser {
  email?: string;
  role?: string;
  token?:string;
  password?: string;
  loading?: boolean;
}

const initialState: UserState = {
  loading: true,
  userInfo:{}
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userLogin: (state: UserState = { userInfo: {} },
      action: PayloadAction<BasicUser>) => ({
      ...state,
      userLogin: action.payload,
      loading: false,
    }),
    userLogout: () => initialState,
  },
});

export default userSlice.reducer;

export const {
  userLogin: userLoginActionCreator,
  userLogout: userLogoutActionCreator,
} = userSlice.actions;
