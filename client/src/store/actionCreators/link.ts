import { Dispatch } from "redux";
import { addLink } from "../../API/PostService";
import { ERROR_LOADING, LINK } from "../../libs/constants";
import { ILinkAction, INewLink } from "../../types/types";

const fetchLink = (link: INewLink) => {
  return async (dispatch: Dispatch<ILinkAction>) => {
    try {
      dispatch({ type: LINK.FETCH_LINK });
      const response = await addLink(link);
      dispatch({
        type: LINK.FETCH_LINK_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({ type: LINK.FETCH_LINK_ERROR, payload: ERROR_LOADING });
    }
  };
};

export default fetchLink;
