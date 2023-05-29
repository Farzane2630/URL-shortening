import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "../axios";

// fetch saved links from server
export const getLinks = createAsyncThunk("fetchLinksfromServer", async () => {
  const res = await api.get("/previuos-links");
  return res.data;
});

// save createdlinks objects
export const saveLink = createAsyncThunk(
  "postLinksIntoServer",
  async ({ id, originalLink, createdLink }) => {
    const newLink = {
      id,
      originalLink,
      createdLink,
      isClicked: false,
    };
    const res = await api.post("/previuos-links", newLink);

    return res.data;
  }
);

// set textContent of the button
export const setIsClicked = createAsyncThunk("setIsClicked", async (id) => {
  const res = await api.get("/previuos-links");
  res.data.find((link) => {
    if (link.id === id) {
      link.isClicked = true;
    }
    return link.isClicked;
  });
  return res.data;
});

const slice = createSlice({
  name: "previuos links",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLinks.fulfilled, (state, action) => {
      return action.payload;
    });

    builder.addCase(saveLink.fulfilled, (state, action) => {
      state.push(action.payload);
    });
    builder.addCase(setIsClicked.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});
export default slice.reducer;
