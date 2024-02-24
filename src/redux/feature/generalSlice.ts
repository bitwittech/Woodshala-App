import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: 'Main',
};
export const general = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.name = action.payload.name;
    },
  },
});

export const {setRoute} = general.actions;
export default general.reducer;
