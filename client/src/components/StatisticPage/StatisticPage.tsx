import { Box, Container } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import { COLUMNS } from "../../libs/constants";
import Loader from "../Loader/Loader";
import StatisticTable from "../StatisticTable/StatisticTable";
import ViewError from "../ViewError/ViewError";

function StatisticPage() {
  const { id } = useParams();
  const { fetchStatistic } = useActions();
  useEffect(() => {
    fetchStatistic(id!);
  }, []);
  const { link, error, loading } = useTypedSelector((state) => state.statistic);
  return (
    <Container maxWidth="lg">
      {loading ? (
        <Loader />
      ) : (
        <Box>
          {error ? (
            <ViewError>{error}</ViewError>
          ) : (
            <Box>
              {link.statistics && (
                <StatisticTable statistics={link.statistics} />
              )}
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
}

export default StatisticPage;
