import { Container } from "@mui/material";
import { useContext } from "react";
import { CONTEXT } from "../../libs/constants";
import InputUrl from "../InputUrl/InputUrl";
import NameUrl from "../NameUrl/NameUrl";
import styles from "./MainPage.module.scss";

function MainPage() {
  const { translation } = useContext(CONTEXT);
  return (
    <Container maxWidth="sm" className={styles.shortner__selector}>
      <NameUrl>{translation("your_url")}</NameUrl>
      <InputUrl />
    </Container>
  );
}

export default MainPage;
