import { INITIAL_LINK, LINK } from "../../libs/constants";
import { IAction, ILinkState } from "../../types/types";

const initialState: ILinkState = {
  link: INITIAL_LINK,
  loading: false,
  error: null,
};

const linkReducer = (
  state: ILinkState = initialState,
  action: IAction,
): ILinkState => {
  switch (action.type) {
    case LINK.FETCH_LINK:
      return { loading: true, error: null, link: INITIAL_LINK };
    case LINK.FETCH_LINK_SUCCESS:
      return { loading: false, error: null, link: action.payload };
    case LINK.FETCH_LINK_ERROR:
      return { loading: false, error: action.payload, link: INITIAL_LINK };
    default:
      return state;
  }
};

export default linkReducer;
