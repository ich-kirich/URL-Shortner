import { Box } from "@mui/material";
import { useEffect } from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";

function MainPage() {
  const { link, error, loading } = useTypedSelector((state) => state.link);
  const fetchStatistic = useActions();
  useEffect(() => {
    fetchStatistic();
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Box>
          {error ? <ViewError>{error}</ViewError> : <div>{link.id}</div>}
        </Box>
      )}
    </div>
  );
}

export default MainPage;
