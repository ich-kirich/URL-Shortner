import {
  FETCH_STATISTIC,
  FETCH_STATISTIC_ERROR,
  FETCH_STATISTIC_SUCCESS,
} from "../../libs/constants";
import { IStaticticAction, IStaticticState } from "../../types/types";

const initialState: IStaticticState = {
  statistic: [],
  loading: false,
  error: null,
};

const statisticReducer = (
  action: IStaticticAction,
  state = initialState,
): IStaticticState => {
  switch (action.type) {
    case FETCH_STATISTIC:
      return { loading: true, error: null, statistic: [] };
    case FETCH_STATISTIC_SUCCESS:
      return { loading: false, error: null, statistic: action.payload };
    case FETCH_STATISTIC_ERROR:
      return { loading: false, error: action.payload, statistic: [] };
    default:
      return state;
  }
};

export default statisticReducer;
