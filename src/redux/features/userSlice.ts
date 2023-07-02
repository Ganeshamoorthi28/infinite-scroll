import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userType } from "../../utils/types/redux/ReduxType";

const initialState: userType = {
  userName: null,
};

export const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUser: (state: userType, action: PayloadAction<userType>) => {
      state.userName = action.payload.userName;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUser = (state: { userData: { userName: string } }) =>
  state.userData.userName;

export default userSlice.reducer;
