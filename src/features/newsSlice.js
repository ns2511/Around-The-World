import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
  name: "news",
  initialState: { 
    country: "us", 
    category: "general", 
    isLoading: false,
    newsMode:"top-headlines",
    page:1,
  },
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload.country; // Update the country
    },
    changeCategory: (state, action) => {
      state.category = action.payload.category; // Update the category
    },
    startLoading: (state) => {
      state.isLoading = true; // Set loading state to true
    },
    stopLoading: (state) => {
      state.isLoading = false; // Set loading state to false
    },
    toggelNewsMode: (state)=>{
        state.newsMode = state.newsMode=== "top-headlines" ? "everything" : "top-headlines";
    },
    nextPage: (state)=>{
      state.page = state.page +1;
    },
    prePage: (state)=>{
      state.page = state.page -1;
    }

  },
});

export const { changeCountry, changeCategory, startLoading, stopLoading,toggelNewsMode, nextPage, prePage } = newsSlice.actions;
export default newsSlice.reducer;
