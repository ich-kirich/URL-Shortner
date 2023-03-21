import { Dispatch } from "redux";
import { getStatistics } from "../../API/PostService";
import { ERROR_LOADING, LINK } from "../../libs/constants";
import { ILinkAction } from "../../types/types";

const fetchStatistic = (id: string) => {
  return async (dispatch: Dispatch<ILinkAction>) => {
    try {
      dispatch({ type: LINK.FETCH_LINK });
      const response = await getStatistics(id);
      dispatch({
        type: LINK.FETCH_LINK_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: LINK.FETCH_LINK_ERROR, payload: ERROR_LOADING });
    }
  };
};

export default fetchStatistic;
