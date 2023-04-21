import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
//three steps when making request from the server
//1. request is made (loading)
//2. request is successful (success)
//3. request is failed (error)

//what is diff between false and null
//false means the request is not made
//null means the request is made but we are not sure if it is successful or failed

// addUser with createAsyncThunk
export const addingUser = createAsyncThunk("user/addUser", async (user) => {
  const response = await axios.post("http://localhost:5000/api/users", user);
  return response.data;
});
console.log(addingUser());

export const userSlice = createSlice({
  name: "user",
  // initialState is the initial state of the store
  initialState: {
    userData: {
      name: "",
      email: "",
    },

    //the loading is initially null because we are not making any request
    //when the request is made, the loading will be set to true
    //so when we request a user, the loading is true till we get the response
    loading: false,

    //the error is initially null because we are not making any request
    // the error will be set to true when the request is failed
    error: false,
  },
  reducers: {},
  //extraReducers is used to handle async actions
  extraReducers: {
    [addingUser.pending]: (state) => {
      state.loading = true;
    },
    [addingUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userData = action.payload;
      state.error = false;
    },
    [addingUser.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
