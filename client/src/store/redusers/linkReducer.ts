import {
  FETCH_STATISTIC,
  FETCH_STATISTIC_ERROR,
  FETCH_STATISTIC_SUCCESS,
  INITIAL_LINK,
} from "../../libs/constants";
import { ILinkAction, ILinkState } from "../../types/types";

const initialState: ILinkState = {
  link: INITIAL_LINK,
  loading: false,
  error: null,
};

const linkReducer = (
  state: ILinkState = initialState,
  action: ILinkAction,
): ILinkState => {
  switch (action.type) {
    case FETCH_STATISTIC:
      return { loading: true, error: null, link: INITIAL_LINK };
    case FETCH_STATISTIC_SUCCESS:
      return { loading: false, error: null, link: action.payload };
    case FETCH_STATISTIC_ERROR:
      return { loading: false, error: action.payload, link: INITIAL_LINK };
    default:
      return state;
  }
};

export default linkReducer;
