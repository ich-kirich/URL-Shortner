import { combineReducers } from "redux";
import linkReducer from "./linkReducer";
import statisticReducer from "./statisticReducer";

export const rootReducer = combineReducers({
  link: linkReducer,
  statistic: statisticReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
