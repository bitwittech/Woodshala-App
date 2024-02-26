import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  route_name: 'Main',
  catagories: 'All product',
};
export const general = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setRoute: (state, action) => {
      state.route_name = action.payload.route_name;
    },
    setCatagories: (state, action) => {
      state.catagories = action.payload.catagories;
    },
  },
});

export const {setRoute, setCatagories} = general.actions;
export default general.reducer;
