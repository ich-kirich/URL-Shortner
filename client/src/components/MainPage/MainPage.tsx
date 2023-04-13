import { Container } from "@mui/material";
import { FormattedMessage } from "react-intl";
import InputUrl from "../InputUrl/InputUrl";
import NameUrl from "../NameUrl/NameUrl";
import styles from "./MainPage.module.scss";

function MainPage() {
  return (
    <Container maxWidth="sm" className={styles.shortner__selector}>
      <NameUrl>
        <FormattedMessage id="your_url" />
      </NameUrl>
      <InputUrl />
    </Container>
  );
}

export default MainPage;
