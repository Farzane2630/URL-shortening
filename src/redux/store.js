import { configureStore } from "@reduxjs/toolkit";
import savedLinksReducer, { getLinks, saveLink, setIsClicked } from "./savedLinks";
import cardDataReducer, {fetchData} from "./card-info";

const reducers={
links: savedLinksReducer,
cartData: cardDataReducer
}

const store = configureStore({
  reducer: reducers,
});

export default store;

store.dispatch(getLinks());
store.dispatch(saveLink());
store.dispatch(setIsClicked());
store.dispatch(fetchData());
