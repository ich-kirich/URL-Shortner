import { Box } from "@mui/material";
import { useEffect } from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";
import ShortnerBlock from "../ShortnerBlock/ShortnerBlock";
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
        <Box>{error ? <ViewError>{error}</ViewError> : <ShortnerBlock />}</Box>
      )}
    </div>
  );
}

export default MainPage;
