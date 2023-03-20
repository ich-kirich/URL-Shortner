import { Box } from "@mui/material";
import InputUrl from "../InputUrl/InputUrl";
import NameUrl from "../NameUrl/NameUrl";
import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <Box className={styles.shortner__selector}>
      <NameUrl>Your url:</NameUrl>
      <InputUrl />
    </Box>
  );
}

export default MainPage;
