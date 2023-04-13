import { Dispatch } from "redux";
import i18n from "i18next";
import { addLink } from "../../API/PostService";
import { LINK } from "../../libs/constants";
import { IAction, INewLink } from "../../types/types";

const fetchLink = (link: INewLink) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      dispatch({ type: LINK.FETCH_LINK });
      const response = await addLink(link);
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

export default fetchLink;
