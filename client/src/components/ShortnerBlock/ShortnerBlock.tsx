import { Box } from "@mui/material";
import InputUrl from "../InputUrl/InputUrl";
import NameCurrency from "../NameCurrency/NameCurrency";
import styles from "./ShortnerBlock.module.scss";

function ShortnerBlock() {
  return (
    <Box className={styles.shortner__selector}>
      <NameCurrency>Your url:</NameCurrency>
      <InputUrl />
    </Box>
  );
}

export default ShortnerBlock;
