import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import { useContext } from "react";
import { CONTEXT } from "../../libs/constants";
import styles from "./Header.module.scss";

function Header() {
  const { translation } = useContext(CONTEXT);
  return (
    <AppBar className={styles.topBar}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="h1">
            <Link href="/" className={styles.topBar__link}>
              {translation("url_shortner")}
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
