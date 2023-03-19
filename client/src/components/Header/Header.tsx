import { AppBar, Container, Link, Toolbar, Typography } from "@mui/material";
import styles from "./Header.module.scss";

function Header() {
  return (
    <AppBar className={styles.topBar}>
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" component="h1">
            <Link href="/" className={styles.topBar__link}>
              URL Shortner
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
