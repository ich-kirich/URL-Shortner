import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import styles from "./Header.module.scss";

function Header() {
  return (
    <AppBar className={styles.topBar}>
      <Container maxWidth="lg">
        <Toolbar className={styles.topBar_wrapper}>
          <Typography variant="h6" component="h1">
            <Link to="/" className={styles.topBar__link}>
              <FormattedMessage id="url_shortner" />
            </Link>
          </Typography>
          <ChangeLanguage />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
