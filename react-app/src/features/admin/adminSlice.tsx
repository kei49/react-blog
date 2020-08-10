import { createSlice } from '@reduxjs/toolkit';
import { create } from 'domain';

const adminSlice = createSlice({
  name: 'admin',
  initialState: [],
  reducers: {
    setAdminSettings(state, action) {
      const { domain, title, subtitle } = action.payload;
    }
  }
})

export const { setAdminSettings } = adminSlice.actions;
export default adminSlice.reducer;