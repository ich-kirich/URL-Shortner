import { Dispatch } from "redux";
import i18n from "i18next";
import { getStatistics } from "../../API/PostService";
import { LINK } from "../../libs/constants";
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
      dispatch({
        type: LINK.FETCH_LINK_ERROR,
        payload: i18n.t("error_loading"),
      });
    }
  };
};

export default fetchStatistic;
