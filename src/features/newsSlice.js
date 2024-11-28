import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk for fetching news
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ country, category }, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=3739a4b697e34e53b470ec66c201298e`
      );
      const data = await response.json();

      if (data.status !== "ok") throw new Error(data.message || "Failed to fetch news");
      return data.articles;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState: {
    country: "us",
    category: "general", // Default category
    isLoading: false,
    articles: [],
    error: null,
  },
  reducers: {
    changeCountry: (state, action) => {
      state.country = action.payload.country;
    },
    changeCategory: (state, action) => {
      state.category = action.payload.category;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    stopLoading: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.articles = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { changeCountry, changeCategory, startLoading, stopLoading } = newsSlice.actions;
export default newsSlice.reducer;
