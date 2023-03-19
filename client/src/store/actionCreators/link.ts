import { Dispatch } from "redux";
import { getOneLink } from "../../API/PostService";
import {
  ERROR_LOADING,
  FETCH_STATISTIC,
  FETCH_STATISTIC_ERROR,
  FETCH_STATISTIC_SUCCESS,
} from "../../libs/constants";
import { ILinkAction } from "../../types/types";

const fetchLink = () => {
  return async (dispatch: Dispatch<ILinkAction>) => {
    try {
      dispatch({ type: FETCH_STATISTIC });
      const response = await getOneLink("1");
      dispatch({
        type: FETCH_STATISTIC_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: FETCH_STATISTIC_ERROR, payload: ERROR_LOADING });
    }
  };
};

export default fetchLink;
