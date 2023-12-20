import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DataState {
  age: number;
}

const initialState: DataState = {
  age: 0,
};

export const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    setAge: (state: DataState, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
  }
});

export const { 
    setAge,
} = dataSlice.actions;


export default dataSlice.reducer;
