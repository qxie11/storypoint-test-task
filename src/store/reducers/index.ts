import { combineReducers } from "redux";
import images from "./images";

const rootReducer = combineReducers({
  images,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;