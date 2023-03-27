import { Dispatch } from "redux";
import i18n from "i18next";
import { getStatistics } from "../../API/PostService";
import { STATS } from "../../libs/constants";
import { IAction } from "../../types/types";

const fetchStatistic = (id: string) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({ type: STATS.FETCH_STATS });
      const response = await getStatistics(id);
      dispatch({
        type: STATS.FETCH_STATS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: STATS.FETCH_STATS_ERROR,
        payload: i18n.t("error_loading"),
      });
    }
  };
};

export default fetchStatistic;
