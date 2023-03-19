import { Box, Button, Collapse } from "@mui/material";
import { useState } from "react";
import useActions from "../../hooks/useActions";
import useTypedSelector from "../../hooks/useTypedSelector";
import { IShortnerBtn } from "../../types/types";
import Loader from "../Loader/Loader";
import ViewError from "../ViewError/ViewError";
import styles from "./ShortnerBtn.module.scss";

function ShortnerBtn(props: IShortnerBtn) {
  const { url, isError } = props;
  const { link, error, loading } = useTypedSelector((state) => state.link);
  const [visible, setVisible] = useState(false);
  const fetchLink = useActions();

  const cutUrl = () => {
    fetchLink({ originalUrl: url });
    setVisible(true);
  };

  return (
    <Box className={styles.btn__wrapper}>
      <Button
        disabled={isError}
        variant="contained"
        color="primary"
        onClick={cutUrl}
      >
        Click me!
      </Button>
      <Collapse in={visible}>
        {loading ? (
          <Loader />
        ) : (
          <Box>
            {error ? <ViewError>{error}</ViewError> : <div>{link.id}</div>}
          </Box>
        )}
      </Collapse>
    </Box>
  );
}

export default ShortnerBtn;
