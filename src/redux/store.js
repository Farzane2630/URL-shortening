import { configureStore } from "@reduxjs/toolkit";
import savedLinksReducer, { getLinks, saveLink, setIsClicked } from "./savedLinks";

const store = configureStore({
  reducer: savedLinksReducer,
});

export default store;

store.dispatch(getLinks());
store.dispatch(saveLink());
store.dispatch(setIsClicked());
