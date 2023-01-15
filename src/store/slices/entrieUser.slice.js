import { createSlice } from "@reduxjs/toolkit";

const entrieUserSlice = createSlice({
  name: "nameUser",
  initialState: "",
  reducers: {
    setUserName: (state, action) => action.payload,
  },
});

export const { setUserName, setUserLastName, setUserAge } =
  entrieUserSlice.actions;
export default entrieUserSlice.reducer;
