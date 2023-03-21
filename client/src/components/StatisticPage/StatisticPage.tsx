import { Box } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import Loader from "../Loader/Loader";
import StatisticTable from "../StatisticTable/StatisticTable";
import ViewError from "../ViewError/ViewError";

function StatisticPage() {
  const { id } = useParams();
  const { link, error, loading } = useTypedSelector((state) => state.statistic);
  const { fetchStatistic } = useActions();

  useEffect(() => {
    fetchStatistic(id!);
  }, []);
  return (
    <Box>
      {loading ? (
        <Loader />
      ) : (
        <Box>{error ? <ViewError>{error}</ViewError> : <StatisticTable />}</Box>
      )}
    </Box>
  );
}

export default StatisticPage;
