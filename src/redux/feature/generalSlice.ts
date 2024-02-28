import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  route_name: 'Main',
  catagories: 'All product',
  modal: {
    open: false,
    type: '',
  },
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
    setModal: (state, action) => {
      state.modal = {...state, ...action.payload};
    },
  },
});

export const {setRoute, setCatagories, setModal} = general.actions;
export default general.reducer;
