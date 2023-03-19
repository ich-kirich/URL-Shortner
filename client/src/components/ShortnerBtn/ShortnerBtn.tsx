import { Box, Button } from "@mui/material";
import { IShortnerBtn } from "../../types/types";
import styles from "./ShortnerBtn.module.scss";

function ShortnerBtn(props: IShortnerBtn) {
  const { url, isError } = props;

  const cutUrl = () => {
    console.log(url);
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
    </Box>
  );
}

export default ShortnerBtn;
