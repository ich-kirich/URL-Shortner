import { Box, Button, Collapse, Paper, Typography } from "@mui/material";
import { useState } from "react";
import AddLinkIcon from "@mui/icons-material/AddLink";
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

  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link.shortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };

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
        className={styles.btn__cut}
      >
        Click me!
      </Button>
      <Collapse in={visible}>
        {loading ? (
          <Loader />
        ) : (
          <Box>
            {error ? (
              <ViewError>{error}</ViewError>
            ) : (
              <Paper className={styles.link_wrapper}>
                <Box className={styles.link__textIcon}>
                  <AddLinkIcon />
                  <Typography variant="body1">{link.shortUrl}</Typography>
                </Box>
                <Button
                  onClick={handleCopyClick}
                  disabled={isCopied}
                  variant="contained"
                  color="primary"
                >
                  {isCopied ? "Copied!" : "Copy"}
                </Button>
              </Paper>
            )}
          </Box>
        )}
      </Collapse>
    </Box>
  );
}

export default ShortnerBtn;
