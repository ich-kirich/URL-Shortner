import { Typography } from "@mui/material";
import { IChildernProps } from "../../types/types";
import styles from "./NameUrl.module.scss";

function NameUrl(props: IChildernProps) {
  const { children } = props;
  return (
    <Typography variant="h6" component="h1" className={styles.text}>
      {children}
    </Typography>
  );
}

export default NameUrl;
