import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import fetchLink from "../store/actionCreators/link";
import fetchStatistic from "../store/actionCreators/statistic";

const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ fetchLink, fetchStatistic }, dispatch);
};

export default useActions;
