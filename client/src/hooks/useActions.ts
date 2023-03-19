import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import fetchLink from "../store/actionCreators/link";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(fetchLink, dispatch);
};

export default useActions;
