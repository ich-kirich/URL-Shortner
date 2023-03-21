import { combineReducers } from "redux";
import linkReducer from "./linkReducer";

export const rootReducer = combineReducers({
  link: linkReducer,
  statistic: linkReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
