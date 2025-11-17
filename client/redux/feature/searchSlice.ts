import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
  searchQuery: string;
}
const initialState: SearchState = {
  searchQuery: '',
};
const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state) => {
      state.searchQuery = '';
    },
  },
});
export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
