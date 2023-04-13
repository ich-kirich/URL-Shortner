import { STATS } from "../../libs/constants";
import { IAction, IStatisticState } from "../../types/types";

const initialState: IStatisticState = {
  statistic: [],
  loading: false,
  error: null,
};

const statisticReducer = (
  state: IStatisticState = initialState,
  action: IAction,
): IStatisticState => {
  switch (action.type) {
    case STATS.FETCH_STATS:
      return { loading: true, error: null, statistic: [] };
    case STATS.FETCH_STATS_SUCCESS:
      return { loading: false, error: null, statistic: action.payload };
    case STATS.FETCH_STATS_ERROR:
      return { loading: false, error: action.payload, statistic: [] };
    default:
      return state;
  }
};

export default statisticReducer;
