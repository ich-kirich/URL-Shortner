import { Dispatch } from "redux";
import {
  ERROR_LOADING,
  FETCH_STATISTIC,
  FETCH_STATISTIC_ERROR,
} from "../../libs/constants";
import { IStaticticAction } from "../../types/types";

const fetchStatistic = () => {
  return async (dispatch: Dispatch<IStaticticAction>) => {
    try {
      dispatch({ type: FETCH_STATISTIC });
    } catch (e) {
      dispatch({ type: FETCH_STATISTIC_ERROR, payload: ERROR_LOADING });
    }
  };
};
