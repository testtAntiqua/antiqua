import { combineReducers } from "redux";
import { collectionReducer } from "./collectionReducer";

export const allReducers = combineReducers({
  collections: collectionReducer,
});
export default allReducers;
