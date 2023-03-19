/* eslint-disable no-nested-ternary */
import { useEffect } from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";

function Header() {
  const { link, error, loading } = useTypedSelector((state) => state.link);
  const fetchStatistic = useActions();
  useEffect(() => {
    fetchStatistic();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Error...</h1>
      ) : (
        <div>{link.id}</div>
      )}
    </div>
  );
}

export default Header;
