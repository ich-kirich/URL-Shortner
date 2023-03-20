import { Paper, Box, Typography, Button } from "@mui/material";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useState } from "react";
import styles from "./ShortUrl.module.scss";
import { IShortUrlProps } from "../../types/types";

function ShortUrl(props: IShortUrlProps) {
  const { link } = props;
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(link.shortUrl);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1000);
  };
  return (
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
  );
}

export default ShortUrl;
